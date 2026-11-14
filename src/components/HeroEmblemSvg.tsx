export function HeroEmblemSvg() {
  return (
    <div className="w-full h-full min-h-[340px] bg-white border border-slate-200 rounded-lg p-6 sm:p-8 flex flex-col justify-between">
      <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200 pb-3">
        <span>Modelo Terapéutico Residencial</span>
        <span className="font-mono tabular-nums">6 Meses · Irapuato</span>
      </div>

      <div className="my-6 flex items-center justify-center">
        <svg
          viewBox="0 0 420 230"
          role="img"
          aria-label="Diagrama arquitectónico de las cinco fases de cambio terapéutico durante seis meses de tratamiento residencial"
          className="w-full max-w-[400px] h-auto"
        >
          <defs>
            <pattern id="aeac-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path
                d="M 24 0 L 0 0 0 24"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="0.75"
              />
            </pattern>
          </defs>

          <rect x="0" y="0" width="420" height="230" fill="url(#aeac-grid)" rx="6" />

          {/* Baseline timeline axis */}
          <line x1="34" y1="184" x2="386" y2="184" stroke="#94A3B8" strokeWidth="1.25" />

          {/* Progression arc */}
          <path
            d="M 46 164 C 120 156, 150 112, 210 92 C 270 72, 315 52, 374 44"
            fill="none"
            stroke="#1D4ED8"
            strokeWidth="2.5"
          />

          {/* Clinical support area */}
          <path
            d="M 46 164 C 120 156, 150 112, 210 92 C 270 72, 315 52, 374 44 L 374 184 L 46 184 Z"
            fill="#1D4ED8"
            fillOpacity="0.06"
          />

          {/* Stage vertical guides and nodes */}
          {[
            { x: 46, y: 164, label: '01', name: 'Ingreso', accent: '#DC2626' },
            { x: 128, y: 142, label: '02', name: 'Estabilización', accent: '#1D4ED8' },
            { x: 210, y: 92, label: '03', name: 'Preparación', accent: '#1D4ED8' },
            { x: 292, y: 60, label: '04', name: 'Acción', accent: '#1D4ED8' },
            { x: 374, y: 44, label: '05', name: 'Reinserción', accent: '#0F172A' },
          ].map((node) => (
            <g key={node.label}>
              <line
                x1={node.x}
                y1={node.y}
                x2={node.x}
                y2="184"
                stroke="#CBD5E1"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <circle cx={node.x} cy={node.y} r="6" fill="#FFFFFF" stroke={node.accent} strokeWidth="2.5" />
              <text
                x={node.x}
                y="202"
                textAnchor="middle"
                fill="#0F172A"
                fontSize="10"
                fontFamily="IBM Plex Mono, monospace"
                fontWeight="500"
              >
                {node.label}
              </text>
              <text
                x={node.x}
                y="216"
                textAnchor="middle"
                fill="#475569"
                fontSize="9.5"
                fontFamily="Poppins, sans-serif"
              >
                {node.name}
              </text>
            </g>
          ))}

          {/* Top left label */}
          <rect x="18" y="16" width="166" height="44" rx="4" fill="#FFFFFF" stroke="#E2E8F0" />
          <text
            x="28"
            y="34"
            fill="#0F172A"
            fontSize="10.5"
            fontFamily="Poppins, sans-serif"
            fontWeight="600"
          >
            Prochaska y DiClemente
          </text>
          <text
            x="28"
            y="49"
            fill="#475569"
            fontSize="9.5"
            fontFamily="Poppins, sans-serif"
          >
            Desintoxicación · 12 Pasos · SEP
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-4 text-left">
        <div>
          <p className="text-xs text-slate-500">Supervisión</p>
          <p className="text-sm font-semibold text-slate-900 mt-0.5">Médica y Nutricional</p>
        </div>
        <div>
          <p className="text-xs text-slate-500">Derechos Humanos</p>
          <p className="text-sm font-semibold text-slate-900 mt-0.5">Trato Digno PRODHEG</p>
        </div>
        <div>
          <p className="text-xs text-slate-500">Vinculación</p>
          <p className="text-sm font-semibold text-slate-900 mt-0.5">Familia y Empleo</p>
        </div>
      </div>
    </div>
  );
}
