import { Heart, Sparkles } from "lucide-react";

interface WelcomeScreenProps {
  onEnter: () => void;
}

const WelcomeScreen = ({ onEnter }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{ background: "var(--gradient-romantic)" }}
      />
      
      {/* Floating hearts animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-rose/20 fill-rose/10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in-up">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Sparkles className="absolute -top-4 -left-8 w-6 h-6 text-gold animate-pulse" />
            <Heart className="w-24 h-24 text-rose fill-rose/30 animate-heartbeat" />
            <Sparkles className="absolute -top-4 -right-8 w-6 h-6 text-gold animate-pulse" />
          </div>
        </div>
        
        <h1 className="font-romantic text-5xl md:text-7xl lg:text-8xl text-rose mb-6">
          Para ti, mi amor
        </h1>
        
        <p className="font-elegant text-xl md:text-2xl text-muted-foreground mb-12 max-w-lg mx-auto">
          He preparado algo especial para celebrar nuestro primer mes juntos
        </p>
        
        <button
          onClick={onEnter}
          className="group relative inline-flex items-center gap-3 bg-rose hover:bg-rose/90 text-white font-elegant text-lg md:text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <Heart className="w-5 h-5 fill-white/50 group-hover:fill-white transition-all" />
          <span>Descubrir mi sorpresa</span>
          <Heart className="w-5 h-5 fill-white/50 group-hover:fill-white transition-all" />
        </button>
        
        <p className="font-elegant text-sm text-muted-foreground/60 mt-8 italic">
          Toca el botón para continuar ❤️
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
