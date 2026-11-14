import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import {
  COMMUNITY_GUIDES,
  FACILITY_AREAS,
  INSTITUTION_INFO,
  type CommunityGuide,
} from '../data/aeacData';

type CategoryFilter = 'Todas' | CommunityGuide['category'];

export function CommunityView() {
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('Todas');
  const [selectedGuideId, setSelectedGuideId] = useState<string>(COMMUNITY_GUIDES[0].id);

  const filteredGuides =
    categoryFilter === 'Todas'
      ? COMMUNITY_GUIDES
      : COMMUNITY_GUIDES.filter((guide) => guide.category === categoryFilter);

  const activeGuide =
    filteredGuides.find((guide) => guide.id === selectedGuideId) ?? filteredGuides[0];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Header */}
      <section className="space-y-4 border-b border-slate-200 pb-10">
        <p className="text-xs font-medium uppercase tracking-wider text-[#1D4ED8]">
          Instalaciones, Medios y Guías Familiares
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight text-balance max-w-3xl">
          Espacios diseñados para la recuperación y recursos informativos para familias
        </h1>
        <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
          Conoce las áreas operativas de nuestra sede en Irapuato, nuestros canales oficiales en redes sociales ({INSTITUTION_INFO.socialHandle}) y guías clínicas redactadas para acompañar el proceso de rehabilitación.
        </p>
      </section>

      {/* Facility Areas (pages/galerias.html) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-wider text-[#1D4ED8]">
              Infraestructura Operativa · 120.00 m²
            </p>
            <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">
              Áreas funcionales del centro residencial
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-500">
            Agua potable · Electricidad · Internet · Protección Civil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITY_AREAS.map((area) => (
            <article
              key={area.number}
              className="bg-white border border-slate-200 rounded-lg p-6 space-y-3"
            >
              <p className="font-mono text-xs font-semibold text-[#1D4ED8] tabular-nums">
                Área {area.number}
              </p>
              <h3 className="text-base font-semibold text-slate-900">{area.name}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{area.purpose}</p>
              <p className="text-xs text-slate-500 border-t border-slate-100 pt-3 leading-relaxed">
                {area.specifications}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Official Channels Showcase */}
      <section className="bg-white border border-slate-200 rounded-lg p-7 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <p className="text-xs font-medium uppercase tracking-wider text-[#DC2626]">
            Difusión y Testimonios Oficiales
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
            Canales oficiales {INSTITUTION_INFO.socialHandle}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Accede a cápsulas informativas, charlas de prevención, recorridos de instalaciones y material audiovisual oficial en nuestras plataformas verificadas.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0">
          {INSTITUTION_INFO.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-slate-300 bg-[#FAF9F6] text-sm font-medium text-slate-800 hover:border-[#1D4ED8] hover:text-[#1D4ED8] transition-colors whitespace-nowrap"
            >
              {social.name}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      </section>

      {/* Family & Clinical Resource Guides (pages/blog.html) */}
      <section className="space-y-6 border-t border-slate-200 pt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-wider text-[#1D4ED8]">
              Biblioteca de Apoyo Familiar
            </p>
            <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">
              Guías clínicas y orientación práctica
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filtrar guías por categoría"
            className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-lg"
          >
            {(['Todas', 'Familia', 'Clínica', 'Metodología'] as CategoryFilter[]).map(
              (category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={categoryFilter === category}
                  onClick={() => {
                    setCategoryFilter(category);
                    const nextList =
                      category === 'Todas'
                        ? COMMUNITY_GUIDES
                        : COMMUNITY_GUIDES.filter((g) => g.category === category);
                    if (nextList.length > 0) {
                      setSelectedGuideId(nextList[0].id);
                    }
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    categoryFilter === category
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {category}
                </button>
              ),
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-3">
            {filteredGuides.map((guide) => {
              const isSelected = activeGuide?.id === guide.id;
              return (
                <button
                  key={guide.id}
                  type="button"
                  onClick={() => setSelectedGuideId(guide.id)}
                  className={`w-full text-left p-5 rounded-lg border transition-colors cursor-pointer space-y-2 ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-900 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 text-xs ${
                      isSelected ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    <span>{guide.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{guide.readTime}</span>
                  </div>
                  <h3 className="text-base font-semibold leading-snug">{guide.title}</h3>
                  <p
                    className={`text-xs leading-relaxed ${
                      isSelected ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {guide.excerpt}
                  </p>
                </button>
              );
            })}
          </div>

          {activeGuide && (
            <article className="lg:col-span-7 bg-white border border-slate-200 rounded-lg p-7 sm:p-9 space-y-6">
              <div className="space-y-3 border-b border-slate-200 pb-5">
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span>{activeGuide.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeGuide.readTime}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeGuide.author}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 leading-tight text-balance">
                  {activeGuide.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-prose">
                  {activeGuide.excerpt}
                </p>
              </div>

              <div className="space-y-6 max-w-prose">
                {activeGuide.sections.map((section) => (
                  <div key={section.heading} className="space-y-2">
                    <h4 className="text-base font-semibold text-slate-900">
                      {section.heading}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {section.body}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          )}
        </div>
      </section>
    </div>
  );
}
