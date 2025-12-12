import { Heart, Star } from "lucide-react";

const promises = [
  "Siempre estar a tu lado, sin importar la distancia",
  "Hacerte reír todos los días",
  "Escucharte siempre con todo mi corazón",
  "Darte abrazos de oso eternos cuando nos veamos",
  "Construir un hogar lleno de amor contigo",
  "Cuidar juntos a nuestros futuros gatitos 🐱",
  "Viajar contigo y crear mil recuerdos",
  "Amarte más cada día que pase",
];

const Promises = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="grid gap-4">
        {promises.map((promise, index) => (
          <div
            key={index}
            className="group flex items-center gap-4 bg-card/60 backdrop-blur-sm rounded-xl p-4 border border-rose/10 hover:border-rose/30 hover:bg-card/80 transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rose/20 flex items-center justify-center group-hover:bg-rose/30 transition-colors">
              <Star className="w-5 h-5 text-rose fill-rose/30 group-hover:fill-rose/50 transition-colors" />
            </div>
            <p className="font-elegant text-lg text-foreground">{promise}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 bg-rose/10 px-6 py-3 rounded-full">
          <Heart className="w-5 h-5 text-rose fill-rose/40 animate-heartbeat" />
          <span className="font-romantic text-xl text-rose">
            Y mil promesas más...
          </span>
          <Heart className="w-5 h-5 text-rose fill-rose/40 animate-heartbeat" />
        </div>
      </div>
    </div>
  );
};

export default Promises;
