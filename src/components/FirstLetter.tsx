import { Heart } from "lucide-react";

const FirstLetter = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-primary text-center mb-4">
          La Primera Carta que te Escribí
        </h2>
        <p className="text-muted-foreground text-center mb-8 font-body text-lg">
          Las palabras que salieron de mi corazón...
        </p>

        <div className="relative bg-gradient-to-br from-rose-50 to-pink-100 rounded-2xl p-8 md:p-12 shadow-2xl border-2 border-primary/20">
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
    </section>
  );
};

export default FirstLetter;
