export type PageRoute =
  | 'inicio'
  | 'institucion'
  | 'programa'
  | 'equipo'
  | 'comunidad'
  | 'bolsa-trabajo'
  | 'consejeria-linea'
  | 'expedientes-clinicos'
  | 'contacto'
  | 'privacidad';

export interface LegalRegistryItem {
  id: string;
  rubro: string;
  folio: string;
  entidad: string;
  fecha: string;
  estado: string;
  scope: 'Federal' | 'Estatal y Sanitario' | 'Municipal e Inmueble';
  detalle: string;
}

export interface ProchaskaStage {
  id: string;
  order: string;
  name: string;
  timeframe: string;
  patientState: string;
  clinicalFocus: string;
  interventions: string[];
}

export interface ProgramPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  frequency: string;
}

export interface RoutineBlock {
  time: string;
  title: string;
  detail: string;
  area: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  area: 'Dirección y Prevención' | 'Área Médica y Nutrición' | 'Psicología y Consejería';
  shortOrg: string;
  primaryCredential: string;
  summary: string;
  accreditations: string[];
  contribution: string;
  contactNote?: string;
  photoUrl?: string;
  initials: string;
}

export interface MatrixRow {
  specialist: string;
  role: string;
  issuer: string;
  competency: string;
}

export interface SitemapNode {
  file: string;
  route: PageRoute;
  title: string;
  purpose: string;
  elements: string[];
}

export interface CommunityGuide {
  id: string;
  category: 'Familia' | 'Clínica' | 'Metodología';
  title: string;
  author: string;
  readTime: string;
  excerpt: string;
  sections: { heading: string; body: string }[];
}

export interface FacilityArea {
  number: string;
  name: string;
  purpose: string;
  specifications: string;
}

export interface InstitutionalVideo {
  id: string;
  number: string;
  title: string;
  topic: string;
  description: string;
  src: string;
}

export interface PageMetadata {
  title: string;
  description: string;
  bannerAlt: string;
}

export const SHARED_BANNER_IMAGE = '/assets/aistudio/_ngel_de_Esperanza_094b46fb.png';

export const PAGE_METADATA: Record<PageRoute, PageMetadata> = {
  inicio: {
    title: 'Ángeles de Esperanza, A.C. | Rehabilitación en Adicciones',
    description:
      'Tratamiento residencial voluntario de 6 meses para hombres de 18 a 50 años en Irapuato, Guanajuato. Rigor médico, nutrición clínica y trato digno.',
    bannerAlt:
      'Centro de Rehabilitación en Adicciones Ángeles de Esperanza, A.C. — Juntos por una vida mejor',
  },
  institucion: {
    title: 'Institución y Registros Oficiales | Ángeles de Esperanza, A.C.',
    description:
      'Conoce la historia, misión, visión, valores y registros vigentes ante SAT, CLUNI, COFEPRIS, Secretaría de Salud y Protección Civil en Irapuato.',
    bannerAlt:
      'Ángeles de Esperanza, A.C. — Identidad institucional y cumplimiento normativo vigente',
  },
  programa: {
    title: 'Programa Clínico de 6 Meses | Ángeles de Esperanza, A.C.',
    description:
      'Modelo basado en las Etapas de Cambio de Prochaska y DiClemente, desintoxicación médica, nutrición clínica, 12 Pasos y dinámica familiar dominical.',
    bannerAlt:
      'Ángeles de Esperanza, A.C. — Programa clínico-terapéutico residencial de 6 meses',
  },
  equipo: {
    title: 'Equipo Multidisciplinario | Ángeles de Esperanza, A.C.',
    description:
      'Director General, Director Médico COFEPRIS, Nutrióloga Clínica, Psicóloga PNL, Coach Transformacional y Consejero Certificado en Adicciones.',
    bannerAlt:
      'Ángeles de Esperanza, A.C. — Cuerpo directivo y especialistas acreditados',
  },
  comunidad: {
    title: 'Instalaciones, Medios y Guías | Ángeles de Esperanza, A.C.',
    description:
      'Recorrido por nuestras áreas operativas en Colonia Guerrero, Irapuato, canales oficiales @angelesdeesperanzaac y guías prácticas para familias.',
    bannerAlt:
      'Ángeles de Esperanza, A.C. — Instalaciones operativas y recursos de apoyo familiar',
  },
  'bolsa-trabajo': {
    title: 'Bolsa de Trabajo (Próximamente) | Ángeles de Esperanza, A.C.',
    description:
      'Módulo de vinculación laboral y oportunidades profesionales para la reinserción sociolaboral y colaboración en Ángeles de Esperanza, A.C.',
    bannerAlt:
      'Ángeles de Esperanza, A.C. — Bolsa de Trabajo y vinculación laboral',
  },
  'consejeria-linea': {
    title: 'Consejería en Línea (Próximamente) | Ángeles de Esperanza, A.C.',
    description:
      'Próximamente sesiones de orientación y consejería certificada en adicciones en modalidad digital para pacientes y familias.',
    bannerAlt:
      'Ángeles de Esperanza, A.C. — Consejería en Línea',
  },
  'expedientes-clinicos': {
    title: 'Expedientes Clínicos Digitales | Ángeles de Esperanza, A.C.',
    description:
      'Próximamente plataforma segura de seguimiento clínico y gestión de expedientes médicos y terapéuticos en Ángeles de Esperanza, A.C.',
    bannerAlt:
      'Ángeles de Esperanza, A.C. — Sistema Digital de Expedientes Clínicos',
  },
  contacto: {
    title: 'Contacto y Valoración Voluntaria | Ángeles de Esperanza, A.C.',
    description:
      'Comunícate por WhatsApp al +52 462 284 5966 o visítanos en Calle Plan de Iguala #1855, Col. Guerrero, Irapuato, Guanajuato.',
    bannerAlt:
      'Ángeles de Esperanza, A.C. — Atención inmediata y ubicación en Irapuato, Guanajuato',
  },
  privacidad: {
    title: 'Política de Privacidad y Datos | Ángeles de Esperanza, A.C.',
    description:
      'Aviso de privacidad y tratamiento de datos personales conforme a la LFPDPPP en Centro de Rehabilitación Ángeles de Esperanza, A.C.',
    bannerAlt:
      'Ángeles de Esperanza, A.C. — Política de privacidad y uso de datos personales',
  },
};

