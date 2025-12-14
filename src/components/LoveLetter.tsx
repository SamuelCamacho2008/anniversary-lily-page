import { useState } from "react";
import { Heart, Mail } from "lucide-react";

interface LoveLetterProps {
  content: string;
  signature?: string;
}

const LoveLetter = ({ content, signature = "Con todo mi amor" }: LoveLetterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Interactive Envelope */}
      <div 
        className={`cursor-pointer transition-all duration-700 ${isOpen ? 'opacity-0 scale-95 pointer-events-none absolute inset-0' : 'opacity-100'}`}
        onClick={() => setIsOpen(true)}
      >
        <div className="relative bg-gradient-to-br from-rose-200 via-pink-100 to-rose-300 rounded-xl shadow-2xl overflow-hidden border-2 border-rose/30 hover:shadow-3xl hover:scale-[1.02] transition-transform duration-300">
          {/* Envelope flap */}
          <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden">
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-40 bg-gradient-to-br from-rose-300 to-pink-200 origin-top transform rotate-0 border-b-2 border-rose/20"
              style={{
                clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)',
              }}
            />
            <div className="absolute top-8 left-1/2 -translate-x-1/2">
              <Heart className="w-10 h-10 text-primary fill-primary/40 animate-heartbeat drop-shadow-lg" />
            </div>
          </div>
          
          {/* Envelope body */}
          <div className="pt-36 pb-12 px-8 text-center">
            <Mail className="w-12 h-12 text-rose mx-auto mb-4 animate-pulse" />
            <p className="font-romantic text-2xl md:text-3xl text-primary mb-2">
              Una carta para un día muy especial
            </p>
            <p className="font-elegant text-lg text-foreground/70 mb-4">
              como lo es nuestro mes ❤️
            </p>
            <div className="inline-flex items-center gap-2 bg-background/60 backdrop-blur-sm px-4 py-2 rounded-full border border-rose/30 animate-pulse">
              <span className="text-sm font-elegant text-primary">✨ Toca para abrir ✨</span>
            </div>
          </div>

          {/* Decorative seal */}
          <div className="absolute bottom-4 right-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-rose flex items-center justify-center shadow-lg">
              <Heart className="w-6 h-6 text-white fill-white/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Letter paper - shown when envelope is open */}
      <div className={`transition-all duration-700 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none absolute inset-0'}`}>
        {/* Close hint */}
        <button 
          onClick={() => setIsOpen(false)}
          className="mb-4 mx-auto flex items-center gap-2 text-primary/60 hover:text-primary transition-colors font-elegant text-sm"
        >
          <Mail className="w-4 h-4" />
          Toca para cerrar el sobre
        </button>

        <div className="letter-paper rounded-xl p-8 md:p-12 relative overflow-hidden animate-fade-in-up">
          {/* Decorative corner lines */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-rose/30 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-rose/30 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-rose/30 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-rose/30 rounded-br-lg" />
          
          {/* Letter content */}
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <Heart className="w-8 h-8 text-rose animate-heartbeat fill-rose/20" />
            </div>
            
            <p className="font-elegant text-lg md:text-xl leading-relaxed text-foreground whitespace-pre-line text-center">
              {content}
            </p>
            
            <div className="mt-8 text-right">
              <p className="font-romantic text-2xl md:text-3xl text-rose">
                {signature}
              </p>
            </div>
          </div>
          
          {/* Subtle paper texture lines */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="border-b border-rose/20"
                style={{ marginTop: `${(i + 1) * 2}rem` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;
