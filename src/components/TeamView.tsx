import { useState } from 'react';
import {
  ACCREDITATION_MATRIX,
  TEAM_MEMBERS,
  type TeamMember,
} from '../data/aeacData';

type AreaFilter = 'Todos' | TeamMember['area'];

export function TeamView() {
  const [areaFilter, setAreaFilter] = useState<AreaFilter>('Todos');

  const filteredMembers =
    areaFilter === 'Todos'
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((member) => member.area === areaFilter);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Header */}
      <section className="space-y-4 border-b border-slate-200 pb-10">
        <p className="text-xs font-medium uppercase tracking-wider text-[#1D4ED8]">
          Gobierno Corporativo y Cuerpo Clínico
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight text-balance max-w-3xl">
          Equipo multidisciplinario con acreditaciones nacionales e internacionales
        </h1>
        <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
          Nuestro cuerpo directivo y especialista integra competencias certificadas ante CONOCER, SEP, UNAM, PRODHEG, WACLE e HISPAMAP, garantizando atención médica, nutricional, psicológica y de consejería bajo estricto respeto a los derechos humanos.
        </p>
      </section>

      {/* Filter & Executive Profiles */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">
            Perfiles ejecutivos y aportaciones estratégicas
          </h2>

          <div
            role="tablist"
            aria-label="Filtrar especialistas por área"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg"
          >
            {(
              [
                'Todos',
                'Dirección y Prevención',
                'Área Médica y Nutrición',
                'Psicología y Consejería',
              ] as AreaFilter[]
            ).map((area) => (
              <button
                key={area}
                type="button"
                role="tab"
                aria-selected={areaFilter === area}
                onClick={() => setAreaFilter(area)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  areaFilter === area
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {area}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredMembers.map((member) => (
            <article
              key={member.id}
              className="bg-white border border-slate-200 rounded-lg p-7 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start gap-5 border-b border-slate-200 pb-5">
                  {member.photoUrl ? (
                    <img
                      src={member.photoUrl}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-28 h-28 sm:w-32 sm:h-32 rounded-lg object-cover object-top border border-slate-200 shrink-0 bg-slate-100"
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="w-28 h-28 sm:w-32 sm:h-32 rounded-lg border border-slate-200 bg-slate-100 text-slate-700 font-display text-3xl font-bold flex items-center justify-center shrink-0"
                    >
                      {member.initials}
                    </div>
                  )}
                  <div className="space-y-1 min-w-0">
                    <p className="text-xs font-mono text-slate-500 tabular-nums">
                      {member.area} · {member.primaryCredential}
                    </p>
                    <h3 className="font-display text-2xl font-bold text-slate-900 leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-[#1D4ED8]">{member.role}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">{member.summary}</p>

                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Acreditaciones y Certificaciones
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                    {member.accreditations.map((acc) => (
                      <li key={acc} className="leading-relaxed">
                        · {acc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-4 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Aportación Estratégica al Centro
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {member.contribution}
                </p>
                {member.contactNote && (
                  <p className="font-mono text-xs text-slate-500 tabular-nums pt-1">
                    {member.contactNote}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Accreditation Matrix Table */}
      <section className="space-y-6 border-t border-slate-200 pt-12">
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-wider text-[#1D4ED8]">
            Resumen de Credenciales
          </p>
          <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">
            Matriz de acreditaciones y competencias clave
          </h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600">
                  <th className="py-3.5 px-4">Especialista</th>
                  <th className="py-3.5 px-4">Cargo Institucional</th>
                  <th className="py-3.5 px-4">Organismo Acreditador</th>
                  <th className="py-3.5 px-4">Competencia Central</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {ACCREDITATION_MATRIX.map((row) => (
                  <tr key={row.specialist} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900">
                      {row.specialist}
                    </td>
                    <td className="py-3.5 px-4 text-slate-700">{row.role}</td>
                    <td className="py-3.5 px-4 font-mono text-xs text-slate-700">
                      {row.issuer}
                    </td>
                    <td className="py-3.5 px-4 text-slate-700">{row.competency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Clinical Synergy */}
      <section className="bg-white border border-slate-200 rounded-lg p-7 sm:p-9 space-y-6">
        <div className="space-y-2 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-wider text-[#DC2626]">
            Articulación Terapéutica
          </p>
          <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">
            Sinergia clínica y operativa institucional
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Ningún área trabaja de manera aislada; cada caso se coordina mediante un engranaje interdisciplinario continuo:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-6">
          <div className="space-y-2">
            <p className="font-mono text-xs text-[#1D4ED8] tabular-nums">01.</p>
            <h3 className="text-base font-semibold text-slate-900">
              Área Médica y Nutricional
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Restablecen la salud biológica, controlan el síndrome de abstinencia y reparan la bioquímica corporal tras el consumo.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-mono text-xs text-[#1D4ED8] tabular-nums">02.</p>
            <h3 className="text-base font-semibold text-slate-900">
              Psicología, PNL y Coaching
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Reestructuran patrones de pensamiento, desactivan anclajes adictivos y consolidan nuevas metas y hábitos de vida.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-mono text-xs text-[#1D4ED8] tabular-nums">03.</p>
            <h3 className="text-base font-semibold text-slate-900">
              Consejería y Prevención PRODHEG
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Acompañan día a día el proceso con metodologías probadas bajo respeto estricto a la dignidad humana.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