export const INSTITUTION_INFO = {
  projectCode: 'AEAC-WEB',
  name: 'Centro de Rehabilitación en Adicciones Ángeles de Esperanza, A.C.',
  shortName: 'Ángeles de Esperanza, A.C.',
  legalName: 'CENTRO DE REHABILITACION ANGELES DE ESPERANZA AC',
  modality: 'Tratamiento Residencial para las Adicciones (Modelo Mixto - Varonil)',
  foundedDate: '3 de marzo de 2020',
  constitutedDate: '15 de mayo de 2023',
  city: 'Irapuato, Guanajuato, México',
  operativeAddress: 'Calle Plan de Iguala #1855, Colonia Guerrero, C.P. 36580, Irapuato, Guanajuato, México',
  fiscalAddress: 'Calle Nigromante #729, Barrio La Salud, C.P. 36510, Irapuato, Gto.',
  cadastral: {
    lote: 'Lote 14, Manzana "I"',
    surface: '120.00 m²',
    predial: '140002424001',
    claveCatastral: '11 003 017 01 0001 011 090 00021 00 0000',
  },
  website: 'https://www.angelesdeesperanzaac.org',
  phoneFixed: '+52 462 635 5929',
  phoneFixedRaw: '524626355929',
  whatsapp: '+52 462 284 5966',
  whatsappRaw: '524622845966',
  emails: ['info@angelesdeesperanzaac.org', 'angelesdeesperanza23@gmail.com'],
  socialHandle: '@angelesdeesperanzaac',
  socials: [
    { name: 'YouTube', url: 'https://www.youtube.com/@angelesdeesperanzaac' },
    { name: 'Facebook', url: 'https://www.facebook.com/angelesdeesperanzaac' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@angelesdeesperanzaac' },
    { name: 'Instagram', url: 'https://www.instagram.com/angelesdeesperanzaac' },
  ],
  mapsQueryUrl:
    'https://www.google.com/maps/search/?api=1&query=Calle+Plan+de+Iguala+1855,+Colonia+Guerrero,+36580+Irapuato,+Guanajuato,+Mexico',
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=Plan%20de%20Iguala%201855%20Colonia%20Guerrero%20Irapuato%20Guanajuato&t=&z=16&ie=UTF8&iwloc=&output=embed',
};

export const PHILOSOPHY = {
  mission:
    'Brindar la mejor atención para lograr una rehabilitación y reintegración social y familiar de manera integral, ofreciendo una calidez óptima que garantice la pronta recuperación y asegure el retorno efectivo del paciente como un ciudadano útil a la sociedad.',
  vision:
    'Desarrollarse exponencialmente y constituir un parteaguas frente a los modelos de atención tradicionales, marcando una diferencia cualitativa y humana en la recuperación del individuo y generando nuevos proyectos de vida para la comunidad.',
  values: [
    {
      name: 'Respeto a la individualidad humana',
      description: 'Trato personalizado, ético y sin prejuicios para cada usuario.',
    },
    {
      name: 'Disciplina',
      description: 'Rigor procedimental en la operación diaria para dar cumplimiento a la misión institucional.',
    },
    {
      name: 'Empatía por el individuo',
      description: 'Comprensión profunda del dolor y la situación particular del paciente.',
    },
    {
      name: 'Amor a la labor y al servicio',
      description: 'Vocación absoluta y entrega en el tratamiento y acompañamiento de las adicciones.',
    },
    {
      name: 'Compromiso institucional',
      description: 'Fidelidad con los principios rectores y metas clínicas establecidas.',
    },
    {
      name: 'Altruismo comunitario',
      description: 'Orientación permanente del servicio hacia el bienestar social general.',
    },
  ],
  cluniSocialObject: [
    {
      title: 'Asistencia Social',
      detail: 'Servicios de rehabilitación conforme a la Ley de Asistencia Social y la Ley General de Salud.',
    },
    {
      title: 'Nutrición Social',
      detail: 'Apoyo directo a la alimentación popular y restauración metabólica supervisada.',
    },
    {
      title: 'Atención Especializada',
      detail:
        'Aportación de servicios orientados a la atención de grupos vulnerables afectados por el consumo de sustancias psicoactivas.',
    },
  ],
};

export const LEGAL_REGISTRIES: LegalRegistryItem[] = [
  {
    id: 'denominacion',
    rubro: 'Denominación Social',
    folio: 'CENTRO DE REHABILITACION ANGELES DE ESPERANZA AC',
    entidad: 'Protocolo Constitutivo',
    fecha: '15/05/2023',
    estado: 'Vigente',
    scope: 'Federal',
    detalle: 'Constitución legal como Asociación Civil sin fines de lucro en Irapuato, Guanajuato.',
  },
  {
    id: 'rfc',
    rubro: 'RFC Persona Moral',
    folio: 'CRA2305156L9',
    entidad: 'Servicio de Administración Tributaria (SAT)',
    fecha: '15/05/2023',
    estado: 'Activo',
    scope: 'Federal',
    detalle: 'Registro fiscal vigente ante la autoridad tributaria federal mexicana.',
  },
  {
    id: 'cluni',
    rubro: 'CLUNI (Federal)',
    folio: '23051511E1T / CRA23051511E1T',
    entidad: 'Comisión de Fomento de las OSC · Secretaría de Bienestar',
    fecha: '21/11/2024',
    estado: 'Activo',
    scope: 'Federal',
    detalle: 'Clave Única de Inscripción en el Registro Federal de las Organizaciones de la Sociedad Civil.',
  },
  {
    id: 'osc-gto',
    rubro: 'Registro Estatal OSC',
    folio: 'GTO-OSC-04C7-2025',
    entidad: 'Dirección General de Fortalecimiento OSC · Gobierno de Guanajuato',
    fecha: '07/07/2025',
    estado: 'Vigente',
    scope: 'Estatal y Sanitario',
    detalle: 'Acreditación estatal como organización de asistencia social activa en Guanajuato.',
  },
  {
    id: 'cofepris',
    rubro: 'DIGIPRIS / COFEPRIS',
    folio: '25-000057140',
    entidad: 'COFEPRIS · Aviso de Funcionamiento',
    fecha: '07/05/2025',
    estado: 'Actualizado',
    scope: 'Estatal y Sanitario',
    detalle: 'Actualización de Persona Moral y responsable sanitario acreditado ante COFEPRIS.',
  },
  {
    id: 'ssa',
    rubro: 'Secretaría de Salud',
    folio: 'Registro Oficial Sanitario',
    entidad: 'Secretaría de Salud de México',
    fecha: 'Desde 2021',
    estado: 'Acreditado',
    scope: 'Estatal y Sanitario',
    detalle: 'Operación residencial alineada a la normativa sanitaria nacional vigente.',
  },
  {
    id: 'proteccion-civil',
    rubro: 'Protección Civil',
    folio: 'SSCM/CMPC/PIPC/3234/24',
    entidad: 'Coordinación Municipal de Protección Civil de Irapuato',
    fecha: '09/12/2024',
    estado: 'Factible',
    scope: 'Municipal e Inmueble',
    detalle: 'Dictamen de Factibilidad de Programa Interno de Protección Civil y brigada interna capacitada.',
  },
  {
    id: 'uso-suelo',
    rubro: 'Permiso de Uso de Suelo',
    folio: 'DGDU/DZC/6-19026/2023',
    entidad: 'Dirección General de Desarrollo Urbano de Irapuato',
    fecha: '07/10/2023',
    estado: 'Autorizado',
    scope: 'Municipal e Inmueble',
    detalle: 'Giro: Servicios / Centro de Rehabilitación (Grado de Impacto: Alto controlado).',
  },
  {
    id: 'factibilidad-h2',
    rubro: 'Constancia de Factibilidad',
    folio: 'DGDU/DZC/6-964/2022',
    entidad: 'Dirección General de Desarrollo Urbano · PMDUOET 463-3',
    fecha: '31/03/2022',
    estado: 'Compatible',
    scope: 'Municipal e Inmueble',
    detalle: 'Compatibilidad de servicios en Zonificación Habitacional H2/H3.',
  },
  {
    id: 'cedula-municipal',
    rubro: 'Cédula de Empadronamiento',
    folio: '037250',
    entidad: 'Tesorería Municipal de Irapuato',
    fecha: 'Vigente',
    estado: 'Vigente',
    scope: 'Municipal e Inmueble',
    detalle:
      'Asistencia social para la prevención o combate de enfermedades como el alcoholismo, la neurosis y la drogadicción.',
  },
];

export const ADMISSION_PARAMS = [
  { label: 'Modalidad', value: 'Tratamiento Residencial (Modelo Mixto)' },
  { label: 'Población Atendida', value: 'Varonil · 18 a 50 años' },
  { label: 'Carácter del Ingreso', value: 'Estrictamente Voluntario' },
  { label: 'Duración del Programa', value: '6 Meses Continuos' },
];

export const PROCHASKA_STAGES: ProchaskaStage[] = [
  {
    id: 'precontemplacion',
    order: '01',
    name: 'Precontemplación',
    timeframe: 'Ingreso e Inicio',
    patientState:
      'El usuario llega con desgaste físico y ambivalencia ante el cambio, requiriendo contención segura y estabilización orgánica inmediata.',
    clinicalFocus:
      'Desintoxicación médica primaria, trato digno avalado por PRODHEG y establecimiento de vínculo terapéutico sin confrontación punitiva.',
    interventions: [
      'Recepción y vigilancia continua en enfermería',
      'Valoración médica integral y control de abstinencia (Dr. Juan Miguel Herrera)',
      'Inicio de dieta clínica restaurativa (Lic. Nancy Cerna)',
    ],
  },
  {
    id: 'contemplacion',
    order: '02',
    name: 'Contemplación',
    timeframe: 'Semanas 2 a 6',
    patientState:
      'Superada la abstinencia aguda, el residente comienza a reconocer el impacto neurobiológico y familiar del consumo.',
    clinicalFocus:
      'Psicoeducación sobre neurotoxicidad de sustancias, adherencia a las tres juntas diarias y evaluación psicológica continua.',
    interventions: [
      'Juntas diarias de 12 Pasos (7:00 a.m., 1:00 p.m. y 7:00 p.m.)',
      'Evaluación psicológica y técnicas de PNL (Estela Abarca Aguilar)',
      'Comprensión de la neurotoxicidad en sustancias sintéticas (Dorotea Couret)',
    ],
  },
  {
    id: 'preparacion',
    order: '03',
    name: 'Preparación',
    timeframe: 'Meses 2 a 3',
    patientState:
      'Estabilización emocional y bioquímica progresiva; el usuario asume compromisos de cambio de hábitos y estructura personal.',
    clinicalFocus:
      'Reestructuración de creencias limitantes, activación física programada y vinculación académica o artística.',
    interventions: [
      'Acondicionamiento físico lunes, miércoles y viernes (box, artes marciales y pesas)',
      'Consejería certificada EC0548 individual y grupal (Cesar Ismael Vazquez)',
      'Inscripción a regularización SEP o talleres de música e inglés',
    ],
  },
  {
    id: 'accion',
    order: '04',
    name: 'Acción',
    timeframe: 'Meses 3 a 5',
    patientState:
      'Participación activa en su recuperación, responsabilidad diaria del autocuidado y reconstrucción progresiva del vínculo familiar.',
    clinicalFocus:
      'Consolidación de herramientas de prevención de recaídas y sesiones familiares dominicales para un acompañamiento efectivo.',
    interventions: [
      'Convivencia familiar dominical (12:00 p.m., 4 horas) y junta para familias (2:00 p.m.)',
      'Desactivación de anclajes adictivos y coaching transformacional',
      'Responsabilidades diarias de orden, higiene personal y servicio comunitario',
    ],
  },
  {
    id: 'mantenimiento',
    order: '05',
    name: 'Mantenimiento',
    timeframe: 'Mes 6 y Post-egreso',
    patientState:
      'Consolidación de un nuevo proyecto de vida autónomo, sobrio y funcional listo para reintegrarse a la comunidad.',
    clinicalFocus:
      'Transición asistida hacia la vida laboral y familiar mediante seguimiento, constancias y red de apoyo en sobriedad.',
    interventions: [
      'Diseño de proyecto de vida y plan de prevención de recaídas',
      'Entrega de constancias y cartas de recomendación institucionales',
      'Vinculación laboral y seguimiento post-internamiento para continuidad en sobriedad',
    ],
  },
];

export const SEVEN_PILLARS: ProgramPillar[] = [
  {
    number: '01',
    title: 'Ingreso y Desintoxicación Médica',
    subtitle: 'Área de Enfermería · Supervisión Médica',
    description:
      'Recepción y vigilancia estrecha en enfermería para la estabilización biológica y el control farmacológico seguro del síndrome de abstinencia.',
    frequency: 'Fase Inicial Continua',
  },
  {
    number: '02',
    title: 'Nutrición Clínica y Restauración Metabólica',
    subtitle: 'Cocina Higiénica · Plan Nutracéutico',
    description:
      'Tres comidas diarias balanceadas (frutas, verduras frescas, avena, leche, arroz) diseñadas para reparar el daño neuroquímico y gastrointestinal.',
    frequency: '3 Comidas Diarias',
  },
  {
    number: '03',
    title: 'Acondicionamiento Físico y Deporte',
    subtitle: 'Box · Artes Marciales · Pesas',
    description:
      'Rutinas aeróbicas y anaeróbicas estructuradas para fortalecer el organismo, canalizar el estrés y restablecer la disciplina física.',
    frequency: 'Lunes, Miércoles y Viernes',
  },
  {
    number: '04',
    title: 'Programa de 12 Pasos (AA)',
    subtitle: 'Juntas de Ayuda Mutua y Padrinos',
    description:
      'Estudio sistemático de los 12 Pasos y temáticas de recuperación con participación de consejeros en adicciones, especialistas y padrinos.',
    frequency: '3 Juntas Diarias (Lunes a Viernes)',
  },
  {
    number: '05',
    title: 'Educación Oficial SEP y Talleres',
    subtitle: 'Regularización Académica · Música e Inglés',
    description:
      'Convenios para certificar Primaria, Secundaria, Bachillerato y Licenciatura, complementados con clases de guitarra, canto e idioma inglés.',
    frequency: 'Semanal Continuo',
  },
  {
    number: '06',
    title: 'Dinámica Familiar Dominical',
    subtitle: 'Reintegración · Junta Especial para Familias',
    description:
      'Cuatro horas de convivencia familiar supervisada y sesión formativa a las 2:00 p.m. para que las familias comprendan la adicción y acompañen con eficacia.',
    frequency: 'Todos los Domingos',
  },
  {
    number: '07',
    title: 'Egreso y Reinserción Sociolaboral',
    subtitle: 'Proyecto de Vida · Vinculación Laboral',
    description:
      'Al concluir los 6 meses, el residente recibe acompañamiento post-tratamiento, certificados, cartas de recomendación y apoyo en colocación laboral.',
    frequency: 'Mes 6 y Seguimiento',
  },
];

export const DAILY_ROUTINE: RoutineBlock[] = [
  {
    time: '06:30 a.m.',
    title: 'Despertar y Espiritualidad',
    detail: 'Círculo de oración espiritual y agradecimiento en la sala de usos múltiples para iniciar la jornada con enfoque.',
    area: 'Sala de Usos Múltiples',
  },
  {
    time: '07:00 a.m.',
    title: 'Primera Junta (AA · 12 Pasos)',
    detail: 'Estudio matutino de los 12 Pasos de Alcohólicos Anónimos y reflexión sobre una temática específica de recuperación.',
    area: 'Terapia Grupal',
  },
  {
    time: '10:00 a.m.',
    title: 'Desayuno / Almuerzo Nutricional',
    detail: 'Primera comida del día elaborada bajo lineamientos de nutrición clínica para la restauración física y energética.',
    area: 'Comedor y Cocina',
  },
  {
    time: '01:00 p.m.',
    title: 'Segunda Junta (Enfoque Conductual)',
    detail: 'Sesión grupal orientada al desarrollo psicoemocional, manejo de creencias y prevención de recaídas.',
    area: 'Consejería y Psicología',
  },
  {
    time: '03:00 p.m.',
    title: 'Comida de Tarde y Talleres',
    detail: 'Plato sólido equilibrado seguido de acondicionamiento físico (L/M/V), talleres de guitarra e inglés o estudios SEP.',
    area: 'Nutrición y Desarrollo',
  },
  {
    time: '07:00 p.m.',
    title: 'Tercera Junta (Especialistas y Padrinos)',
    detail: 'Reunión nocturna de Alcohólicos Anónimos con asistencia de especialistas en adicciones y padrinos invitados.',
    area: 'Comunidad Terapéutica',
  },
  {
    time: '08:30 p.m.',
    title: 'Cena Ligera y Oración Nocturna',
    detail: 'Ingesta ligera (avena, arroz, leche, chocolate y pan) acompañada de oración de agradecimiento por el día concluido.',
    area: 'Comedor y Reflexión',
  },
  {
    time: '09:30 p.m.',
    title: 'Descanso General',
    detail: 'Cierre de actividades y descanso reparador en dormitorios supervisados.',
    area: 'Descanso Residencial',
  },
];

export const SUNDAY_ROUTINE: RoutineBlock[] = [
  {
    time: 'Mañana',
    title: 'Suspensión de Juntas Regulares y Preparación',
    detail: 'Los domingos se suspenden las juntas regulares de lunes a viernes para dar paso a la jornada de integración familiar.',
    area: 'Organización Interna',
  },
  {
    time: '12:00 p.m.',
    title: 'Ingreso y Convivencia Familiar (4 Horas)',
    detail: 'Las familias ingresan a las instalaciones para convivir, dialogar y compartir alimentos con sus seres queridos hasta las 4:00 p.m.',
    area: 'Área de Convivencia',
  },
  {
    time: '02:00 p.m.',
    title: 'Junta Especial Dirigida a las Familias',
    detail: 'Consejeros y coaches imparten una sesión formativa paralela para que los familiares comprendan la adicción y brinden acompañamiento sano.',
    area: 'Orientación Familiar',
  },
];

export const WEEKLY_COMPLEMENTS = [
  {
    title: 'Acondicionamiento Físico',
    schedule: 'Lunes, miércoles y viernes',
    detail: 'Rutinas aeróbicas y anaeróbicas con box, artes marciales y pesas.',
  },
  {
    title: 'Desarrollo Psicoemocional',
    schedule: 'Sesiones semanales',
    detail: 'Juntas grupales con dirección, consejeros y coaches transformacionales para nuevos hábitos.',
  },
  {
    title: 'Asesoría Espiritual',
    schedule: 'Tres días a la semana',
    detail: 'Reflexiones, estudio bíblico y búsqueda de sentido existencial con comunidad eclesiástica.',
  },
  {
    title: 'Educación, Arte y Responsabilidad',
    schedule: 'Durante toda la semana',
    detail: 'Clases de guitarra e inglés, regularización SEP, lavado semanal de ropa y orden de áreas comunes.',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'juan-arturo-bradcock',
    name: 'Juan Arturo Bradcock Contreras',
    role: 'Director General y Especialista en Prevención de Adicciones',
    area: 'Dirección y Prevención',
    shortOrg: 'CONOCER EC0769 · UNAM · PRODHEG',
    primaryCredential: 'Folio CONOCER D-0013715126 · Representante Legal',
    summary:
      'Lidera la visión institucional, operativa y preventiva del centro, articulando protocolos basados en evidencia científica y respeto estricto a los derechos humanos.',
    accreditations: [
      'CONOCER Estándar EC0769: Prevención del consumo de drogas en población de 12 a 17 años (Folio D-0013715126).',
      'UNAM (CUATED / Aprend+): Detección de conductas adictivas (30 hrs), Efectos de drogas psicoactivas (20 hrs) y Prevención de autolesiones y suicidio (8 hrs).',
      'PRODHEG: Capacitaciones en "Trato Digno" avaladas por la Procuraduría de los Derechos Humanos del Estado de Guanajuato.',
      'Escuela Superior de PNL: Introducción al Coaching con Programación Neurolingüística.',
      'RD Consultores: Capacitación y coordinación de la Unidad Interna de Protección Civil (Básico).',
    ],
    contribution:
      'Diseña e implementa protocolos de prevención temprana, intervención en crisis y protección de la integridad física y emocional de cada paciente y su familia.',
    contactNote: 'Tel. 462 284 5966 · joncont26@gmail.com',
    photoUrl: '/assets/aistudio/Arturo_Bradcock_75131f32.png',
    initials: 'AB',
  },
  {
    id: 'juan-miguel-herrera',
    name: 'Dr. Juan Miguel Herrera Rodríguez',
    role: 'Director Médico y Responsable Sanitario (COFEPRIS)',
    area: 'Área Médica y Nutrición',
    shortOrg: 'Univ. Michoacana · Céd. Prof. 3761637',
    primaryCredential: 'Cédula Profesional 3761637 · Maestría en Admón. Pública',
    summary:
      'Médico Cirujano y Partero con más de dos décadas de trayectoria clínica y formación en salud pública, acreditado como Responsable Sanitario ante COFEPRIS.',
    accreditations: [
      'Médico General por la Facultad de Medicina "Dr. Ignacio Chávez", Universidad Michoacana de San Nicolás de Hidalgo (Gen. 1995–2000).',
      'Cédula Profesional Federal: 3761637 · Posgrado: Maestría en Administración Pública.',
      'Trayectoria clínica en Hospital Civil "Dr. Miguel Silva", HGR No. 1 del IMSS (Morelia) y Centro de Salud "Isaac Arriaga".',
      'Consultorio clínico establecido en Irapuato, Guanajuato.',
    ],
    contribution:
      'Supervisa la valoración médica integral, la estabilización biológica, el control seguro del síndrome de abstinencia y el seguimiento farmacológico individualizado.',
    contactNote: 'Horario Sanitario: Lunes a Viernes 08:00 a 16:00 hrs · Tel. 462 112 1831',
    initials: 'JH',
  },
  {
    id: 'nancy-cerna',
    name: 'Lic. Nancy Cerna Ramírez',
    role: 'Nutrióloga Clínica',
    area: 'Área Médica y Nutrición',
    shortOrg: 'Univ. de Guanajuato · Céd. Prof. 9654051',
    primaryCredential: 'Cédula Profesional SEP 9654051',
    summary:
      'Especialista encargada de la evaluación y restauración nutracéutica, pieza clave para reparar el deterioro metabólico y cerebral derivado del consumo.',
    accreditations: [
      'Licenciada en Nutrición por la Universidad de Guanajuato, Campus León.',
      'Cédula Profesional No. 9654051 expedida por la Dirección General de Profesiones de la SEP.',
    ],
    contribution:
      'Diseña planes de alimentación clínica de 3 comidas diarias orientados a reparar el daño neuroquímico y gastrointestinal, fortaleciendo el sistema inmunológico.',
    initials: 'NC',
  },
  {
    id: 'dorotea-couret',
    name: 'Dorotea María Guadalupe Couret Aguilar',
    role: 'Transformational Coach y Consejera Especializada',
    area: 'Psicología y Consejería',
    shortOrg: 'WACLE · CONOCER EC0769 · IMNE',
    primaryCredential: 'Folio CONOCER D-0023976125 · WACLE DEHAC',
    summary:
      'Integra metodologías de coaching transformacional y abordaje neuropsicosocial para impulsar la resiliencia y el cambio profundo de creencias.',
    accreditations: [
      'WACLE (World Association of Coaching Learning and Education): Certificada como Transformational Coach (Programa DEHAC).',
      'CONOCER Estándar EC0769: Estrategias informativas para la prevención del consumo de drogas (Folio D-0023976125).',
      'Instituto Mexicano de Neurociencias y Educación: Especialización en "Neurotoxicidad de las metanfetaminas" y actualización "del CONADIC al CONASAMA".',
    ],
    contribution:
      'Brinda herramientas de afrontamiento cognitivo y motivación intrínseca para resignificar el proyecto de vida y atender las secuelas neurobiológicas de sustancias sintéticas.',
    photoUrl: '/assets/aistudio/DOROTHY_ABARCA_701621ce.png',
    initials: 'DC',
  },
  {
    id: 'estela-abarca',
    name: 'Estela Abarca Aguilar',
    role: 'Psicóloga y Máster en PNL Educativa',
    area: 'Psicología y Consejería',
    shortOrg: 'HISPAMAP (Madrid, España)',
    primaryCredential: 'Master Degree NLP in Education · Psicología Clínica',
    summary:
      'Aporta un enfoque psicoterapéutico con formación internacional orientado a la reestructuración de patrones de pensamiento y sanación emocional.',
    accreditations: [
      'HISPAMAP (Sociedad Hispano Americana de Psicología Aplicada): Grado de Máster en Programación Neurolingüística para la Educación, expedido en Madrid, España.',
      'Responsable del área de Psicología Clínica en el cuerpo operativo institucional.',
    ],
    contribution:
      'Aplica técnicas de PNL y psicología aplicada para desactivar anclajes adictivos, procesar traumas subyacentes y fortalecer la autorregulación emocional.',
    photoUrl: '/assets/aistudio/Estela_Abarca_e734d38f.png',
    initials: 'EA',
  },
  {
    id: 'cesar-ismael-vazquez',
    name: 'Cesar Ismael Vazquez Gutierrez',
    role: 'Consejero Certificado en Adicciones (EC0548)',
    area: 'Psicología y Consejería',
    shortOrg: 'CONOCER EC0548 · Onyalistli A.C.',
    primaryCredential: 'Folio CONOCER D-00208633',
    summary:
      'Enlace y guía cotidiano en la contención del usuario, facilitando dinámicas grupales y acompañamiento personalizado bajo estándares oficiales.',
    accreditations: [
      'CONOCER Estándar EC0548: Certificado de Competencia Laboral en "Consejería en adicciones" (Folio D-00208633).',
      'Avalado por la Entidad de Certificación Onyalistli Centro de Investigación, Análisis y Formación Para el Desarrollo Humano A.C.',
    ],
    contribution:
      'Conduce sesiones de consejería individual y grupal centradas en prevención de recaídas, adopción del plan de recuperación e integración a una vida libre de sustancias.',
    photoUrl: '/assets/aistudio/Cesar_Ismael_04ca79cf.png',
    initials: 'CV',
  },
];

export const ACCREDITATION_MATRIX: MatrixRow[] = [
  {
    specialist: 'Juan Arturo Bradcock C.',
    role: 'Director General / Prevención',
    issuer: 'CONOCER / UNAM / PRODHEG',
    competency: 'Prevención, Trato Digno y Liderazgo',
  },
  {
    specialist: 'Dr. Juan Miguel Herrera R.',
    role: 'Director Médico',
    issuer: 'Univ. Michoacana / IMSS',
    competency: 'Valoración Médica y Desintoxicación',
  },
  {
    specialist: 'Lic. Nancy Cerna Ramírez',
    role: 'Nutrióloga Clínica',
    issuer: 'SEP / Universidad de Guanajuato',
    competency: 'Restitución Metabólica y Nutrición',
  },
  {
    specialist: 'Dorotea M. Couret Aguilar',
    role: 'Transformational Coach',
    issuer: 'WACLE / CONOCER / IMNE',
    competency: 'Neurotoxicidad y Coaching de Vida',
  },
  {
    specialist: 'Estela Abarca Aguilar',
    role: 'Psicóloga y Máster PNL',
    issuer: 'HISPAMAP (Madrid, España)',
    competency: 'Programación Neurolingüística y Salud Mental',
  },
  {
    specialist: 'Cesar Ismael Vazquez G.',
    role: 'Consejero Certificado',
    issuer: 'CONOCER (EC0548)',
    competency: 'Consejería en Adicciones y Prevención de Recaídas',
  },
];

export const SITEMAP_SPEC: SitemapNode[] = [
  {
    file: 'index.html',
    route: 'inicio',
    title: 'Landing Page Institucional',
    purpose: 'Mensaje de impacto, resumen del programa de 6 meses, pilares, respaldo normativo y llamado a valoración.',
    elements: ['Hero Split Institucional', 'Cinta Operativa Irapuato', '7 Pilares Numerados', 'Matriz de Respaldo Legal'],
  },
  {
    file: 'pages/quienes-somos.html',
    route: 'institucion',
    title: 'Identidad, Filosofía y Marco Legal',
    purpose: 'Historia fundacional (3 de marzo de 2020), misión, visión, valores y auditoría de registros federales/estatales.',
    elements: ['Misión y Visión', '6 Valores Directores', 'Objeto Social CLUNI', 'Tabla SAT/COFEPRIS/PC'],
  },
  {
    file: 'pages/programa.html',
    route: 'programa',
    title: 'Modelo Clínico-Terapéutico',
    purpose: 'Detalle de Prochaska y DiClemente, desintoxicación, nutrición, deporte, SEP, 12 Pasos y rutina L-D.',
    elements: ['Selector Prochaska', '7 Pilares Terapéuticos', 'Rutina L-V y Domingos', 'Egreso y Reinserción'],
  },
  {
    file: 'pages/equipo.html',
    route: 'equipo',
    title: 'Gobierno Corporativo y Especialistas',
    purpose: 'Perfiles ejecutivos, cédulas profesionales, folios CONOCER y sinergia interdisciplinaria.',
    elements: ['6 Perfiles Ejecutivos', 'Matriz de Competencias', 'Sinergia Clínica', 'Responsable Sanitario'],
  },
  {
    file: 'pages/galerias.html · pages/blog.html',
    route: 'comunidad',
    title: 'Instalaciones, Medios y Guías Familiares',
    purpose: 'Recorrido de áreas operativas, canal oficial @angelesdeesperanzaac y artículos de orientación familiar.',
    elements: ['Áreas del Inmueble (120 m²)', 'Canales @angelesdeesperanzaac', 'Biblioteca de Guías Clínicas'],
  },
  {
    file: 'pages/contacto.html',
    route: 'contacto',
    title: 'Atención Inmediata y Ubicación',
    purpose: 'Canal directo WhatsApp (+52 462 284 5966), teléfonos, formulario de ingreso voluntario y mapa en Irapuato.',
    elements: ['Formulario Validado', 'Enlace Directo WhatsApp', 'Mapa Colonia Guerrero', 'Directorio Oficial'],
  },
];

export const FACILITY_AREAS: FacilityArea[] = [
  {
    number: '01',
    name: 'Área de Enfermería y Valoración Médica',
    purpose: 'Recepción, estabilización biológica y vigilancia estrecha durante la desintoxicación primaria.',
    specifications: 'Supervisión médica de lunes a viernes (08:00 a 16:00 hrs) y protocolo de control de abstinencia.',
  },
  {
    number: '02',
    name: 'Cocina y Comedor Nutricional',
    purpose: 'Preparación de 3 comidas diarias bajo estricto control higiénico para restauración metabólica.',
    specifications: 'Insumos frescos (frutas, verduras, avena, leche, arroz) alineados al plan de Nutrición Clínica.',
  },
  {
    number: '03',
    name: 'Sala de Usos Múltiples',
    purpose: 'Sede del círculo de oración matutino, tres juntas diarias de 12 Pasos (AA) y juntas familiares.',
    specifications: 'Espacio central para desarrollo psicoemocional, sesiones de consejería y talleres educativos.',
  },
  {
    number: '04',
    name: 'Zona de Acondicionamiento Físico',
    purpose: 'Activación física aeróbica y anaeróbica tres veces por semana.',
    specifications: 'Entrenamiento estructurado de box, artes marciales y pesas los lunes, miércoles y viernes.',
  },
  {
    number: '05',
    name: 'Aulas de Estudio SEP y Talleres Artísticos',
    purpose: 'Regularización académica (Primaria a Licenciatura) y formación complementaria.',
    specifications: 'Equipamiento básico con acceso a internet, clases de guitarra, canto e idioma inglés.',
  },
  {
    number: '06',
    name: 'Área de Convivencia Dominical y Protección Civil',
    purpose: 'Integración familiar de 4 horas cada domingo bajo entorno seguro y regulado.',
    specifications: 'Inmueble de 120.00 m² con agua potable, electricidad y Programa Interno de Protección Civil vigente.',
  },
];

export const COMMUNITY_GUIDES: CommunityGuide[] = [
  {
    id: 'desintoxicacion-voluntaria',
    category: 'Clínica',
    title: 'Por qué el ingreso voluntario y la supervisión médica definen la primera semana',
    author: 'Dirección Médica y Prevención · Ángeles de Esperanza, A.C.',
    readTime: '4 min de lectura',
    excerpt:
      'El control clínico de la abstinencia y el trato digno en enfermería eliminan riesgos físicos y construyen la confianza inicial del paciente.',
    sections: [
      {
        heading: 'Estabilización biológica en un entorno afectuoso',
        body: 'Al ingresar voluntariamente, el usuario de 18 a 50 años se ubica en el área de enfermería bajo vigilancia estrecha. El médico de cabecera realiza la valoración inicial y suministra el soporte necesario para sobrellevar la abstinencia sin poner en riesgo su integridad física ni mental.',
      },
      {
        heading: 'Trato digno bajo estándares PRODHEG',
        body: 'La contención inicial nunca recurre a prácticas punitivas. Nuestro equipo aplica los lineamientos de Trato Digno y las capacitaciones de la UNAM en detección de crisis y prevención de autolesiones para dar contención segura desde el primer día.',
      },
    ],
  },
  {
    id: 'neurotoxicidad-nutricion',
    category: 'Clínica',
    title: 'Restauración metabólica y neuroquímica: el papel de la nutrición clínica',
    author: 'Lic. Nancy Cerna Ramírez & Dorotea M. Couret Aguilar',
    readTime: '5 min de lectura',
    excerpt:
      'El consumo prolongado de sustancias sintéticas deteriora el sistema gastrointestinal y el equilibrio cerebral; la dieta clínica acelera la recuperación cognitiva.',
    sections: [
      {
        heading: 'Reparación celular a través de tres comidas diarias',
        body: 'Cada usuario recibe tres comidas diarias elaboradas bajo normas sanitarias con frutas, verduras frescas, avena, leche y arroz. Esta restitución nutracéutica fortalece el sistema inmunológico y estabiliza los niveles de energía necesarios para el trabajo terapéutico.',
      },
      {
        heading: 'Atención a la neurotoxicidad de metanfetaminas',
        body: 'Comprender las afecciones neurobiológicas de las sustancias sintéticas permite al equipo de coaching y psicología ajustar el ritmo de exigencia cognitiva durante las primeras semanas, evitando sobrecargas y favoreciendo la plasticidad cerebral.',
      },
    ],
  },
  {
    id: 'dinamica-familiar-domingos',
    category: 'Familia',
    title: 'El domingo familiar: cómo pasar de la preocupación al acompañamiento efectivo',
    author: 'Consejería Certificada en Adicciones (EC0548)',
    readTime: '4 min de lectura',
    excerpt:
      'Cada domingo a las 12:00 p.m., las familias conviven cuatro horas y reciben herramientas prácticas en una junta especial a las 2:00 p.m.',
    sections: [
      {
        heading: 'Cuatro horas de vínculo supervisado',
        body: 'Los domingos se suspenden las juntas regulares para priorizar el encuentro familiar. Compartir alimentos y dialogar en un ambiente limpio y tranquilo permite reconstruir gradualmente la confianza perdida.',
      },
      {
        heading: 'Junta especial para familiares a las 2:00 p.m.',
        body: 'Mientras los residentes conviven, nuestros consejeros y coaches imparten una sesión orientada exclusivamente a madres, padres, parejas y hermanos para comprender la enfermedad adictiva, establecer límites sanos y prevenir codependencias.',
      },
    ],
  },
  {
    id: 'modelo-prochaska-12-pasos',
    category: 'Metodología',
    title: 'Sinergia entre las Etapas de Cambio de Prochaska y las tres juntas de 12 Pasos',
    author: 'Estela Abarca Aguilar & Cesar Ismael Vazquez G.',
    readTime: '5 min de lectura',
    excerpt:
      'Combinamos la estructura diaria de Alcohólicos Anónimos con psicoterapia PNL y fases progresivas de cambio conductual durante 6 meses.',
    sections: [
      {
        heading: 'Un programa adaptado al estado de cada residente',
        body: 'No aplicamos un molde rígido: ajustamos las tareas de las cinco Etapas de Cambio de Prochaska y DiClemente al estado físico, mental y emocional de cada hombre en proceso, desde la precontemplación hasta la reinserción laboral.',
      },
      {
        heading: 'Tres anclajes diarios de lunes a viernes',
        body: 'Las juntas de 7:00 a.m., 1:00 p.m. y 7:00 p.m. estructuran el día con el apoyo de padrinos y especialistas, consolidando hábitos que se complementan con estudios SEP, música, inglés y ejercicio físico.',
      },
    ],
  },
];

export const INSTITUTIONAL_VIDEOS: InstitutionalVideo[] = [
  {
    id: 'video-01',
    number: '01',
    topic: 'Identidad y Propósito Institucional',
    title: 'Presentación Centro de Rehabilitación Ángeles de Esperanza',
    description:
      'Mensaje institucional sobre la recuperación física, mental y espiritual, con línea directa de orientación y valoración al 462 284 5966.',
    src: '/assets/aistudio/1_6c23c48c.mp4',
  },
  {
    id: 'video-02',
    number: '02',
    topic: 'Comunidad y Convivencia',
    title: 'Vida interna y acompañamiento fraterno',
    description:
      'Actividades cotidianas de integración, respeto mutuo y compañerismo entre residentes dentro de nuestras instalaciones en Irapuato.',
    src: '/assets/aistudio/2_0b722092.mp4',
  },
  {
    id: 'video-03',
    number: '03',
    topic: 'Encuentro Familiar',
    title: 'Celebración navideña y convivencia con familias',
    description:
      'Jornada de unión familiar, alimentos compartidos y fortalecimiento de vínculos afectivos junto a seres queridos en fechas especiales.',
    src: '/assets/aistudio/3_9874ac9d.mp4',
  },
  {
    id: 'video-04',
    number: '04',
    topic: 'Egreso y Proyecto de Vida',
    title: 'Presentación de proyecto de vida y testimonio familiar',
    description:
      'Exposición del plan de metas tras concluir el internamiento residencial y testimonio directo de agradecimiento de una madre de familia.',
    src: '/assets/aistudio/4_0caa0190.mp4',
  },
  {
    id: 'video-05',
    number: '05',
    topic: 'Difusión y Entrevista en Medios',
    title: 'Entrevista sobre apoyo integral a jóvenes y familias',
    description:
      'Participación informativa sobre el acompañamiento profesional, la prevención de adicciones y el rescate de oportunidades de vida.',
    src: '/assets/aistudio/AQMBS_1ZSILk8C_p-5OPZYQ7YKtMKz83K6R-cu5DBqz8KDw5iY7KuEn5QKstoVbq_iDNiZwwsysnekaHDlipj-Tg8ffhLqkfElo_d67394a7.mp4',
  },
];
