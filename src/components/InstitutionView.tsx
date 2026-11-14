import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { INSTITUTION_INFO, LEGAL_REGISTRIES, PHILOSOPHY, type LegalRegistryItem } from '../data/aeacData';

type ScopeFilter = 'Todos' | LegalRegistryItem['scope'];

export function InstitutionView() {
  const [scopeFilter, setScopeFilter] = useState<ScopeFilter>('Todos');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredRegistries =
    scopeFilter === 'Todos'
      ? LEGAL_REGISTRIES
      : LEGAL_REGISTRIES.filter((item) => item.scope === scopeFilter);

  const handleCopyFolio = async (id: string, folio: string) => {
    try {
      await navigator.clipboard.writeText(folio);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId(null), 1800);
    } catch {
      setCopiedId(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Intro Header */}
      <section className="space-y-4 border-b border-slate-200 pb-10">
        <p className="text-xs font-medium uppercase tracking-wider text-[#1D4ED8]">
          Identidad Institucional y Marco Normativo
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight text-balance max-w-3xl">
          Transparencia jurídica, vocación humana y respaldo sanitario oficial
        </h1>
        <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
          Fundado el {INSTITUTION_INFO.foundedDate} en Irapuato, Guanajuato y constituido legalmente como Persona Moral el {INSTITUTION_INFO.constitutedDate}, el {INSTITUTION_INFO.name} opera bajo estricta acreditación federal, estatal y municipal.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border border-slate-200 rounded-lg p-7 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#1D4ED8]">
            Misión Institucional
          </p>
          <p className="text-base text-slate-700 leading-relaxed">
            {PHILOSOPHY.mission}
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-7 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#DC2626]">
            Visión Estratégica
          </p>
          <p className="text-base text-slate-700 leading-relaxed">
            {PHILOSOPHY.vision}
          </p>
        </div>
      </section>

      {/* 6 Guiding Values & CLUNI Object */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Cultura Operativa
            </p>
            <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">
              Valores directores de la atención
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PHILOSOPHY.values.map((val, idx) => (
              <div key={val.name} className="border-t border-slate-200 pt-4 space-y-1.5">
                <p className="font-mono text-xs text-[#1D4ED8] tabular-nums">
                  0{idx + 1}.
                </p>
                <h3 className="text-sm font-semibold text-slate-900">{val.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-lg p-7 space-y-5 h-fit">
          <div className="space-y-1 border-b border-slate-200 pb-4">
            <p className="text-xs font-mono text-slate-500 tabular-nums">
              CLUNI · 23051511E1T
            </p>
            <h3 className="font-display text-2xl font-bold text-slate-900">
              Objeto Social Acreditado
            </h3>
          </div>

          <dl className="space-y-4">
            {PHILOSOPHY.cluniSocialObject.map((obj) => (
              <div key={obj.title} className="space-y-1">
                <dt className="text-sm font-semibold text-slate-900">{obj.title}</dt>
                <dd className="text-sm text-slate-600 leading-relaxed">{obj.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Audited Legal Registry Table */}
      <section className="space-y-6 border-t border-slate-200 pt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-wider text-[#1D4ED8]">
              Auditoría Documental Vigente
            </p>
            <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">
              Registros oficiales y licencias de operación
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filtrar registros oficiales por ámbito"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg"
          >
            {(['Todos', 'Federal', 'Estatal y Sanitario', 'Municipal e Inmueble'] as ScopeFilter[]).map(
              (scope) => (
                <button
                  key={scope}
                  type="button"
                  role="tab"
                  aria-selected={scopeFilter === scope}
                  onClick={() => setScopeFilter(scope)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    scopeFilter === scope
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {scope}
                </button>
              ),
            )}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600">
                  <th className="py-3.5 px-4">Rubro</th>
                  <th className="py-3.5 px-4">Registro / Folio</th>
                  <th className="py-3.5 px-4">Entidad Emisora y Fecha</th>
                  <th className="py-3.5 px-4">Estatus</th>
                  <th className="py-3.5 px-4 text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {filteredRegistries.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-4 px-4 align-top">
                      <p className="font-semibold text-slate-900">{item.rubro}</p>
                      <p className="text-xs text-slate-500 mt-1 max-w-xs">{item.detalle}</p>
                    </td>
                    <td className="py-4 px-4 align-top font-mono text-xs text-slate-900 tabular-nums">
                      {item.folio}
                    </td>
                    <td className="py-4 px-4 align-top">
                      <p className="text-slate-800">{item.entidad}</p>
                      <p className="text-xs font-mono text-slate-500 tabular-nums mt-0.5">
                        {item.fecha}
                      </p>
                    </td>
                    <td className="py-4 px-4 align-top">
                      <span className="text-xs font-medium text-emerald-700">
                        {item.estado}
                      </span>
                    </td>
                    <td className="py-4 px-4 align-top text-right">
                      <button
                        type="button"
                        onClick={() => handleCopyFolio(item.id, item.folio)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        {copiedId === item.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-700" />
                            Copiado
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            Copiar folio
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Infrastructure, Cadastral Data & AEAC-WEB Technical Spec */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-slate-200 pt-12">
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-lg p-7 space-y-5">
          <h3 className="font-display text-2xl font-bold text-slate-900">
            Inmueble y Datos Catastrales
          </h3>
          <dl className="divide-y divide-slate-200 text-sm">
            <div className="py-3 flex flex-col sm:flex-row sm:justify-between gap-1">
              <dt className="text-slate-500">Ubicación Operativa</dt>
              <dd className="font-medium text-slate-900 sm:text-right max-w-xs">
                {INSTITUTION_INFO.operativeAddress}
              </dd>
            </div>
            <div className="py-3 flex flex-col sm:flex-row sm:justify-between gap-1">
              <dt className="text-slate-500">Domicilio Fiscal (COFEPRIS)</dt>
              <dd className="font-medium text-slate-900 sm:text-right max-w-xs">
                {INSTITUTION_INFO.fiscalAddress}
              </dd>
            </div>
            <div className="py-3 flex flex-col sm:flex-row sm:justify-between gap-1">
              <dt className="text-slate-500">Lote y Superficie</dt>
              <dd className="font-mono text-xs font-medium text-slate-900 tabular-nums">
                {INSTITUTION_INFO.cadastral.lote} · {INSTITUTION_INFO.cadastral.surface}
              </dd>
            </div>
            <div className="py-3 flex flex-col sm:flex-row sm:justify-between gap-1">
              <dt className="text-slate-500">Cuenta Predial</dt>
              <dd className="font-mono text-xs font-medium text-slate-900 tabular-nums">
                {INSTITUTION_INFO.cadastral.predial}
              </dd>
            </div>
            <div className="py-3 flex flex-col sm:flex-row sm:justify-between gap-1">
              <dt className="text-slate-500">Clave Catastral</dt>
              <dd className="font-mono text-xs font-medium text-slate-900 tabular-nums">
                {INSTITUTION_INFO.cadastral.claveCatastral}
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-lg p-7 space-y-5">
          <h3 className="font-display text-2xl font-bold text-slate-900">
            Especificación Técnica AEAC-WEB
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Arquitectura digital alineada a los lineamientos de identidad gráfica, accesibilidad y conversión del proyecto institucional:
          </p>
          <dl className="divide-y divide-slate-200 text-sm">
            <div className="py-3 flex flex-col sm:flex-row sm:justify-between gap-1">
              <dt className="text-slate-500">Sistema Tipográfico</dt>
              <dd className="font-medium text-slate-900">
                Oswald (Display) · Poppins (Cuerpo)
              </dd>
            </div>
            <div className="py-3 flex flex-col sm:flex-row sm:justify-between gap-2">
              <dt className="text-slate-500">Paleta Institucional</dt>
              <dd className="flex items-center gap-4 font-mono text-xs tabular-nums">
                <span className="inline-flex items-center gap-1.5 text-slate-900">
                  <span className="w-3 h-3 rounded-xs bg-[#DC2626]" aria-hidden="true" />
                  #DC2626
                </span>
                <span className="inline-flex items-center gap-1.5 text-slate-900">
                  <span className="w-3 h-3 rounded-xs bg-[#1D4ED8]" aria-hidden="true" />
                  #1D4ED8
                </span>
                <span className="inline-flex items-center gap-1.5 text-slate-900">
                  <span className="w-3 h-3 rounded-xs bg-[#25D366]" aria-hidden="true" />
                  #25D366
                </span>
              </dd>
            </div>
            <div className="py-3 flex flex-col sm:flex-row sm:justify-between gap-1">
              <dt className="text-slate-500">Canales de Conversión</dt>
              <dd className="font-medium text-slate-900 sm:text-right">
                WhatsApp directo, formulario validado y mapa interactivo
              </dd>
            </div>
            <div className="py-3 flex flex-col sm:flex-row sm:justify-between gap-1">
              <dt className="text-slate-500">Dominio Oficial</dt>
              <dd className="font-mono text-xs text-[#1D4ED8]">
                {INSTITUTION_INFO.website}
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}
