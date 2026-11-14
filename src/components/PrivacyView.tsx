import { ArrowLeft } from 'lucide-react';
import { INSTITUTION_INFO, type PageRoute } from '../data/aeacData';

interface PrivacyViewProps {
  onNavigate: (route: PageRoute) => void;
}

export function PrivacyView({ onNavigate }: PrivacyViewProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      <div className="space-y-4 border-b border-slate-200 pb-8">
        <button
          type="button"
          onClick={() => onNavigate('inicio')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D4ED8] hover:underline cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Volver al inicio
        </button>

        <p className="text-xs font-medium uppercase tracking-wider text-[#1D4ED8]">
          Marco Legal y Confidencialidad
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight text-balance">
          Política de privacidad y uso de datos personales
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
          En cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y las disposiciones sanitarias aplicables en México, informamos cómo protegemos la confidencialidad de nuestros usuarios, pacientes y familiares.
        </p>
      </div>

      <article className="space-y-10 text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl">
        <section className="space-y-3">
          <h2 className="font-display text-2xl font-bold text-slate-900">
            01. Identidad y domicilio del responsable
          </h2>
          <p>
            El responsable del tratamiento y resguardo de sus datos personales es{' '}
            <strong className="font-semibold text-slate-900">{INSTITUTION_INFO.legalName}</strong>{' '}
            ({INSTITUTION_INFO.name}), con RFC{' '}
            <span className="font-mono text-xs sm:text-sm text-slate-900">CRA2305156L9</span>,
            domicilio operativo en {INSTITUTION_INFO.operativeAddress} y domicilio fiscal registrado
            ante COFEPRIS en {INSTITUTION_INFO.fiscalAddress}.
          </p>
        </section>

        <section className="space-y-3 border-t border-slate-200 pt-8">
          <h2 className="font-display text-2xl font-bold text-slate-900">
            02. Datos personales que se recaban
          </h2>
          <p>
            A través del sitio web oficial y de nuestros canales de atención directa (teléfono fijo,
            WhatsApp y correo electrónico), únicamente solicitamos los datos necesarios para brindar
            orientación inicial y coordinar valoraciones voluntarias:
          </p>
          <ul className="space-y-2 text-slate-700">
            <li>· Nombre completo del solicitante o familiar responsable.</li>
            <li>· Número telefónico o WhatsApp de contacto y correo electrónico opcional.</li>
            <li>· Relación o parentesco con el usuario y edad aproximada (rango de 18 a 50 años).</li>
            <li>· Motivo de consulta y descripción breve de la situación comunicada voluntariamente.</li>
          </ul>
          <p className="text-sm text-slate-600">
            Para el ingreso residencial presencial y la elaboración del expediente clínico, los datos
            personales sensibles relativos al estado de salud física, psicológica y antecedentes de
            consumo se recaban exclusivamente en sede bajo consentimiento informado y secreto
            profesional médico.
          </p>
        </section>

        <section className="space-y-3 border-t border-slate-200 pt-8">
          <h2 className="font-display text-2xl font-bold text-slate-900">
            03. Finalidades del tratamiento de datos
          </h2>
          <p>Sus datos personales serán utilizados exclusivamente para las siguientes finalidades:</p>
          <ul className="space-y-2 text-slate-700">
            <li>
              · Atender solicitudes de información sobre el programa residencial voluntario de 6 meses.
            </li>
            <li>
              · Programar entrevistas de valoración médica, psicológica y de consejería en adicciones.
            </li>
            <li>
              · Mantener comunicación con familiares designados para las juntas dominicales y el
              seguimiento del proceso terapéutico.
            </li>
            <li>
              · Cumplir con obligaciones sanitarias, administrativas y de protección civil ante
              autoridades competentes (Secretaría de Salud, COFEPRIS, CLUNI y autoridades locales).
            </li>
          </ul>
          <p className="text-sm text-slate-600">
            Ángeles de Esperanza, A.C. no vende, alquila ni comercializa datos personales con
            terceros bajo ninguna circunstancia.
          </p>
        </section>

        <section className="space-y-3 border-t border-slate-200 pt-8">
          <h2 className="font-display text-2xl font-bold text-slate-900">
            04. Confidencialidad sanitaria y almacenamiento en este sitio web
          </h2>
          <p>
            El formulario de solicitud en línea valida la información localmente en su navegador para
            facilitar el envío directo hacia los canales institucionales (WhatsApp{' '}
            <span className="font-mono text-xs sm:text-sm text-slate-900 tabular-nums">
              {INSTITUTION_INFO.whatsapp}
            </span>{' '}
            o correo electrónico{' '}
            <span className="font-mono text-xs sm:text-sm text-slate-900">
              {INSTITUTION_INFO.emails[0]}
            </span>
            ), sin almacenar bases de datos comerciales ni perfiles publicitarios de rastreo.
          </p>
          <p>
            El contenido de la galería audiovisual utiliza reproductores de YouTube en modo de
            privacidad mejorada y almacenamiento local del navegador únicamente si el usuario
            configura manualmente enlaces personalizados.
          </p>
        </section>

        <section className="space-y-3 border-t border-slate-200 pt-8">
          <h2 className="font-display text-2xl font-bold text-slate-900">
            05. Derechos ARCO y revocación del consentimiento
          </h2>
          <p>
            Usted tiene derecho a conocer qué datos personales tenemos, para qué los utilizamos y las
            condiciones de su uso (Acceso), solicitar su corrección (Rectificación), pedir que los
            eliminemos de nuestros registros cuando considere que no están siendo utilizados conforme
            a la normativa (Cancelación), u oponerse a su uso para fines específicos (Oposición).
          </p>
          <p>
            Para ejercer sus derechos ARCO o revocar su consentimiento, puede presentar una solicitud
            por escrito directamente en nuestra sede operativa o enviando un correo a{' '}
            <a
              href={`mailto:${INSTITUTION_INFO.emails[0]}`}
              className="font-mono text-xs sm:text-sm text-[#1D4ED8] hover:underline"
            >
              {INSTITUTION_INFO.emails[0]}
            </a>{' '}
            o comunicándose al teléfono{' '}
            <span className="font-mono text-xs sm:text-sm text-slate-900 tabular-nums">
              {INSTITUTION_INFO.phoneFixed}
            </span>
            .
          </p>
        </section>

        <section className="bg-white border border-slate-200 rounded-lg p-6 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Atención sobre Privacidad y Datos Personales
          </p>
          <p className="text-sm text-slate-700">
            Representación Legal y Dirección General · {INSTITUTION_INFO.operativeAddress}
          </p>
          <div className="pt-1 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate('contacto')}
              className="px-4 py-2 rounded-md bg-[#1D4ED8] text-white text-xs sm:text-sm font-medium hover:bg-blue-800 transition-colors cursor-pointer"
            >
              Ir a Contacto Directo
            </button>
            <button
              type="button"
              onClick={() => onNavigate('institucion')}
              className="px-4 py-2 rounded-md border border-slate-300 bg-[#FAF9F6] text-slate-800 text-xs sm:text-sm font-medium hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Ver Registros Oficiales
            </button>
          </div>
        </section>
      </article>
    </div>
  );
}
