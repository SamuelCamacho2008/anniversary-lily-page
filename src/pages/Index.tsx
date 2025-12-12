import { Heart, Sparkles } from "lucide-react";
import LilyDecoration from "@/components/LilyDecoration";
import LoveLetter from "@/components/LoveLetter";
import HeartDivider from "@/components/HeartDivider";
import lilyDecoration from "@/assets/lily-decoration.png";
import primerEncuentro from "@/assets/primer-encuentro.jpg";
import momentosFavoritos from "@/assets/momentos-favoritos.jpg";

const Index = () => {
  // Aquí puedes personalizar el contenido de la carta
  const letterContent = `Mi amor,

Cada día a tu lado es un regalo que atesoro con todo mi corazón.
Tú iluminas mi vida con tu sonrisa, tu risa y tu amor infinito.

Gracias por cada momento compartido, por cada abrazo,
por cada palabra de aliento y por ser mi compañera perfecta.

Este aniversario celebramos no solo el tiempo que hemos pasado juntos,
sino también todos los hermosos momentos que aún nos esperan.

Te amo más de lo que las palabras pueden expresar.`;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{ background: "var(--gradient-romantic)" }}
      />
      
      {/* Floating lily decorations */}
      <LilyDecoration position="top-left" />
      <LilyDecoration position="top-right" />
      <LilyDecoration position="bottom-left" className="hidden md:block" />
      <LilyDecoration position="bottom-right" className="hidden md:block" />
      
      {/* Main content */}
      <main className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Hero section */}
        <section className="text-center mb-16 animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Sparkles className="absolute -top-2 -left-6 w-5 h-5 text-gold animate-pulse" />
              <Heart className="w-16 h-16 text-rose fill-rose/30 animate-heartbeat" />
              <Sparkles className="absolute -top-2 -right-6 w-5 h-5 text-gold animate-pulse" />
            </div>
          </div>
          
          <h1 className="font-romantic text-5xl md:text-7xl lg:text-8xl text-rose mb-4">
            Primer mes juntos
          </h1>
          
          <p className="font-elegant text-xl md:text-2xl text-muted-foreground italic">
            Un día especial para celebrar nuestro amor
          </p>
        </section>
        
        {/* Lily image decoration */}
        <div className="flex justify-center mb-12 animate-fade-in-up-delay">
          <img 
            src={lilyDecoration} 
            alt="Hermosos lirios blancos" 
            className="w-64 md:w-80 lg:w-96 h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>
        
        <HeartDivider />
        
        {/* Letter section */}
        <section className="mb-16 animate-fade-in-up-delay-2">
          <h2 className="font-romantic text-3xl md:text-4xl text-center text-rose mb-8">
            Para ti, mi amor
          </h2>
          
          <LoveLetter 
            content={letterContent}
            signature="Con todo mi amor ❤️"
          />
        </section>
        
        <HeartDivider />
        
        {/* Details section - placeholder for more content */}
        <section className="text-center mb-12">
          <h2 className="font-romantic text-3xl md:text-4xl text-rose mb-6">
            Nuestros Momentos
          </h2>
          
          <p className="font-elegant text-lg text-muted-foreground max-w-xl mx-auto">
            Aquí puedes agregar más detalles especiales, fotos de recuerdos,
            fechas importantes o cualquier otro contenido que quieras compartir.
          </p>
          
          {/* Photo cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
            {/* Primer encuentro */}
            <div className="bg-card/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md border border-rose/10 hover:border-rose/30 transition-colors duration-300">
              <img 
                src={primerEncuentro} 
                alt="Nuestro primer encuentro" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-elegant text-lg font-semibold text-foreground mb-2">
                  Nuestro primer encuentro
                </h3>
              </div>
            </div>
            
            {/* Momentos favoritos */}
            <div className="bg-card/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md border border-rose/10 hover:border-rose/30 transition-colors duration-300">
              <img 
                src={momentosFavoritos} 
                alt="Momentos favoritos" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-elegant text-lg font-semibold text-foreground mb-2">
                  Momentos favoritos
                </h3>
              </div>
            </div>
            
            {/* Planes futuros */}
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-rose/10 hover:border-rose/30 transition-colors duration-300">
              <Heart className="w-8 h-8 text-rose/40 mx-auto mb-4" />
              <h3 className="font-elegant text-lg font-semibold text-foreground mb-2">
                Planes futuros
              </h3>
              <p className="text-sm text-muted-foreground">
                Próximamente...
              </p>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="text-center pt-8 pb-4">
          <p className="font-romantic text-2xl text-rose/60">
            Te amo infinitamente
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
