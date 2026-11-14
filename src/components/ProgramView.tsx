import { useState } from 'react';
import {
  ADMISSION_PARAMS,
  DAILY_ROUTINE,
  PROCHASKA_STAGES,
  SEVEN_PILLARS,
  SUNDAY_ROUTINE,
  WEEKLY_COMPLEMENTS,
} from '../data/aeacData';

export function ProgramView() {
  const [selectedStageId, setSelectedStageId] = useState<string>(PROCHASKA_STAGES[0].id);
  const [routineTab, setRoutineTab] = useState<'lunes-viernes' | 'domingo'>('lunes-viernes');

  const activeStage =
    PROCHASKA_STAGES.find((stage) => stage.id === selectedStageId) ?? PROCHASKA_STAGES[0];

  const activeRoutine = routineTab === 'lunes-viernes' ? DAILY_ROUTINE : SUNDAY_ROUTINE;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Header & Admission Strip */}
      <section className="space-y-8 border-b border-slate-200 pb-12">
        <div className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-wider text-[#1D4ED8]">
            Modelo Clínico-Terapéutico
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight text-balance max-w-3xl">
            Atención individualizada basada en las Etapas de Cambio de Prochaska y DiClemente
          </h1>
          <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
            Ángeles de Esperanza no aplica un esquema rígido ni genérico: cada residente vive su propio proceso, ajustando tiempos y tareas terapéuticas a su estado físico, mental y emocional durante seis meses continuos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-slate-200 bg-white rounded-lg divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {ADMISSION_PARAMS.map((param) => (
            <div key={param.label} className="p-5">
              <p className="text-xs text-slate-500">{param.label}</p>
              <p className="text-sm sm:text-base font-semibold text-slate-900 mt-1">
                {param.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Prochaska & DiClemente Explorer */}
      <section className="space-y-6">
        <div className="space-y-2 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-wider text-[#1D4ED8]">
            Marco Metodológico Interactivo
          </p>
          <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">
            Las 5 Etapas de Cambio durante el internamiento
          </h2>
          <p className="text-sm text-slate-600">
            Selecciona una etapa para revisar el estado clínico del residente y las intervenciones asignadas por el equipo multidisciplinario.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Etapas del modelo de Prochaska y DiClemente"
          className="grid grid-cols-2 sm:grid-cols-5 gap-2"
        >
          {PROCHASKA_STAGES.map((stage) => {
            const isSelected = stage.id === activeStage.id;
            return (
              <button
                key={stage.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedStageId(stage.id)}
                className={`text-left p-4 rounded-lg border transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                }`}
              >
                <p
                  className={`font-mono text-xs tabular-nums ${
                    isSelected ? 'text-blue-300' : 'text-[#1D4ED8]'
                  }`}
                >
                  {stage.order} · {stage.timeframe}
                </p>
                <p className="text-sm font-semibold mt-1">{stage.name}</p>
              </button>
            );
          })}
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-7 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-1">
              <p className="font-mono text-xs text-[#1D4ED8] tabular-nums">
                Etapa {activeStage.order} · {activeStage.timeframe}
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                {activeStage.name}
              </h3>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Estado Inicial del Usuario
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-1">
                  {activeStage.patientState}
                </p>
              </div>
              <div className="border-t border-slate-200 pt-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Enfoque Terapéutico del Centro
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-1">
                  {activeStage.clinicalFocus}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#FAF9F6] border border-slate-200 rounded-lg p-5 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">
              Intervenciones Activas
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              {activeStage.interventions.map((intervention, index) => (
                <li key={intervention} className="flex items-start gap-2.5">
                  <span className="font-mono text-xs font-semibold text-[#DC2626] tabular-nums mt-0.5">
                    0{index + 1}.
                  </span>
                  <span className="leading-relaxed">{intervention}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7 Pillars Full Breakdown */}
      <section className="space-y-6 border-t border-slate-200 pt-12">
        <div className="space-y-2 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-wider text-[#1D4ED8]">
            Estructura Terapéutica y Formativa
          </p>
          <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">
            Los 7 pilares del programa residencial
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SEVEN_PILLARS.map((pillar) => (
            <article
              key={pillar.number}
              className="bg-white border border-slate-200 rounded-lg p-6 space-y-3"
            >
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono font-semibold text-[#1D4ED8] tabular-nums">
                  Pilar {pillar.number}
                </span>
                <span>{pillar.frequency}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{pillar.title}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{pillar.subtitle}</p>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Interactive Daily & Sunday Routine */}
      <section className="space-y-6 border-t border-slate-200 pt-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-wider text-[#1D4ED8]">
              Disciplina y Estructura Horaria
            </p>
            <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">
              Rutina operativa semanal
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Seleccionar rutina operativa"
            className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-lg"
          >
            <button
              type="button"
              role="tab"
              aria-selected={routineTab === 'lunes-viernes'}
              onClick={() => setRoutineTab('lunes-viernes')}
              className={`px-3.5 py-2 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                routineTab === 'lunes-viernes'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Lunes a Viernes
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={routineTab === 'domingo'}
              onClick={() => setRoutineTab('domingo')}
              className={`px-3.5 py-2 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                routineTab === 'domingo'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Domingos · Día Familiar
            </button>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg divide-y divide-slate-200">
          {activeRoutine.map((block) => (
            <div
              key={`${block.time}-${block.title}`}
              className="p-5 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start"
            >
              <div className="md:col-span-2 font-mono text-sm font-semibold text-[#1D4ED8] tabular-nums">
                {block.time}
              </div>
              <div className="md:col-span-7 space-y-1">
                <h3 className="text-base font-semibold text-slate-900">{block.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{block.detail}</p>
              </div>
              <div className="md:col-span-3 md:text-right text-xs text-slate-500">
                {block.area}
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Complementary Activities & Post-discharge */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {WEEKLY_COMPLEMENTS.map((comp) => (
            <div
              key={comp.title}
              className="border border-slate-200 bg-white rounded-lg p-5 space-y-2"
            >
              <p className="text-xs font-medium text-[#DC2626]">{comp.schedule}</p>
              <h3 className="text-sm font-semibold text-slate-900">{comp.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{comp.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
