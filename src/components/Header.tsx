import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import type { PageRoute } from '../data/aeacData';

interface HeaderProps {
  activeRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

const NAV_ITEMS: { route: PageRoute; label: string }[] = [
  { route: 'inicio', label: 'Inicio' },
  { route: 'institucion', label: 'Institución' },
  { route: 'programa', label: 'Programa' },
  { route: 'equipo', label: 'Equipo' },
  { route: 'comunidad', label: 'Comunidad' },
  { route: 'bolsa-trabajo', label: 'Bolsa de Trabajo' },
  { route: 'consejeria-linea', label: 'Consejería en Línea' },
  { route: 'expedientes-clinicos', label: 'Expedientes Clínicos' },
];

export function Header({ activeRoute, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSelect = (route: PageRoute) => {
    onNavigate(route);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        <button
          type="button"
          onClick={() => handleSelect('inicio')}
          className="inline-flex items-center gap-2.5 font-display text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8]"
        >
          <img
            src="/assets/aistudio/LOGOTIPO_TRANSPARENTE_13f56971.png"
            alt="Logotipo Ángeles de Esperanza A.C."
            className="h-9 w-9 object-contain shrink-0"
          />
          <span>ÁNGELES DE ESPERANZA A.C.</span>
        </button>

        <nav aria-label="Navegación principal" className="hidden xl:flex items-center gap-4">
          {NAV_ITEMS.map((item) => {
            const isActive = activeRoute === item.route;
            return (
              <button
                key={item.route}
                type="button"
                onClick={() => handleSelect(item.route)}
                className={`relative py-2 text-[13px] font-medium whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8] ${
                  isActive ? 'text-[#1D4ED8]' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#1D4ED8]"
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleSelect('contacto')}
            className={`hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC2626] ${
              activeRoute === 'contacto'
                ? 'bg-slate-900 text-white'
                : 'bg-[#DC2626] text-white hover:bg-red-700'
            }`}
          >
            Contacto
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="xl:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeRoute === item.route;
            return (
              <button
                key={item.route}
                type="button"
                onClick={() => handleSelect(item.route)}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-blue-50 text-[#1D4ED8]'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => handleSelect('contacto')}
              className="w-full px-4 py-2.5 rounded-md text-sm font-medium bg-[#DC2626] text-white hover:bg-red-700 transition-colors cursor-pointer"
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
