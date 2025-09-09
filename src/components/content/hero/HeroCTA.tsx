import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroCTAProps {
  button: {
    text: string;
    url: string;
    variant: "primary" | "secondary" | "outline";
  };
  className?: string;
}

export function HeroCTA({ button, className }: HeroCTAProps) {
  const { text, url, variant } = button;

  return (
    <div className="relative group">
      <Button
        asChild
        variant={
          variant === "primary"
            ? "default"
            : variant === "secondary"
              ? "secondary"
              : "outline"
        }
        size="lg"
        className={cn(
          "relative text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 transition-all duration-300 hover:scale-[1.02] font-medium tracking-wide rounded-lg",
          variant === "primary" &&
            "bg-gradient-to-r from-navy-600 via-navy-700 to-navy-600 text-white hover:from-navy-500 hover:via-navy-600 hover:to-navy-500 backdrop-blur-xl border border-navy-500/30 shadow-[0_8px_24px_rgba(0,22,112,0.3)]",
          variant === "secondary" &&
            "bg-gradient-to-r from-mustard-500/90 via-mustard-600/80 to-mustard-500/90 text-navy-900 border border-mustard-400/40 hover:from-mustard-400/95 hover:via-mustard-500/85 hover:to-mustard-400/95 backdrop-blur-xl shadow-[0_8px_24px_rgba(212,165,116,0.3)]",
          variant === "outline" &&
            "bg-transparent text-white border-2 border-mustard-400/60 hover:bg-mustard-400/10 hover:border-mustard-400/80 backdrop-blur-sm",
          className
        )}
      >
        <a href={url} className="inline-block relative z-10">
          {text}
        </a>
      </Button>

      {/* Premium Button Glow */}
      {variant === "primary" && (
        <div className="absolute -inset-1 bg-gradient-to-r from-navy-500/30 via-navy-600/40 to-navy-500/30 rounded-lg blur-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      {variant === "secondary" && (
        <div className="absolute -inset-1 bg-gradient-to-r from-mustard-400/30 via-mustard-500/40 to-mustard-400/30 rounded-lg blur-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      {variant === "outline" && (
        <div className="absolute -inset-1 bg-gradient-to-r from-mustard-400/20 via-mustard-500/30 to-mustard-400/20 rounded-lg blur-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </div>
  );
}
