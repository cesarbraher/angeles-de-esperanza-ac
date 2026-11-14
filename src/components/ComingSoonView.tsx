import { ArrowLeft } from 'lucide-react';
import type { PageRoute } from '../data/aeacData';

interface ComingSoonViewProps {
  title: string;
  onNavigate: (route: PageRoute) => void;
}

export function ComingSoonView({ title, onNavigate }: ComingSoonViewProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
      <section className="bg-white border border-slate-200 rounded-lg p-8 sm:p-14 text-center space-y-6">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
          Ángeles de Esperanza, A.C.
        </p>

        <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
          {title}
        </h1>

        <p className="font-display text-4xl sm:text-5xl font-bold tracking-wider text-[#1D4ED8] py-2">
          PRÓXIMAMENTE
        </p>

        <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
          Esta sección se encuentra en preparación para integrarse próximamente a la plataforma institucional.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate('inicio')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-slate-300 bg-[#FAF9F6] text-slate-800 text-sm font-medium hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </button>
          <button
            type="button"
            onClick={() => onNavigate('contacto')}
            className="px-5 py-2.5 rounded-md bg-[#DC2626] text-white text-sm font-semibold hover:bg-red-700 transition-colors cursor-pointer"
          >
            Ir a Contacto
          </button>
        </div>
      </section>
    </div>
  );
}
