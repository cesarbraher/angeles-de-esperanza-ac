# 🕊️ Sitio Web Oficial - Ángeles de Esperanza, A.C.

## 📖 Descripción del Proyecto
Este repositorio contiene el código fuente del sitio web oficial de **Ángeles de Esperanza, A.C.** (https://www.angelesdeesperanzaac.org). El proyecto web está diseñado para comunicar de manera empática y profesional los servicios de este centro de rehabilitación de adicciones, ubicado en Irapuato, Guanajuato. 

El diseño y contenido están enfocados en informar a prospectos y familiares sobre el modelo de tratamiento residencial voluntario de 6 meses dirigido a población varonil de 18 a 50 años.

## 🗺️ Arquitectura del Sitio
El sitio está estructurado para guiar al usuario desde el impacto emocional hasta la conversión (contacto), abarcando:
- **Inicio (Landing Page):** Resumen de servicios, acreditaciones oficiales y llamados a la acción inmediatos.
- **Quiénes Somos:** Historia fundacional, filosofía (misión, visión y valores) y marco legal.
- **Modelo de Recuperación:** Detalle del enfoque clínico basado en el modelo de Prochaska y DiClemente, nutrición clínica, acondicionamiento físico, educación y el programa de 12 pasos.
- **Equipo Multidisciplinario:** Perfiles profesionales del área directiva, médica, psicológica y de consejería.
- **Galerías y Blog:** Recursos visuales de las instalaciones, testimonios y artículos de apoyo familiar.
- **Contacto:** Integración de Google Maps, números de emergencia, WhatsApp y formularios de ayuda.

## 📂 Estructura de Archivos
- **`index.html`**: Landing page principal (Responsive, Menú hamburguesa, Hero con fondo oscuro, etc.).
- **`styles.css`**: Estilos globales (Oswald, Poppins, paleta institucional en Rojo, Azul y Verde).
- **`script.js`**: Lógica del menú móvil (abre/cierra y auto-cierre al click) y API del blog.
- **`enviar.php`**: Script procesador del formulario de contacto. Envía los correos directamente.
- **`sitemap.xml`**: Mapa del sitio en formato XML para SEO y motores de búsqueda.
- **`pages/`**: Carpeta con las subpáginas (`quienes-somos.html`, `programa.html`, `equipo.html`).
- **`assets/img/`**: Directorio de imágenes. Aquí se encuentra el logo (`LOGOTIPO TRANSPARENTE.png`) y donde debes reemplazar los placeholders (`imagen1.png`, `imagen2.png`...).
- **`assets/videos/`**: Directorio de videos. Aquí va el video de certificaciones (`video-certificaciones.mp4`).

## ⚙️ Notas de Implementación
* Todos los placeholders están etiquetados con la medida en píxeles recomendada (ej. `800x400 - IMAGEN 1`). Para sustituirlos, sube tus fotos a `assets/img/` y reemplaza la ruta en los archivos HTML.
* El formulario usa PHP Mailer de forma nativa a los correos registrados (`info@angelesdeesperanzaac.org` y `angelesdeesperanza23@gmail.com`).
* Las certificaciones integran el CLUNI oficial (23051511E1T) y un módulo para reproducir el video.
* El mapa de Google Maps ya apunta directamente a la dirección de Irapuato (Calle Plan de Iguala #1855).

## 📄 Licencia
Este proyecto es propiedad de Ángeles de Esperanza, A.C. Todos los derechos reservados sobre el contenido clínico, fotográfico y de identidad corporativa.