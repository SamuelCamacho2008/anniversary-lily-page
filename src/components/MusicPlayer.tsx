import { useState, useEffect, forwardRef, RefObject } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

interface MusicPlayerProps {
  audioSrc?: string;
  songTitle?: string;
  audioRef?: RefObject<HTMLAudioElement>;
}

const MusicPlayer = forwardRef<HTMLDivElement, MusicPlayerProps>(({ audioSrc, songTitle = "Música romántica", audioRef }, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Sincronizar estado con el audio externo
  useEffect(() => {
    const audio = audioRef?.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [audioRef]);

  const togglePlay = () => {
    if (audioRef?.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  const toggleMute = () => {
    if (audioRef?.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (!audioSrc) {
    return (
      <div className="fixed bottom-4 right-4 z-50 bg-card/90 backdrop-blur-sm rounded-full px-4 py-3 shadow-lg border border-rose/20 flex items-center gap-3">
        <Music className="w-5 h-5 text-rose animate-pulse" />
        <span className="text-sm text-muted-foreground font-elegant">
          Sube tu archivo MP3 para agregar música
        </span>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-card/90 backdrop-blur-sm rounded-full px-4 py-3 shadow-lg border border-rose/20 flex items-center gap-3">
      <button
        onClick={togglePlay}
        className="w-10 h-10 rounded-full bg-rose/20 hover:bg-rose/30 flex items-center justify-center transition-colors"
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isPlaying ? (
          <span className="text-rose text-lg">⏸</span>
        ) : (
          <span className="text-rose text-lg">▶</span>
        )}
      </button>
      
      <div className="flex flex-col">
        <span className="text-sm font-elegant text-foreground">{songTitle}</span>
        <span className="text-xs text-muted-foreground">
          {isPlaying ? "Reproduciendo..." : "En pausa"}
        </span>
      </div>
      
      <button
        onClick={toggleMute}
        className="w-8 h-8 rounded-full hover:bg-rose/10 flex items-center justify-center transition-colors"
        aria-label={isMuted ? "Activar sonido" : "Silenciar"}
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4 text-muted-foreground" />
        ) : (
          <Volume2 className="w-4 h-4 text-rose" />
        )}
      </button>
    </div>
  );
});

MusicPlayer.displayName = "MusicPlayer";

export default MusicPlayer;
