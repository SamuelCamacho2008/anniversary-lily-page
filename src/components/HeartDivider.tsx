import { Heart, Star, Sparkles } from "lucide-react";

const HeartDivider = () => {
  return (
    <div className="flex items-center justify-center gap-3 my-12">
      <Star className="w-3 h-3 text-gold/40 animate-sparkle" />
      <Sparkles className="w-3 h-3 text-cafe/30 animate-twinkle" style={{ animationDelay: "0.2s" }} />
      <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-cafe/40" />
      <Sparkles className="w-3 h-3 text-cafe/40 animate-twinkle" style={{ animationDelay: "0.4s" }} />
      <Heart className="w-5 h-5 text-cafe fill-cafe/30 animate-heartbeat" />
      <Sparkles className="w-3 h-3 text-cafe/40 animate-twinkle" style={{ animationDelay: "0.6s" }} />
      <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-cafe/40" />
      <Sparkles className="w-3 h-3 text-cafe/30 animate-twinkle" style={{ animationDelay: "0.8s" }} />
      <Star className="w-3 h-3 text-gold/40 animate-sparkle" style={{ animationDelay: "0.3s" }} />
    </div>
  );
};

export default HeartDivider;
