import { Pause, Play, Repeat, SkipBack, SkipForward } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { INSTITUTIONAL_VIDEOS, INSTITUTION_INFO } from '../data/aeacData';

export function VideoGalleryPlayer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoAdvance, setAutoAdvance] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const shouldAutoPlayRef = useRef(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const totalVideos = INSTITUTIONAL_VIDEOS.length;
  const activeVideo = INSTITUTIONAL_VIDEOS[activeIndex];
  const paddedTotal = String(totalVideos).padStart(2, '0');

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (shouldAutoPlayRef.current) {
      shouldAutoPlayRef.current = false;
      const playPromise = videoEl.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {
          setIsPlaying(false);
        });
      }
    }
  }, [activeIndex]);

  const selectVideo = (index: number, autoPlay = true) => {
    if (index < 0 || index >= totalVideos) return;
    if (index === activeIndex) {
      const videoEl = videoRef.current;
      if (!videoEl) return;
      if (videoEl.paused) {
        videoEl.play().catch(() => {});
      } else {
        videoEl.pause();
      }
      return;
    }
    shouldAutoPlayRef.current = autoPlay;
    setActiveIndex(index);
  };

  const handlePrevious = () => {
    if (activeIndex > 0) {
      selectVideo(activeIndex - 1, true);
    }
  };

  const handleNext = () => {
    if (activeIndex < totalVideos - 1) {
      selectVideo(activeIndex + 1, true);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    if (autoAdvance && activeIndex < totalVideos - 1) {
      shouldAutoPlayRef.current = true;
      setActiveIndex((prev) => Math.min(prev + 1, totalVideos - 1));
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-wider text-[#DC2626]">
              Archivo Audiovisual Institucional · {INSTITUTION_INFO.shortName}
            </p>
            <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight text-balance">
              Reproductor unificado de testimonios y vida comunitaria
            </h2>
          </div>

          <p className="font-mono text-xs text-slate-500 tabular-nums whitespace-nowrap shrink-0">
            Reproducción continua · Videos 01 al {paddedTotal}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 border border-slate-200 bg-white rounded-lg overflow-hidden">
          {/* Unified HTML5 Video Stage */}
          <div className="lg:col-span-7 flex flex-col border-b lg:border-b-0 lg:border-r border-slate-200">
            <div className="relative bg-slate-950 border-b border-slate-200">
              <video
                ref={videoRef}
                key={activeVideo.src}
                src={activeVideo.src}
                controls
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={handleVideoEnded}
                className="w-full h-[380px] sm:h-[460px] bg-slate-950 object-contain block"
              >
                Tu navegador no soporta la reproducción de video HTML5.
              </video>
            </div>

            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-5 bg-white">
              <div className="space-y-2">
                <p className="font-mono text-xs font-medium text-[#1D4ED8] tabular-nums">
                  {activeVideo.number} / {paddedTotal} · {activeVideo.topic}
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  {activeVideo.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeVideo.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    disabled={activeIndex === 0}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <SkipBack className="w-3.5 h-3.5" />
                    Anterior
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={activeIndex === totalVideos - 1}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Siguiente
                    <SkipForward className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setAutoAdvance((prev) => !prev)}
                  aria-pressed={autoAdvance}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    autoAdvance
                      ? 'border-[#1D4ED8] bg-blue-50 text-[#1D4ED8]'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Repeat className="w-3.5 h-3.5" />
                  Reproducción continua: {autoAdvance ? 'Activa' : 'Pausada'}
                </button>
              </div>
            </div>
          </div>

          {/* Playlist in strict numerical order */}
          <div className="lg:col-span-5 flex flex-col bg-[#FAF9F6]">
            <div className="px-5 py-4 border-b border-slate-200 bg-white flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                Lista de videos (01–{paddedTotal})
              </p>
              <span className="font-mono text-xs text-slate-500 tabular-nums">
                Video {activeVideo.number} de {paddedTotal}
              </span>
            </div>

            <div className="divide-y divide-slate-200 flex-1">
              {INSTITUTIONAL_VIDEOS.map((video, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={video.id}
                    type="button"
                    onClick={() => selectVideo(index, true)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`w-full text-left px-5 py-4 transition-colors cursor-pointer flex items-start gap-3.5 ${
                      isActive ? 'bg-white' : 'hover:bg-white/70'
                    }`}
                  >
                    <span
                      className={`mt-0.5 w-7 h-7 rounded-md flex items-center justify-center shrink-0 border transition-colors ${
                        isActive
                          ? 'bg-[#DC2626] border-[#DC2626] text-white'
                          : 'bg-white border-slate-200 text-slate-600'
                      }`}
                    >
                      {isActive && isPlaying ? (
                        <Pause className="w-3.5 h-3.5 fill-current" />
                      ) : (
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      )}
                    </span>

                    <div className="min-w-0 flex-1 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`font-mono text-xs font-semibold tabular-nums ${
                            isActive ? 'text-[#DC2626]' : 'text-[#1D4ED8]'
                          }`}
                        >
                          {video.number}. {video.topic}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-slate-900 leading-snug">
                        {video.title}
                      </p>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
