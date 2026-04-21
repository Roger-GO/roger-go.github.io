import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import countriesData from '../data/countries.json';

type Category = 'Heritage' | 'Education' | 'Work' | 'Conference' | 'Diving';

interface CountryDetail {
  title: string;
  description: string;
}

interface Country {
  name: string;
  coordinates: [number, number];
  categories: Category[];
  details: CountryDetail[];
}

const CATEGORY_COLORS: Record<Category, string> = {
  Heritage: '#9b87b5',
  Education: '#6fa8c7',
  Work: '#7fb088',
  Conference: '#c87e8a',
  Diving: '#d4a055',
};

function getPrimaryColor(categories: Category[]): string {
  const priority: Category[] = ['Work', 'Education', 'Conference', 'Heritage', 'Diving'];
  for (const cat of priority) {
    if (categories.includes(cat)) return CATEGORY_COLORS[cat];
  }
  return '#6b7280';
}

function DisableScrollZoom() {
  const map = useMap();
  useEffect(() => {
    map.scrollWheelZoom.disable();
  }, [map]);
  return null;
}

export default function WorldMap() {
  const [activeFilters, setActiveFilters] = useState<Set<Category>>(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); obs.disconnect(); } },
      { rootMargin: '200px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const countries: Country[] = countriesData as Country[];

  const toggleFilter = (cat: Category) => {
    setActiveFilters(prev => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat); else next.add(cat);
      return next;
    });
  };

  const isCountryVisible = (country: Country) => {
    if (activeFilters.size === 0) return true;
    return country.categories.some(cat => activeFilters.has(cat));
  };

  const allCategories: Category[] = ['Heritage', 'Education', 'Work', 'Conference', 'Diving'];

  return (
    <div ref={containerRef}>
      {/* Category Filters */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
        {allCategories.map(cat => {
          const isActive = activeFilters.has(cat);
          return (
            <button
              key={cat}
              onClick={() => toggleFilter(cat)}
              style={{
                padding: '6px 14px',
                borderRadius: '999px',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: `2px solid ${CATEGORY_COLORS[cat]}`,
                background: isActive ? CATEGORY_COLORS[cat] : 'transparent',
                color: isActive ? '#fff' : CATEGORY_COLORS[cat],
                transition: 'all 0.2s ease',
                minHeight: '36px',
                fontFamily: 'inherit',
              }}
              aria-pressed={isActive}
            >
              {cat}
            </button>
          );
        })}
        {activeFilters.size > 0 && (
          <button
            onClick={() => setActiveFilters(new Set())}
            style={{
              padding: '6px 14px',
              borderRadius: '999px',
              fontSize: '0.8rem',
              fontWeight: 500,
              cursor: 'pointer',
              border: '1px solid #e5e7eb',
              background: 'transparent',
              color: '#8b8da3',
              minHeight: '36px',
              fontFamily: 'inherit',
            }}
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Map */}
      {isVisible ? (
        <div style={{ width: '100%', height: '500px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
          <MapContainer
            center={[20, 10] as LatLngExpression}
            zoom={2}
            style={{ width: '100%', height: '100%' }}
            zoomControl={true}
            attributionControl={true}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
            />
            <DisableScrollZoom />
            {countries.filter(isCountryVisible).map(country => (
              <CircleMarker
                key={country.name}
                center={country.coordinates as LatLngExpression}
                radius={8}
                pathOptions={{
                  fillColor: getPrimaryColor(country.categories),
                  fillOpacity: 0.85,
                  color: '#fff',
                  weight: 2,
                }}
              >
                <Popup>
                  <div style={{ fontFamily: 'Inter, sans-serif', minWidth: '180px', color: '#18181b' }}>
                    <strong style={{ fontSize: '0.95rem', display: 'block', marginBottom: '8px', color: '#18181b' }}>
                      {country.name}
                    </strong>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '10px' }}>
                      {country.categories.map(cat => (
                        <span
                          key={cat}
                          style={{
                            fontSize: '0.68rem',
                            fontWeight: 600,
                            padding: '1px 6px',
                            borderRadius: '4px',
                            background: CATEGORY_COLORS[cat],
                            color: '#fff',
                          }}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    {country.details.map((d, i) => (
                      <div key={i} style={{ marginBottom: '6px' }}>
                        <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1a1a2e' }}>{d.title}</div>
                        <div style={{ fontSize: '0.78rem', color: '#555770', lineHeight: 1.5 }}>{d.description}</div>
                      </div>
                    ))}
                  </div>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>
      ) : (
        <div style={{
          width: '100%',
          height: '500px',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f1729',
          color: '#5a6d88',
          fontSize: '0.9rem',
        }}>
          Loading interactive map...
        </div>
      )}
    </div>
  );
}
