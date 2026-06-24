"use client";

import { useState } from "react";
import { Play } from "lucide-react";

// Lecture différée (façade) : affiche une vignette de marque + bouton lecture ;
// l'iframe YouTube (sans cookie) n'est chargée qu'au clic — rapide et RGPD-friendly.
export default function VideoEmbed({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg bg-charcoal">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Lire la vidéo : ${title}`}
          className="group absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-secondary to-secondary-dark"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all group-hover:scale-105 group-hover:bg-white">
            <Play className="ml-1 h-8 w-8 text-secondary" fill="currentColor" />
          </span>
          <span className="font-semibold text-white">{title}</span>
        </button>
      )}
    </div>
  );
}
