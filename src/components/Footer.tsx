import type { PageRoute } from '../data/aeacData';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

const SITEMAP_LINKS: { route: PageRoute; label: string }[] = [
  { route: 'inicio', label: 'Inicio' },
  { route: 'institucion', label: 'Institución' },
  { route: 'programa', label: 'Programa Clínico' },
  { route: 'equipo', label: 'Equipo Multidisciplinario' },
  { route: 'comunidad', label: 'Comunidad y Guías' },
  { route: 'bolsa-trabajo', label: 'Bolsa de Trabajo' },
  { route: 'consejeria-linea', label: 'Consejería en Línea' },
  { route: 'expedientes-clinicos', label: 'Sistema Digital de Expedientes Clínicos' },
  { route: 'contacto', label: 'Contacto' },
  { route: 'privacidad', label: 'Política de Privacidad' },
];

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-5">
        <nav
          aria-label="Mapa del sitio"
          className="border-b border-slate-800 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 shrink-0">
            Mapa del sitio
          </span>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            {SITEMAP_LINKS.map((item) => (
              <li key={item.route}>
                <button
                  type="button"
                  onClick={() => onNavigate(item.route)}
                  className="text-slate-300 hover:text-white hover:underline transition-colors cursor-pointer whitespace-nowrap"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-slate-300 font-medium">
            Centro de Rehabilitación en Adicciones Ángeles de Esperanza, A.C. 2007
          </p>
          <p className="leading-relaxed">
            Irapuato, Guanajuato, México · Derechos reservados. ·{' '}
            <button
              type="button"
              onClick={() => onNavigate('privacidad')}
              className="text-slate-200 hover:text-white hover:underline cursor-pointer"
            >
              Política de privacidad y uso de datos personales
            </button>{' '}
            · Webmaster:{' '}
            <a
              href="https://cebraher.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline font-medium"
            >
              Cesar Braher
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
