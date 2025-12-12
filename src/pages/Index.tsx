import { Heart, Sparkles } from "lucide-react";
import LilyDecoration from "@/components/LilyDecoration";
import LoveLetter from "@/components/LoveLetter";
import HeartDivider from "@/components/HeartDivider";
import lilyDecoration from "@/assets/lily-decoration.png";
import primerEncuentro from "@/assets/primer-encuentro.jpg";
import momentosFavoritos from "@/assets/momentos-favoritos.jpg";
import gatosFuturo from "@/assets/gatos-futuro.png";
import momento1 from "@/assets/momentos/momento-1.jpg";
import momento2 from "@/assets/momentos/momento-2.jpg";
import momento3 from "@/assets/momentos/momento-3.jpg";
import momento4 from "@/assets/momentos/momento-4.jpg";
import momento5 from "@/assets/momentos/momento-5.jpg";
import momento6 from "@/assets/momentos/momento-6.jpg";
import momento7 from "@/assets/momentos/momento-7.jpg";
import momento8 from "@/assets/momentos/momento-8.jpg";
import momento9 from "@/assets/momentos/momento-9.jpg";
import momento10 from "@/assets/momentos/momento-10.jpg";
import momento11 from "@/assets/momentos/momento-11.jpg";
import momento12 from "@/assets/momentos/momento-12.jpg";
import momento13 from "@/assets/momentos/momento-13.jpg";
import momento14 from "@/assets/momentos/momento-14.jpg";
import momento15 from "@/assets/momentos/momento-15.jpg";
import momento16 from "@/assets/momentos/momento-16.jpg";

const Index = () => {
  // Aquí puedes personalizar el contenido de la carta
  const letterContent = `Mi amor,

Cada día que pasa me siento el hombre más feliz del mundo teniéndote a ti a mi lado.

Este es nuestro primer mes. Sé que estamos a distancia, que queremos vernos día a día, que es difícil despertarnos y no poder vernos ni armar nuestros planes en un café. Pero aun así nos seguimos queriendo mucho, y la distancia no afecta nuestro amor tan poderoso. Espero que al leer esta carta me sientas a tu lado, como si yo te la estuviera leyendo acariciando tu pelo y dándote besitos en tu carita hermosa.

Hoy es un día especial, es nuestro primer mes. Así como desde el día uno iluminas mi vida con tu sonrisa, tu risa y tu amor infinito, quiero que sepas que te agradezco por todo lo que hiciste por mí al estar a mi lado a pesar de todo.

Nosotros sabíamos lo que queríamos desde el día uno, y eso fue algo muy lindo: saber que íbamos a estar juntos formando una linda pareja.

Tenemos claro que cuando nos veamos tú y yo no nos vamos a separar. Esos abrazos de oso, esos besos, se sentirán más fuertes que todos los que nos hemos dado, porque nos extrañamos y serán con mucha pasión.

Ansío mucho verte y sé que falta poco para que suceda, para que los dos estemos abrazados y hagamos muchas cosas juntos.

Te agradezco por amarme como soy, por aguantarme con mis cambios o los días que estoy triste. Agradezco todas las veces que piensas en mí. Ten por seguro que te cuidaré siempre, que estaré contigo pronto, y así como cumplimos nuestro primer mes, cumpliremos muchos más... muchos, muchos más, juntos y felices.

Este mesecito lo celebramos pensando no solo en el tiempo que hemos pasado, sino también en todos los momentos hermosos que aún nos esperan.

Te amo más de lo que las palabras pueden expresar.

Soy tuyo y lo seguiré siendo. Te amo con todo el corazón.`;

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
            
            {/* Planes futuros - Gatos */}
            <div className="bg-card/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md border border-rose/10 hover:border-rose/30 transition-colors duration-300">
              <img 
                src={gatosFuturo} 
                alt="Nuestros futuros gatitos" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-elegant text-lg font-semibold text-foreground mb-2">
                  Nuestros futuros gatitos 🐱
                </h3>
                <p className="text-sm text-muted-foreground">
                  Un gato negro y uno blanco
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <HeartDivider />
        
        {/* Galería de momentos */}
        <section className="text-center mb-12">
          <h2 className="font-romantic text-3xl md:text-4xl text-rose mb-6">
            Más de Nosotros
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[momento1, momento2, momento3, momento4, momento5, momento6, momento7, momento8, momento9, momento10, momento11, momento12, momento13, momento14, momento15, momento16].map((foto, index) => (
              <div 
                key={index}
                className="bg-card/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md border border-rose/10 hover:border-rose/30 hover:scale-105 transition-all duration-300"
              >
                <img 
                  src={foto} 
                  alt={`Momento ${index + 1}`} 
                  className="w-full h-40 object-cover"
                />
              </div>
            ))}
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
