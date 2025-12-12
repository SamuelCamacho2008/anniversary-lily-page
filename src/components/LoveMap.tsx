import { Heart, MapPin } from "lucide-react";

const LoveMap = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative bg-gradient-to-br from-rose-light/30 via-card/60 to-lily-light/30 backdrop-blur-sm rounded-2xl p-8 border border-rose/20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-4 left-4 w-32 h-32 bg-rose/10 rounded-full blur-2xl" />
        <div className="absolute bottom-4 right-4 w-40 h-40 bg-lily-light/30 rounded-full blur-2xl" />
        
        <div className="relative z-10">
          {/* Map visual representation */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Your location */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-20 h-20 rounded-full bg-rose/20 flex items-center justify-center border-2 border-rose/40 animate-pulse">
                  <MapPin className="w-8 h-8 text-rose" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-card flex items-center justify-center border border-rose/30">
                  <span className="text-lg">👨</span>
                </div>
              </div>
              <p className="mt-3 font-elegant text-lg font-semibold text-foreground">Yo</p>
              <p className="text-sm text-muted-foreground">Mi ubicación</p>
            </div>

            {/* Connection line with heart */}
            <div className="hidden md:flex items-center gap-2">
              <div className="w-16 h-0.5 bg-gradient-to-r from-rose/60 to-rose/30" />
              <Heart className="w-8 h-8 text-rose fill-rose/50 animate-heartbeat" />
              <div className="w-16 h-0.5 bg-gradient-to-r from-rose/30 to-rose/60" />
            </div>
            
            {/* Mobile heart */}
            <div className="md:hidden">
              <Heart className="w-10 h-10 text-rose fill-rose/50 animate-heartbeat" />
            </div>

            {/* Their location */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-20 h-20 rounded-full bg-rose/20 flex items-center justify-center border-2 border-rose/40 animate-pulse">
                  <MapPin className="w-8 h-8 text-rose" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-card flex items-center justify-center border border-rose/30">
                  <span className="text-lg">👩</span>
                </div>
              </div>
              <p className="mt-3 font-elegant text-lg font-semibold text-foreground">Tú</p>
              <p className="text-sm text-muted-foreground">Tu ubicación</p>
            </div>
          </div>

          {/* Message */}
          <div className="mt-10 text-center">
            <div className="inline-block bg-card/80 backdrop-blur-sm rounded-xl px-8 py-5 border border-rose/20 shadow-md">
              <p className="font-romantic text-2xl md:text-3xl text-rose mb-2">
                La distancia es solo temporal
              </p>
              <p className="font-elegant text-muted-foreground">
                Nuestro amor cruza cualquier kilómetro que nos separe 💕
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="text-center bg-card/50 rounded-xl p-4 border border-rose/10">
              <p className="font-romantic text-3xl text-rose">∞</p>
              <p className="text-sm text-muted-foreground font-elegant">Amor sin límites</p>
            </div>
            <div className="text-center bg-card/50 rounded-xl p-4 border border-rose/10">
              <p className="font-romantic text-3xl text-rose">24/7</p>
              <p className="text-sm text-muted-foreground font-elegant">Pensando en ti</p>
            </div>
            <div className="col-span-2 md:col-span-1 text-center bg-card/50 rounded-xl p-4 border border-rose/10">
              <p className="font-romantic text-3xl text-rose">Pronto</p>
              <p className="text-sm text-muted-foreground font-elegant">Nos veremos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveMap;
