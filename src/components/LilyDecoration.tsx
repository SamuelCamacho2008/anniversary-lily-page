import lilySingle from "@/assets/lily-single.png";

interface LilyDecorationProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}

const LilyDecoration = ({ position, className = "" }: LilyDecorationProps) => {
  const positionClasses = {
    "top-left": "top-0 left-0 -translate-x-1/4 -translate-y-1/4 rotate-45",
    "top-right": "top-0 right-0 translate-x-1/4 -translate-y-1/4 -rotate-45",
    "bottom-left": "bottom-0 left-0 -translate-x-1/4 translate-y-1/4 -rotate-12",
    "bottom-right": "bottom-0 right-0 translate-x-1/4 translate-y-1/4 rotate-12",
  };

  const animationClasses = {
    "top-left": "floating-lily",
    "top-right": "floating-lily-delay",
    "bottom-left": "floating-lily-delay-2",
    "bottom-right": "floating-lily",
  };

  return (
    <div
      className={`absolute pointer-events-none ${positionClasses[position]} ${animationClasses[position]} ${className}`}
    >
      <img
        src={lilySingle}
        alt="Lirio decorativo"
        className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain opacity-80"
      />
    </div>
  );
};

export default LilyDecoration;
