/* Dynamics Diagram — vanilla JS port of dir-editorial.jsx dynamics.
   Renders a bifurcation / phase-portrait canvas into every
   [data-dynamics] element, progressively as it enters the viewport.

   Usage:
     <div class="section__bg" data-align="right">
       <canvas data-dynamics="logistic" data-direction="rtl"></canvas>
     </div>

   Kinds: logistic, hopf, saddle-node, pitchfork, cobweb, henon, lorenz
*/
(() => {
  const W = 1400, H = 800;
  const DENSITY = 0.9;
  const DURATION = 2800;

  function hexA(hex, a) {
    const h = hex.replace('#', '');
    const full = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
    const n = parseInt(full, 16);
    const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    return `rgba(${r},${g},${b},${a})`;
  }

  function accentFromCSS() {
    const v = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
    return v || '#2a4a6e';
  }

  function setup(canvas) {
    const kind = canvas.dataset.dynamics;
    const direction = canvas.dataset.direction || 'ltr';
    const duration = parseInt(canvas.dataset.duration || DURATION, 10);
    const density = parseFloat(canvas.dataset.density || DENSITY);
    const scaleMul = parseFloat(canvas.dataset.scaleMul || '1');
    const orientation = canvas.dataset.orientation || 'horizontal';
    const isVertical = orientation === 'vertical';
    const color = canvas.dataset.color || accentFromCSS();
    const isRTL = direction === 'rtl';

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    let progress = 0;
    let started = false;
    let raf;
    let startTime;

    const render = () => {
      ctx.clearRect(0, 0, W, H);
      const drawFn = DRAWERS[kind];
      if (!drawFn) return;
      if (isVertical) {
        // Rotate context 90° clockwise. Logical x-axis (bifurcation parameter)
        // ends up running top-to-bottom on screen; logical y becomes screen-x.
        // Pass swapped dimensions so the drawer thinks W=H_canvas, H=W_canvas.
        ctx.save();
        ctx.translate(W, 0);
        ctx.rotate(Math.PI / 2);
        drawFn(ctx, H, W, color, progress, isRTL, density, scaleMul);
        ctx.restore();
      } else {
        drawFn(ctx, W, H, color, progress, isRTL, density, scaleMul);
      }
    };

    const animate = (t) => {
      if (!startTime) startTime = t;
      progress = Math.min(1, (t - startTime) / duration);
      render();
      if (progress < 1) raf = requestAnimationFrame(animate);
    };

    // Fire only when the section center is roughly aligned with viewport center.
    // rootMargin shrinks the trigger band to the middle ~30% of viewport.
    const obs = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && !started) {
          started = true;
          raf = requestAnimationFrame(animate);
          obs.disconnect();
        }
      }
    }, { rootMargin: '-35% 0px -35% 0px', threshold: 0 });
    obs.observe(canvas);
  }

  /* ─── Drawers ────────────────────────────────────────── */

  const DRAWERS = {
    logistic: drawLogistic,
    hopf: drawHopf,
    'saddle-node': drawSaddleNode,
    pitchfork: drawPitchfork,
    cobweb: drawCobweb,
    henon: drawHenon,
    lorenz: drawLorenz,
  };

  function drawLogistic(ctx, W, H, color, progress, rtl, density) {
    const rMin = 2.5, rMax = 4.0;
    const cols = Math.floor(W * density * 1.2);
    const iters = 300, keep = 200;
    for (let i = 0; i < cols; i++) {
      const t = i / cols;
      const reveal = rtl ? 1 - t : t;
      if (reveal > progress) continue;
      const r = rMin + (rMax - rMin) * t;
      let x = 0.5;
      for (let k = 0; k < iters - keep; k++) x = r * x * (1 - x);
      for (let k = 0; k < keep; k++) {
        x = r * x * (1 - x);
        const dx = t * W;
        const dy = (1 - x) * H;
        const alpha = 0.18 + 0.28 * (1 - Math.abs(r - 3.57) / 1.4);
        ctx.fillStyle = hexA(color, alpha);
        ctx.fillRect(dx, dy, 1, 1);
      }
    }
  }

  function drawHopf(ctx, W, H, color, progress, rtl, density) {
    const midY = H / 2;
    const muMin = -1, muMax = 1;
    const muAxisW = W;
    const steps = Math.floor(muAxisW * density);
    ctx.lineWidth = 1.25;
    for (let i = 0; i < steps; i++) {
      const t = i / steps;
      const reveal = rtl ? 1 - t : t;
      if (reveal > progress) continue;
      const mu = muMin + (muMax - muMin) * t;
      const x = t * W;
      const ampScale = H * 0.35;
      if (mu < 0) {
        ctx.fillStyle = hexA(color, 0.55);
        ctx.fillRect(x, midY, 1.4, 1.4);
      } else {
        const amp = Math.sqrt(mu);
        const yOff = amp * ampScale;
        ctx.fillStyle = hexA(color, 0.70);
        ctx.fillRect(x, midY - yOff, 1.4, 2.2);
        ctx.fillRect(x, midY + yOff, 1.4, 2.2);
        if (i % 4 === 0) {
          ctx.fillStyle = hexA(color, 0.28);
          ctx.fillRect(x, midY, 1.4, 1.4);
        }
      }
    }
    const stations = [-0.7, -0.3, 0.15, 0.55, 0.9];
    stations.forEach((mu) => {
      const px = ((mu - muMin) / (muMax - muMin)) * W;
      const reveal = rtl ? 1 - px / W : px / W;
      if (reveal > progress) return;
      const local = Math.min(1, Math.max(0, (progress - reveal) / 0.25));
      drawHopfSpiral(ctx, px, midY, 110, mu, local, color);
    });
  }

  function drawHopfSpiral(ctx, cx, cy, maxR, mu, t, color) {
    const target = mu > 0 ? Math.sqrt(mu) * maxR * 0.9 : 0;
    const turns = 3.5;
    const pts = 180;
    const maxIdx = Math.floor(pts * t);
    ctx.beginPath();
    for (let i = 0; i < maxIdx; i++) {
      const f = i / pts;
      const theta = f * turns * Math.PI * 2;
      const r = target + (maxR * 0.9 - target) * Math.exp(-f * 1.8);
      const x = cx + Math.cos(theta) * r;
      const y = cy + Math.sin(theta) * r;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = hexA(color, 0.42);
    ctx.lineWidth = 1.4;
    ctx.stroke();
    if (mu > 0) {
      ctx.beginPath();
      ctx.arc(cx, cy, target, 0, Math.PI * 2);
      ctx.strokeStyle = hexA(color, 0.60 * t);
      ctx.lineWidth = 2.0;
      ctx.stroke();
    }
  }

  function drawSaddleNode(ctx, W, H, color, progress, rtl, density) {
    const midY = H / 2;
    const muMin = -1.2, muMax = 0.4;
    const muSpan = muMax - muMin;
    const ampScale = H * 0.42;
    const steps = Math.floor(W * density * 1.5);
    ctx.strokeStyle = hexA(color, 0.08);
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, midY); ctx.lineTo(W, midY); ctx.stroke();
    const folds = [
      { shift: 0.0, amp: 1.0, alpha: 1.0 },
      { shift: -0.22, amp: 0.75, alpha: 0.55 },
      { shift: -0.45, amp: 0.52, alpha: 0.30 },
    ];
    folds.forEach(fold => {
      for (let i = 0; i < steps; i++) {
        const t = i / steps;
        const reveal = rtl ? 1 - t : t;
        if (reveal > progress) continue;
        const mu = muMin + muSpan * t - fold.shift;
        const x = t * W;
        if (mu <= 0) {
          const amp = Math.sqrt(-mu) * ampScale * fold.amp;
          ctx.fillStyle = hexA(color, 0.40 * fold.alpha);
          ctx.fillRect(x, midY - amp, 1, 1.4);
          if (i % 5 < 3) {
            ctx.fillStyle = hexA(color, 0.22 * fold.alpha);
            ctx.fillRect(x, midY + amp, 1, 1.4);
          }
        }
      }
    });
  }

  function drawPitchfork(ctx, W, H, color, progress, rtl, density) {
    const midY = H / 2;
    const muMin = -1, muMax = 1;
    const muSpan = muMax - muMin;
    const ampScale = H * 0.38;
    const steps = Math.floor(W * density * 1.5);
    ctx.strokeStyle = hexA(color, 0.06);
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, midY); ctx.lineTo(W, midY); ctx.stroke();
    for (let i = 0; i < steps; i++) {
      const t = i / steps;
      const reveal = rtl ? 1 - t : t;
      if (reveal > progress) continue;
      const mu = muMin + muSpan * t;
      const x = t * W;
      if (mu < 0) {
        ctx.fillStyle = hexA(color, 0.42);
        ctx.fillRect(x, midY, 1, 1.4);
      } else {
        if (i % 5 < 2) {
          ctx.fillStyle = hexA(color, 0.22);
          ctx.fillRect(x, midY, 1, 1.2);
        }
        const amp = Math.sqrt(mu) * ampScale;
        ctx.fillStyle = hexA(color, 0.42);
        ctx.fillRect(x, midY - amp, 1, 1.4);
        ctx.fillRect(x, midY + amp, 1, 1.4);
      }
    }
  }

  function drawCobweb(ctx, W, H, color, progress, rtl, density) {
    const pad = Math.min(W, H) * 0.08;
    const side = Math.min(W, H) - pad * 2;
    const panelX = rtl ? W - pad - side : pad;
    const panelY = (H - side) / 2;
    const r = 3.58;
    ctx.strokeStyle = hexA(color, 0.12); ctx.lineWidth = 1;
    ctx.strokeRect(panelX, panelY, side, side);
    ctx.beginPath();
    const steps = 200;
    for (let i = 0; i <= steps; i++) {
      const xN = i / steps;
      const yReal = r * xN * (1 - xN);
      const px = panelX + xN * side;
      const py = panelY + side - yReal * side;
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.strokeStyle = hexA(color, 0.30); ctx.lineWidth = 1.2; ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(panelX, panelY + side);
    ctx.lineTo(panelX + side, panelY);
    ctx.strokeStyle = hexA(color, 0.18); ctx.lineWidth = 1; ctx.stroke();
    const totalIter = 40;
    const shown = Math.floor(totalIter * progress);
    let x = 0.1;
    ctx.strokeStyle = hexA(color, 0.55); ctx.lineWidth = 1.2;
    ctx.beginPath();
    let px = panelX + x * side;
    let py = panelY + side - x * side;
    ctx.moveTo(px, py);
    for (let k = 0; k < shown; k++) {
      const xNext = r * x * (1 - x);
      const py2 = panelY + side - xNext * side;
      ctx.lineTo(px, py2);
      const px2 = panelX + xNext * side;
      ctx.lineTo(px2, py2);
      px = px2; py = py2; x = xNext;
    }
    ctx.stroke();
  }

  function drawHenon(ctx, W, H, color, progress, rtl, density) {
    const a = 1.4, b = 0.3;
    const total = Math.floor(30000 * density);
    const shown = Math.floor(total * progress);
    const scale = Math.min(W / 3, H / 1) * 0.75;
    const cx = W / 2, cy = H / 2;
    let x = 0.1, y = 0;
    for (let i = 0; i < 200; i++) { const nx = 1 - a * x * x + y; y = b * x; x = nx; }
    for (let i = 0; i < shown; i++) {
      const nx = 1 - a * x * x + y;
      y = b * x; x = nx;
      const sx = cx + (rtl ? -x : x) * scale;
      const sy = cy - y * scale * 3.2;
      const fade = 0.14 + 0.26 * (1 - i / total);
      ctx.fillStyle = hexA(color, fade);
      ctx.fillRect(sx, sy, 1, 1);
    }
  }

  function drawLorenz(ctx, W, H, color, progress, rtl, density, scaleMul = 1) {
    const sigma = 10, rho = 28, beta = 8 / 3;
    const dt = 0.008;
    const totalSteps = Math.floor(16000 * density);
    const shown = Math.floor(totalSteps * progress);
    const scale = Math.min(W / 50, H / 55) * 1.0 * scaleMul;
    const cx = W / 2, cy = H * 0.58;
    let x = 0.1, y = 0, z = 0;
    for (let i = 0; i < 200; i++) {
      const dx = sigma * (y - x);
      const dyv = x * (rho - z) - y;
      const dz = x * y - beta * z;
      x += dx * dt; y += dyv * dt; z += dz * dt;
    }
    ctx.lineWidth = 0.6;
    ctx.strokeStyle = hexA(color, 0.22);
    ctx.beginPath();
    let first = true;
    for (let i = 0; i < shown; i++) {
      const dx = sigma * (y - x);
      const dyv = x * (rho - z) - y;
      const dz = x * y - beta * z;
      x += dx * dt; y += dyv * dt; z += dz * dt;
      const sx = cx + (rtl ? -x : x) * scale;
      const sy = cy - (z - 27) * scale;
      if (first) { ctx.moveTo(sx, sy); first = false; }
      else ctx.lineTo(sx, sy);
    }
    ctx.stroke();
  }

  /* ─── Init ─────────────────────────────────────────────── */
  function init() {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    document.querySelectorAll('canvas[data-dynamics]').forEach(setup);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
