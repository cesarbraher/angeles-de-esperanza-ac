/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ComingSoonView } from './components/ComingSoonView';
import { CommunityView } from './components/CommunityView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { InstitutionView } from './components/InstitutionView';
import { PrivacyView } from './components/PrivacyView';
import { ProgramView } from './components/ProgramView';
import { TeamView } from './components/TeamView';
import {
  INSTITUTION_INFO,
  PAGE_METADATA,
  SHARED_BANNER_IMAGE,
  type PageRoute,
} from './data/aeacData';

const VALID_ROUTES = new Set<PageRoute>(Object.keys(PAGE_METADATA) as PageRoute[]);

function getInitialRoute(): PageRoute {
  try {
    const param = new URLSearchParams(window.location.search).get('seccion') as PageRoute | null;
    if (param && VALID_ROUTES.has(param)) {
      return param;
    }
  } catch {
    // Ignore URL parsing errors
  }
  return 'inicio';
}

function upsertMetaTag(attrName: 'name' | 'property', attrValue: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attrName}="${attrValue}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attrName, attrValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertCanonicalLink(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export default function App() {
  const [activeRoute, setActiveRoute] = useState<PageRoute>(getInitialRoute);

  useEffect(() => {
    const meta = PAGE_METADATA[activeRoute];
    const origin = window.location.origin;
    const bannerUrl = `${origin}${SHARED_BANNER_IMAGE}`;
    const currentUrl = `${origin}${window.location.pathname}${window.location.search}`;

    document.title = meta.title;
    upsertMetaTag('name', 'description', meta.description);
    upsertMetaTag('property', 'og:title', meta.title);
    upsertMetaTag('property', 'og:description', meta.description);
    upsertMetaTag('property', 'og:url', currentUrl);
    upsertMetaTag('property', 'og:image', bannerUrl);
    upsertMetaTag('property', 'og:image:secure_url', bannerUrl);
    upsertMetaTag('property', 'og:image:alt', meta.bannerAlt);
    upsertMetaTag('name', 'twitter:title', meta.title);
    upsertMetaTag('name', 'twitter:description', meta.description);
    upsertMetaTag('name', 'twitter:image', bannerUrl);
    upsertMetaTag('name', 'twitter:image:alt', meta.bannerAlt);
    upsertCanonicalLink(currentUrl);
  }, [activeRoute]);

  useEffect(() => {
    const handlePopState = () => {
      setActiveRoute(getInitialRoute());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (route: PageRoute) => {
    setActiveRoute(route);
    try {
      const url = new URL(window.location.href);
      if (route === 'inicio') {
        url.searchParams.delete('seccion');
      } else {
        url.searchParams.set('seccion', route);
      }
      window.history.pushState({}, '', url.toString());
    } catch {
      // Ignore history errors
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-900">
      <Header activeRoute={activeRoute} onNavigate={handleNavigate} />

      <main className="flex-1">
        {activeRoute === 'inicio' && <HomeView onNavigate={handleNavigate} />}
        {activeRoute === 'institucion' && <InstitutionView />}
        {activeRoute === 'programa' && <ProgramView />}
        {activeRoute === 'equipo' && <TeamView />}
        {activeRoute === 'comunidad' && <CommunityView />}
        {activeRoute === 'bolsa-trabajo' && (
          <ComingSoonView title="Bolsa de Trabajo" onNavigate={handleNavigate} />
        )}
        {activeRoute === 'consejeria-linea' && (
          <ComingSoonView title="Consejería en Línea" onNavigate={handleNavigate} />
        )}
        {activeRoute === 'expedientes-clinicos' && (
          <ComingSoonView
            title="Sistema Digital de Expedientes Clínicos"
            onNavigate={handleNavigate}
          />
        )}
        {activeRoute === 'contacto' && <ContactView />}
        {activeRoute === 'privacidad' && <PrivacyView onNavigate={handleNavigate} />}
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Compact WhatsApp Floating Action Button */}
      <a
        href={`https://wa.me/${INSTITUTION_INFO.whatsappRaw}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Atención inmediata por WhatsApp ${INSTITUTION_INFO.whatsapp}`}
        title={`WhatsApp ${INSTITUTION_INFO.whatsapp}`}
        className="fixed bottom-5 right-5 z-30 w-12 h-12 rounded-full bg-[#25D366] text-slate-950 shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
