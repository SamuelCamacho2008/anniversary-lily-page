import { Heart } from "lucide-react";

const HeartDivider = () => {
  return (
    <div className="flex items-center justify-center gap-4 my-12">
      <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-rose/40" />
      <Heart className="w-5 h-5 text-rose fill-rose/30" />
      <div className="h-px w-8 md:w-12 bg-rose/40" />
      <Heart className="w-4 h-4 text-rose/60 fill-rose/20" />
      <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-rose/40" />
    </div>
  );
};

export default HeartDivider;
