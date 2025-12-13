import { useState } from "react";
import fotoPequeno from "@/assets/foto-pequeno.jpg";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const letterText = `Como la foto que está detrás de esta carta, tú notaste mis ojos. Te voy a hablar un poco de cómo esos ojitos lograron ver la gran persona que tú eres, la maravillosa mujer que vieron, de aquella persona que me enamoré. Cada vez que me dices "tus ojos son lindos", créeme que me dan ganas de llorar, no por tristeza, sino por alegría de recibir un halago tan hermoso viniendo de tus pensamientos.

Estos ojos siempre te van a ver con amor, yo diría que todo lo que siento, lo que pienso o la forma en la que estoy en el momento se refleja en mis ojos, si estoy triste van a llorar, si estoy feliz o simplemente cuando ellos reflejan tu hermosura al verte hacen que se llenen todos mis sentimientos y emociones.

Si te soy sincero tú no solo enamoraste al joven que soy ahora si no que enamoraste a ese pequeño que está en la foto, aquel que siente más que el yo de ahora, ese pequeñito tierno que siempre jugaba con sus muñecos, ese pequeñito que lloraba cuando se golpeaba o porque le daban sopa o colada jajaja, ese pequeño fue al que tú mi reina le llenaste el corazón, le enseñaste a amar y cada vez que estoy abrazándote me siento como el frágil pequeño pero me siento demasiado querido por ti, te agradezco lograr enamorar cada parte de mí.

Cuando te muestro mis fotos de pequeño es que me da mucha alegría o me gusta que me veas cuando era pequeñito, es la confianza que te tengo mi amor porque tú eres mi novia, mi querida, siempre te voy a amar y te voy a ver con aquellos ojos que solo te miran con amor, mucho amor.

"Los ojos nunca mienten, y los míos mueren de amor cada vez que te veo"`;

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">
          Mis Ojos y Mi Corazón
        </h2>
        <p className="text-muted-foreground mb-8 font-body text-lg">
          Toca la foto para descubrir lo que mis ojos ven...
        </p>

        <div 
          className="relative w-full max-w-md mx-auto cursor-pointer"
          style={{ perspective: "1000px" }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div 
            className="relative w-full transition-transform duration-700"
            style={{ 
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
            }}
          >
            {/* Front - Photo */}
            <div 
              className="w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/30"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="relative aspect-[3/4]">
                <img 
                  src={fotoPequeno} 
                  alt="El pequeño que te ama" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <span className="bg-background/90 text-primary px-4 py-2 rounded-full font-display text-lg shadow-lg">
                    ✨ Tócame ✨
                  </span>
                </div>
              </div>
            </div>

            {/* Back - Letter */}
            <div 
              className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/30 bg-gradient-to-br from-rose-50 to-pink-100"
              style={{ 
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)"
              }}
            >
              <div className="h-full overflow-y-auto p-6 md:p-8">
                <div className="font-display text-2xl text-primary mb-4 text-center">
                  💕 Para Ti, Mi Amor 💕
                </div>
                <div className="font-body text-sm md:text-base text-foreground/80 leading-relaxed whitespace-pre-line text-left">
                  {letterText}
                </div>
                <div className="mt-4 text-center">
                  <span className="text-primary/60 text-sm font-body">
                    Toca para volver a ver la foto
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hint */}
        <p className="mt-6 text-primary/60 font-body text-sm animate-pulse">
          {isFlipped ? "👆 Toca para ver la foto" : "👆 Toca la foto para leer mi carta"}
        </p>
      </div>
    </section>
  );
};

export default FlipCard;
