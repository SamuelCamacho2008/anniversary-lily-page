import { Heart } from "lucide-react";

const reasons = [
  "Tu sonrisa ilumina mis días más oscuros",
  "Cómo me haces reír sin parar",
  "Tu paciencia y tu amor infinito",
  "Esos ojitos que me vuelven loco",
  "Tu forma de quererme tal como soy",
  "Tus mensajes de buenos días que alegran mi mañana",
  "Tu voz que me calma cuando estoy triste",
  "Esa carita hermosa que extraño tanto",
  "Tu corazón tan grande y bondadoso",
  "Porque eres mi persona favorita en el mundo",
];

const ReasonsToLove = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="grid md:grid-cols-2 gap-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="group relative overflow-hidden bg-gradient-to-br from-rose-light/50 to-card/80 backdrop-blur-sm rounded-xl p-5 border border-rose/15 hover:border-rose/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-rose/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
            
            <div className="relative flex items-start gap-3">
              <Heart className="w-5 h-5 text-rose fill-rose/40 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <p className="font-elegant text-lg text-foreground leading-relaxed">
                {reason}
              </p>
            </div>
            
            <div className="absolute bottom-2 right-3 font-romantic text-3xl text-rose/20">
              {index + 1}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="font-romantic text-2xl text-rose">
          ...y podría seguir escribiendo por siempre ❤️
        </p>
      </div>
    </div>
  );
};

export default ReasonsToLove;
