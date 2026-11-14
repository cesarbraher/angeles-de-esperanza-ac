import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import {
  ADMISSION_PARAMS,
  INSTITUTION_INFO,
  LEGAL_REGISTRIES,
  PHILOSOPHY,
  SEVEN_PILLARS,
  TEAM_MEMBERS,
  type PageRoute,
} from '../data/aeacData';
import { HeroEmblemSvg } from './HeroEmblemSvg';
import { VideoGalleryPlayer } from './VideoGalleryPlayer';

interface HomeViewProps {
  onNavigate: (route: PageRoute) => void;
}

export function HomeView({ onNavigate }: HomeViewProps) {
  const featuredLegal = LEGAL_REGISTRIES.slice(1, 5);

  return (
    <div className="space-y-20 pb-8">
      {/* Hero Split Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between items-center text-center space-y-6">
            <div className="space-y-5 flex flex-col items-center">
              <div className="w-full max-w-[340px] sm:max-w-[360px] mx-auto rounded-lg overflow-hidden border border-slate-200 bg-white">
                <img
                  src="/assets/aistudio/_ngel_de_Esperanza_094b46fb.png"
                  alt="Centro de Rehabilitación Ángeles de Esperanza A.C. — Juntos por una vida mejor"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto block"
                />
              </div>

              <p className="text-xs font-medium tracking-wider uppercase text-slate-500">
                Irapuato, Guanajuato · Fundado el {INSTITUTION_INFO.foundedDate}
              </p>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-slate-900 leading-[1.08] text-balance max-w-2xl mx-auto">
                Rehabilitación residencial con rigor médico y trato digno
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                El Centro de Rehabilitación en Adicciones Ángeles de Esperanza, A.C. ofrece un internamiento residencial estrictamente voluntario de seis meses para hombres de 18 a 50 años, integrando desintoxicación médica, nutrición clínica y reintegración familiar.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('contacto')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#DC2626] text-white text-sm font-semibold hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Solicitar Valoración Voluntaria
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('programa')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-300 bg-white text-slate-800 text-sm font-medium hover:border-slate-400 hover:bg-slate-50 transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Explorar Modelo Clínico
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <HeroEmblemSvg />
          </div>
        </div>

        {/* Full-width 4-Column Admission Strip */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-slate-200 bg-white rounded-lg divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {ADMISSION_PARAMS.map((param) => (
            <div key={param.label} className="p-5">
              <p className="text-xs text-slate-500">{param.label}</p>
              <p className="text-sm sm:text-base font-semibold text-slate-900 mt-1">
                {param.value}
              </p>
            </div>
          ))}
        </div>

        {/* Operational Utility Ribbon */}
        <div className="mt-4 px-5 py-3.5 bg-slate-900 text-slate-100 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs sm:text-sm">
          <p className="text-slate-300">
            Sede Operativa: <span className="text-white font-medium">Calle Plan de Iguala #1855, Col. Guerrero, Irapuato, Gto.</span>
          </p>
          <div className="flex flex-wrap items-center gap-5 font-mono text-xs tabular-nums">
            <a
              href={`https://wa.me/${INSTITUTION_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#25D366] hover:underline"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp {INSTITUTION_INFO.whatsapp}
            </a>
            <a
              href={`tel:${INSTITUTION_INFO.phoneFixedRaw}`}
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              {INSTITUTION_INFO.phoneFixed}
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy & 7 Pillars */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-slate-200 pt-14">
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
            <div className="w-full max-w-[320px] mx-auto rounded-lg overflow-hidden border border-slate-200 bg-white">
              <img
                src="/assets/aistudio/instalaciones_455048ee.png"
                alt="Instalaciones, comunidad y atención médica en Ángeles de Esperanza, A.C."
                referrerPolicy="no-referrer"
                className="w-full h-auto block"
              />
            </div>
            <p className="text-xs font-medium uppercase tracking-wider text-[#1D4ED8]">
              Modelo Integral de 6 Meses
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
              Siete pilares para la restauración física, mental y familiar
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {PHILOSOPHY.mission}
            </p>
            <div className="pt-2 flex justify-center">
              <button
                type="button"
                onClick={() => onNavigate('programa')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D4ED8] hover:underline cursor-pointer"
              >
                Ver rutina diaria y etapas de Prochaska
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
            {SEVEN_PILLARS.map((pillar) => (
              <article
                key={pillar.number}
                className="border-t border-slate-200 pt-4 space-y-2"
              >
                <div className="flex items-baseline justify-between gap-2 text-xs text-slate-500">
                  <span className="font-mono font-medium text-[#1D4ED8] tabular-nums">
                    {pillar.number}.
                  </span>
                  <span>{pillar.frequency}</span>
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Compliance & Clinical Team Adjacency */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-14">
          {/* Legal Proof */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2 max-w-2xl">
                <p className="text-xs font-medium uppercase tracking-wider text-[#1D4ED8]">
                  Cumplimiento Normativo Auditado
                </p>
                <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight text-balance">
                  Registros oficiales federales, estatales y municipales vigentes
                </h2>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('institucion')}
                className="text-sm font-semibold text-[#1D4ED8] hover:underline cursor-pointer whitespace-nowrap shrink-0"
              >
                Consultar los 10 registros completos →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredLegal.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#FAF9F6] border border-slate-200 rounded-lg p-5 space-y-2"
                >
                  <p className="text-xs text-slate-500">{item.rubro}</p>
                  <p className="font-mono text-sm font-semibold text-slate-900 tabular-nums break-all">
                    {item.folio}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.entidad}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Team Preview */}
          <div className="space-y-6 border-t border-slate-200 pt-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2 max-w-2xl">
                <p className="text-xs font-medium uppercase tracking-wider text-[#1D4ED8]">
                  Cuerpo Directivo y Especialistas
                </p>
                <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight text-balance">
                  Atención interdisciplinaria con cédulas y certificaciones oficiales
                </h2>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('equipo')}
                className="text-sm font-semibold text-[#1D4ED8] hover:underline cursor-pointer whitespace-nowrap shrink-0"
              >
                Ver los 6 especialistas y matriz →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TEAM_MEMBERS.map((member) => (
                <article
                  key={member.id}
                  className="border border-slate-200 rounded-lg p-5 bg-white space-y-3"
                >
                  <div className="flex items-center gap-3.5">
                    {member.photoUrl ? (
                      <img
                        src={member.photoUrl}
                        alt={member.name}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-md object-cover object-top border border-slate-200 shrink-0 bg-slate-100"
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="w-12 h-12 rounded-md border border-slate-200 bg-slate-100 text-slate-700 font-display text-sm font-bold flex items-center justify-center shrink-0"
                      >
                        {member.initials}
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="text-[11px] text-slate-500 truncate">{member.shortOrg}</p>
                      <h3 className="text-sm font-semibold text-slate-900 leading-snug">
                        {member.name}
                      </h3>
                      <p className="text-xs text-[#1D4ED8] font-medium mt-0.5 line-clamp-1">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {member.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Unified Institutional Video Player */}
      <VideoGalleryPlayer />
    </div>
  );
}
