import { CheckCircle2, ExternalLink, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { INSTITUTION_INFO } from '../data/aeacData';

interface FormState {
  nombre: string;
  telefono: string;
  correo: string;
  solicitante: string;
  edadPaciente: string;
  motivo: string;
  mensaje: string;
  ingresoVoluntario: boolean;
}

const INITIAL_FORM: FormState = {
  nombre: '',
  telefono: '',
  correo: '',
  solicitante: 'Familiar directo',
  edadPaciente: '',
  motivo: 'Orientación para ingreso residencial (6 meses)',
  mensaje: '',
  ingresoVoluntario: false,
};

export function ContactView() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (form.nombre.trim().length < 3) {
      nextErrors.nombre = 'Ingresa tu nombre completo.';
    }
    const digits = form.telefono.replace(/\D/g, '');
    if (digits.length < 10) {
      nextErrors.telefono = 'Ingresa un teléfono válido de al menos 10 dígitos.';
    }
    if (form.correo.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo.trim())) {
      nextErrors.correo = 'El formato del correo electrónico no es válido.';
    }
    if (form.edadPaciente.trim()) {
      const age = Number(form.edadPaciente);
      if (Number.isNaN(age) || age < 18 || age > 50) {
        nextErrors.edadPaciente = 'El programa residencial atiende población varonil de 18 a 50 años.';
      }
    }
    if (form.mensaje.trim().length < 10) {
      nextErrors.mensaje = 'Describe brevemente la situación o consulta (mínimo 10 caracteres).';
    }
    if (!form.ingresoVoluntario) {
      nextErrors.ingresoVoluntario =
        'Confirma que comprendes que el ingreso es estrictamente voluntario.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const buildWhatsAppLink = (data: FormState) => {
    const text = [
      'Hola, me comunico desde AEAC-WEB (Ángeles de Esperanza, A.C.).',
      `Nombre: ${data.nombre}`,
      `Teléfono: ${data.telefono}`,
      `Relación: ${data.solicitante}`,
      data.edadPaciente ? `Edad del usuario: ${data.edadPaciente} años` : '',
      `Motivo: ${data.motivo}`,
      `Mensaje: ${data.mensaje}`,
    ]
      .filter(Boolean)
      .join('\n');

    return `https://wa.me/${INSTITUTION_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmittedData(form);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Header */}
      <section className="space-y-4 border-b border-slate-200 pb-10">
        <p className="text-xs font-medium uppercase tracking-wider text-[#DC2626]">
          Atención Inmediata y Valoración Voluntaria
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight text-balance max-w-3xl">
          Contacto directo en Irapuato, Guanajuato
        </h1>
        <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
          Brindamos orientación confidencial para familias y usuarios interesados en el programa residencial voluntario de 6 meses. Comunícate por WhatsApp, teléfono fijo o mediante nuestra solicitud de valoración.
        </p>
      </section>

      {/* Main Contact Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Direct Channels + Map */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-lg p-7 space-y-5">
            <h2 className="font-display text-2xl font-bold text-slate-900">
              Canales Oficiales
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500">Celular y WhatsApp de Atención Inmediata</p>
                  <a
                    href={`https://wa.me/${INSTITUTION_INFO.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-base font-semibold text-slate-900 hover:text-[#1D4ED8] tabular-nums"
                  >
                    {INSTITUTION_INFO.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-slate-100 pt-4">
                <Phone className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500">Teléfono Fijo Institucional</p>
                  <a
                    href={`tel:${INSTITUTION_INFO.phoneFixedRaw}`}
                    className="font-mono text-base font-semibold text-slate-900 hover:text-[#1D4ED8] tabular-nums"
                  >
                    {INSTITUTION_INFO.phoneFixed}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-slate-100 pt-4">
                <Mail className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs text-slate-500">Correos Electrónicos Oficiales</p>
                  {INSTITUTION_INFO.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block font-mono text-xs sm:text-sm text-slate-900 hover:text-[#1D4ED8]"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-slate-100 pt-4">
                <MapPin className="w-5 h-5 text-[#DC2626] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs text-slate-500">Ubicación Física del Centro</p>
                  <p className="text-sm text-slate-800 leading-relaxed">
                    {INSTITUTION_INFO.operativeAddress}
                  </p>
                  <a
                    href={INSTITUTION_INFO.mapsQueryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D4ED8] hover:underline pt-1"
                  >
                    Abrir en Google Maps
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Resilient Map Box */}
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
            <div className="px-5 py-3 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span className="font-medium text-slate-900">Colonia Guerrero · Irapuato, Gto.</span>
              <span className="font-mono tabular-nums">C.P. 36580</span>
            </div>
            <div className="relative h-64 bg-slate-100">
              <iframe
                title="Ubicación de Ángeles de Esperanza A.C. en Irapuato, Guanajuato"
                src={INSTITUTION_INFO.mapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Validated Intake / Consultation Form */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-lg p-7 sm:p-8">
          {submittedData ? (
            <div className="space-y-6 py-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h2 className="font-display text-2xl font-bold text-slate-900">
                    Solicitud preparada correctamente
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Hemos validado tus datos de contacto. Para atención inmediata, puedes enviar esta solicitud directamente por WhatsApp al equipo de Dirección y Consejería o iniciar una nueva consulta.
                  </p>
                </div>
              </div>

              <dl className="bg-[#FAF9F6] border border-slate-200 rounded-lg p-5 divide-y divide-slate-200 text-sm">
                <div className="py-2 flex justify-between gap-4">
                  <dt className="text-slate-500">Solicitante</dt>
                  <dd className="font-medium text-slate-900 text-right">
                    {submittedData.nombre} ({submittedData.solicitante})
                  </dd>
                </div>
                <div className="py-2 flex justify-between gap-4">
                  <dt className="text-slate-500">Teléfono</dt>
                  <dd className="font-mono text-slate-900 tabular-nums">
                    {submittedData.telefono}
                  </dd>
                </div>
                <div className="py-2 flex justify-between gap-4">
                  <dt className="text-slate-500">Motivo</dt>
                  <dd className="text-slate-900 text-right">{submittedData.motivo}</dd>
                </div>
              </dl>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={buildWhatsAppLink(submittedData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#25D366] text-slate-950 text-sm font-semibold hover:brightness-95 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  Enviar solicitud por WhatsApp
                </a>

                <a
                  href={`mailto:${INSTITUTION_INFO.emails[0]}?subject=${encodeURIComponent(
                    `Solicitud AEAC-WEB: ${submittedData.motivo}`,
                  )}&body=${encodeURIComponent(
                    `Nombre: ${submittedData.nombre}\nTeléfono: ${submittedData.telefono}\nRelación: ${submittedData.solicitante}\nEdad usuario: ${submittedData.edadPaciente || 'No especificada'}\n\n${submittedData.mensaje}`,
                  )}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-slate-300 bg-white text-slate-800 text-sm font-medium hover:bg-slate-50 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Enviar por correo
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setSubmittedData(null);
                    setForm(INITIAL_FORM);
                  }}
                  className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Nueva consulta
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="space-y-1 border-b border-slate-200 pb-4">
                <h2 className="font-display text-2xl font-bold text-slate-900">
                  Solicitud de Orientación e Ingreso Voluntario
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Programa residencial varonil (18 a 50 años) · 6 meses continuos.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="nombre" className="block text-xs font-semibold text-slate-700">
                    Nombre completo *
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    placeholder="Ej. Roberto Hernández"
                    className="w-full px-3.5 py-2.5 text-sm rounded-md border border-slate-300 bg-white text-slate-900 focus:outline-none focus:border-[#1D4ED8]"
                  />
                  {errors.nombre && <p className="text-xs text-[#DC2626]">{errors.nombre}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="telefono" className="block text-xs font-semibold text-slate-700">
                    Teléfono / WhatsApp (10 dígitos) *
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    value={form.telefono}
                    onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                    placeholder="462 000 0000"
                    className="w-full px-3.5 py-2.5 text-sm font-mono rounded-md border border-slate-300 bg-white text-slate-900 focus:outline-none focus:border-[#1D4ED8]"
                  />
                  {errors.telefono && <p className="text-xs text-[#DC2626]">{errors.telefono}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="correo" className="block text-xs font-semibold text-slate-700">
                    Correo electrónico
                  </label>
                  <input
                    id="correo"
                    type="email"
                    value={form.correo}
                    onChange={(e) => setForm({ ...form, correo: e.target.value })}
                    placeholder="correo@ejemplo.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-md border border-slate-300 bg-white text-slate-900 focus:outline-none focus:border-[#1D4ED8]"
                  />
                  {errors.correo && <p className="text-xs text-[#DC2626]">{errors.correo}</p>}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="solicitante"
                    className="block text-xs font-semibold text-slate-700"
                  >
                    ¿Quién solicita apoyo?
                  </label>
                  <select
                    id="solicitante"
                    value={form.solicitante}
                    onChange={(e) => setForm({ ...form, solicitante: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-md border border-slate-300 bg-white text-slate-900 focus:outline-none focus:border-[#1D4ED8]"
                  >
                    <option value="Familiar directo">Familiar directo</option>
                    <option value="Propio paciente">Propio paciente</option>
                    <option value="Institución o derivación médica">
                      Institución o derivación médica
                    </option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="edadPaciente"
                    className="block text-xs font-semibold text-slate-700"
                  >
                    Edad del usuario (18–50)
                  </label>
                  <input
                    id="edadPaciente"
                    type="number"
                    min={18}
                    max={50}
                    value={form.edadPaciente}
                    onChange={(e) => setForm({ ...form, edadPaciente: e.target.value })}
                    placeholder="Ej. 28"
                    className="w-full px-3.5 py-2.5 text-sm font-mono rounded-md border border-slate-300 bg-white text-slate-900 focus:outline-none focus:border-[#1D4ED8]"
                  />
                  {errors.edadPaciente && (
                    <p className="text-xs text-[#DC2626]">{errors.edadPaciente}</p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="motivo" className="block text-xs font-semibold text-slate-700">
                  Motivo de contacto
                </label>
                <select
                  id="motivo"
                  value={form.motivo}
                  onChange={(e) => setForm({ ...form, motivo: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-md border border-slate-300 bg-white text-slate-900 focus:outline-none focus:border-[#1D4ED8]"
                >
                  <option value="Orientación para ingreso residencial (6 meses)">
                    Orientación para ingreso residencial (6 meses)
                  </option>
                  <option value="Valoración médica y desintoxicación">
                    Valoración médica y desintoxicación
                  </option>
                  <option value="Información sobre visitas y junta familiar dominical">
                    Información sobre visitas y junta familiar dominical
                  </option>
                  <option value="Convenios o vinculación institucional (OSC)">
                    Convenios o vinculación institucional (OSC)
                  </option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="mensaje" className="block text-xs font-semibold text-slate-700">
                  Detalle de la consulta *
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  placeholder="Cuéntanos brevemente tu situación para brindarte orientación personalizada..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-md border border-slate-300 bg-white text-slate-900 focus:outline-none focus:border-[#1D4ED8]"
                />
                {errors.mensaje && <p className="text-xs text-[#DC2626]">{errors.mensaje}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.ingresoVoluntario}
                    onChange={(e) =>
                      setForm({ ...form, ingresoVoluntario: e.target.checked })
                    }
                    className="mt-1 rounded border-slate-300 text-[#1D4ED8] focus:ring-[#1D4ED8]"
                  />
                  <span>
                    Confirmo que estoy enterado de que el ingreso al centro es{' '}
                    <strong className="font-semibold text-slate-900">
                      estrictamente voluntario
                    </strong>{' '}
                    para hombres adultos de 18 a 50 años.
                  </span>
                </label>
                {errors.ingresoVoluntario && (
                  <p className="text-xs text-[#DC2626]">{errors.ingresoVoluntario}</p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-md bg-[#DC2626] text-white text-sm font-semibold hover:bg-red-700 transition-colors cursor-pointer"
                >
                  Preparar Solicitud de Valoración
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
