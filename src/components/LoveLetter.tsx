import { Heart } from "lucide-react";

interface LoveLetterProps {
  content: string;
  signature?: string;
}

const LoveLetter = ({ content, signature = "Con todo mi amor" }: LoveLetterProps) => {
  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Envelope effect */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-rose-light rounded-t-full opacity-60" />
      
      {/* Letter paper */}
      <div className="letter-paper rounded-xl p-8 md:p-12 relative overflow-hidden">
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
  );
};

export default LoveLetter;
