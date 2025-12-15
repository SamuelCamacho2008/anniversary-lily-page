import { Music, Heart, ExternalLink, Star } from "lucide-react";

interface SpotifyQRProps {
  songTitle?: string;
  artist?: string;
  spotifyUrl?: string;
}

const SpotifyQR = ({ 
  songTitle = "Lovers Rock", 
  artist = "TV Girl",
  spotifyUrl = "https://open.spotify.com/track/6dBUzqjtbnIa1TwYbyw5CM"
}: SpotifyQRProps) => {
  // Spotify Code/QR URL - using Spotify's scan code API
  const spotifyUri = "spotify:track:6dBUzqjtbnIa1TwYbyw5CM";
  const spotifyCodeUrl = `https://scannables.scdn.co/uri/plain/png/fff0e6/black/256/${spotifyUri}`;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Decorative container */}
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-cafe/30 via-gold/30 to-cafe/30 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Main card */}
        <div className="relative bg-gradient-to-br from-card via-card/95 to-cafe/10 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-cafe/20 hover:border-cafe/40 transition-all duration-300">
          {/* Header with music icon */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-[#1DB954] flex items-center justify-center">
              <Music className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground font-elegant">Una canción para ti</p>
              <p className="text-sm font-elegant font-semibold text-foreground leading-tight">{songTitle}</p>
              <p className="text-xs text-cafe">{artist}</p>
            </div>
            <Heart className="w-4 h-4 text-cafe fill-cafe/50 animate-pulse" />
          </div>
          
          {/* QR Code Container */}
          <a 
            href={spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group/qr"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-1 bg-gradient-to-br from-cafe/20 via-transparent to-gold/20 rounded-xl" />
            
            {/* Corner decorations */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-cafe/60 rounded-tl-lg" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-cafe/60 rounded-tr-lg" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-cafe/60 rounded-bl-lg" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cafe/60 rounded-br-lg" />
            
            {/* QR Code */}
            <div className="relative bg-[#fff8f0] rounded-lg p-2 overflow-hidden">
              <img 
                src={spotifyCodeUrl}
                alt={`Spotify code para ${songTitle}`}
                className="w-40 h-auto mx-auto transition-transform duration-300 group-hover/qr:scale-105"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-cafe/10 opacity-0 group-hover/qr:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                <div className="bg-card/90 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                  <ExternalLink className="w-3 h-3 text-cafe" />
                  <span className="text-xs font-elegant text-foreground">Abrir en Spotify</span>
                </div>
              </div>
            </div>
          </a>
          
          {/* Footer text */}
          <p className="text-[10px] text-muted-foreground text-center mt-2 font-elegant italic">
            Escanea con la app de Spotify ♪
          </p>
          
          {/* Floating decorations */}
          <div className="absolute -top-2 -right-2 text-cafe/40 animate-bounce" style={{ animationDelay: "0s" }}>
            🤎
          </div>
          <Star className="absolute -top-3 -left-1 w-3 h-3 text-gold/50 animate-pulse" />
          <div className="absolute -bottom-1 -left-2 text-cafe/30 animate-bounce" style={{ animationDelay: "0.5s" }}>
            🤎
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotifyQR;
