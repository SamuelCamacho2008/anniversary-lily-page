import { useState } from "react";
import { Heart, Mail, PenLine } from "lucide-react";

const FirstLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-primary text-center mb-4">
          La Primera Carta que te Escribí
        </h2>
        <p className="text-muted-foreground text-center mb-8 font-body text-lg">
          Las palabras que salieron de mi corazón...
        </p>

        {/* Interactive Envelope */}
        <div 
          className={`cursor-pointer transition-all duration-700 ${isOpen ? 'opacity-0 scale-95 pointer-events-none absolute inset-0' : 'opacity-100 relative'}`}
          onClick={() => setIsOpen(true)}
        >
          <div className="relative bg-gradient-to-br from-amber-100 via-orange-50 to-amber-200 rounded-xl shadow-2xl overflow-hidden border-2 border-amber-300/50 hover:shadow-3xl hover:scale-[1.02] transition-transform duration-300 max-w-md mx-auto">
            {/* Envelope flap */}
            <div className="absolute top-0 left-0 right-0 h-28 overflow-hidden">
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-36 bg-gradient-to-br from-amber-200 to-orange-100 origin-top transform rotate-0 border-b-2 border-amber-300/30"
                style={{
                  clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)',
                }}
              />
              <div className="absolute top-6 left-1/2 -translate-x-1/2">
                <PenLine className="w-8 h-8 text-amber-600 drop-shadow-lg" />
              </div>
            </div>
            
            {/* Envelope body */}
            <div className="pt-32 pb-10 px-6 text-center">
              <Mail className="w-10 h-10 text-amber-600 mx-auto mb-3 animate-pulse" />
              <p className="font-romantic text-xl md:text-2xl text-amber-800 mb-2">
                Mi primera carta
              </p>
              <p className="font-elegant text-base text-amber-700/80 mb-1">
                de muchas que te escribí
              </p>
              <p className="font-elegant text-sm text-amber-600/70 italic mb-4">
                Estas palabras nacieron del corazón de alguien que te ama con locura...
              </p>
              <div className="inline-flex items-center gap-2 bg-background/60 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-400/40 animate-pulse">
                <span className="text-sm font-elegant text-amber-700">✨ Toca para leer ✨</span>
              </div>
            </div>

            {/* Decorative wax seal */}
            <div className="absolute bottom-3 right-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg">
                <Heart className="w-5 h-5 text-white fill-white/50" />
              </div>
            </div>

            {/* Vintage stamp effect */}
            <div className="absolute top-20 right-4 w-12 h-14 border-2 border-dashed border-amber-400/50 rounded-sm flex items-center justify-center bg-amber-50/50">
              <Heart className="w-6 h-6 text-primary fill-primary/30" />
            </div>
          </div>
        </div>

        {/* Letter content - shown when envelope is open */}
        <div className={`transition-all duration-700 ${isOpen ? 'opacity-100 scale-100 relative' : 'opacity-0 scale-95 pointer-events-none absolute inset-0'}`}>
          {/* Close hint */}
          <button 
            onClick={() => setIsOpen(false)}
            className="mb-4 mx-auto flex items-center gap-2 text-primary/60 hover:text-primary transition-colors font-elegant text-sm"
          >
            <Mail className="w-4 h-4" />
            Toca para cerrar el sobre
          </button>

          <div className="relative bg-gradient-to-br from-rose-50 to-pink-100 rounded-2xl p-8 md:p-12 shadow-2xl border-2 border-primary/20 animate-fade-in-up">
            {/* Decorative elements */}
            <div className="absolute top-4 left-4">
              <Heart className="w-6 h-6 text-primary/30 fill-primary/20" />
            </div>
            <div className="absolute top-4 right-4">
              <Heart className="w-6 h-6 text-primary/30 fill-primary/20" />
            </div>
            <div className="absolute bottom-4 left-4">
              <Heart className="w-6 h-6 text-primary/30 fill-primary/20" />
            </div>
            <div className="absolute bottom-4 right-4">
              <Heart className="w-6 h-6 text-primary/30 fill-primary/20" />
            </div>

            <div className="font-body text-foreground/85 leading-relaxed space-y-6 text-base md:text-lg">
              <p>
                Te pido perdón... de verdad, perdón por no ser la persona perfecta que te da tranquilidad en todo momento. A veces siento que te fallo, que no soy suficiente, y eso me duele más de lo que imaginas. Yo sé que a veces me paso de idiota pero quiero que sepas que tengo un corazón que te ama con una fuerza que ni yo entiendo.
              </p>

              <p>
                No entiendo cómo este pechito te puede amar tanto, me encanta acompañarte a tu casita, llevarte cositas, salir contigo, tu risa, tus chistes, cuando me hablas tierno todas esas cosas lindas que tú haces conmigo me hacen sentirme cada vez más feliz llenito de amor, y es un sentimiento que nunca había sentido antes, el sentir que cuando no estás me hace falta algo para estar al 100%, sentir que cada día quiero verte, abrazarte, darte besitos.
              </p>

              <p>
                Perdón si a veces soy aburridor o empalagoso, tal vez solo necesito un abrazote tuyo pa no sentirme solo y así reacciono, tal vez no te guste y lo podría cambiar, pero no sé es mi forma de ser contigo darte cariñitos y abrazos cada ratico jajajaa
              </p>

              <p>
                Nunca he querido hacerte daño. A veces digo o hago cosas sin pensar, pero nunca con mala intención. Cuando bromeo contigo o intento hacerte reír y tú te molestas, me quedo callado, triste, pensando en qué hice mal. Me duele que a veces te enojes conmigo que me hables seco, eso me rompe por dentro, porque yo solo quiero verte bien, quiero verte feliz, quiero que estemos bien los dos.
              </p>

              <p className="text-center italic text-primary font-medium">
                Fin, solo escribí esto para decirte que te amo mucho okay?????
              </p>

              <p className="text-center font-display text-2xl text-primary mt-8">
                ❤️ Somos tuyo tú y yo ❤️
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstLetter;
