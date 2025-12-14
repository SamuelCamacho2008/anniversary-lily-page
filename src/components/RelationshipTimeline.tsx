import { Heart, Calendar, MapPin, Star } from "lucide-react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: "heart" | "calendar" | "location" | "star";
}

const defaultEvents: TimelineEvent[] = [
  {
    date: "El día que nos conocimos",
    title: "Nuestro Primer Encuentro",
    description: "El destino nos cruzó y desde ese momento todo cambió",
    icon: "star"
  },
  {
    date: "Cuando todo empezó",
    title: "Nuestra Primera Conversación",
    description: "Las palabras fluyeron como si nos conociéramos de siempre",
    icon: "calendar"
  },
  {
    date: "Un momento especial",
    title: "Nuestra Primera Cita",
    description: "Los nervios, las risas, y el comienzo de algo hermoso",
    icon: "heart"
  },
  {
    date: "El día más feliz",
    title: "Nos Hicimos Novios",
    description: "Oficialmente juntos, el inicio de nuestra historia de amor",
    icon: "heart"
  },
  {
    date: "Hoy",
    title: "Primer Mes Juntos",
    description: "Un mes de amor, risas y momentos inolvidables a pesar de la distancia",
    icon: "star"
  }
];

const iconMap = {
  heart: Heart,
  calendar: Calendar,
  location: MapPin,
  star: Star
};

interface RelationshipTimelineProps {
  events?: TimelineEvent[];
}

const RelationshipTimeline = ({ events = defaultEvents }: RelationshipTimelineProps) => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-romantic text-4xl md:text-5xl text-primary text-center mb-4">
          Nuestra Historia
        </h2>
        <p className="text-center text-muted-foreground font-elegant text-lg mb-12">
          Los momentos que nos trajeron hasta aquí
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/20 via-primary to-primary/20" />

          {/* Timeline events */}
          <div className="space-y-12">
            {events.map((event, index) => {
              const IconComponent = iconMap[event.icon];
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isLeft ? "flex-row" : "flex-row-reverse"
                  } animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${isLeft ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-primary/20 hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
                      <span className="text-sm text-primary/70 font-elegant">
                        {event.date}
                      </span>
                      <h3 className="font-romantic text-2xl text-primary mt-1 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground font-elegant">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Center icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-rose-400 rounded-full flex items-center justify-center shadow-lg animate-heartbeat">
                      <IconComponent className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="w-5/12" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer message */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 px-8 py-4 rounded-full">
            <p className="font-romantic text-2xl text-primary">
              Y esto es solo el comienzo... 💕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelationshipTimeline;
