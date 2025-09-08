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
          "relative text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 transition-all duration-300 hover:scale-[1.02] font-medium tracking-wide rounded-xs",
          variant === "primary" &&
            "bg-gradient-to-r from-white/95 via-white to-white/95 text-slate-900 hover:from-white hover:via-white hover:to-white backdrop-blur-xl border border-white/20 shadow-[0_8px_24px_rgba(255,255,255,0.2)]",
          variant === "secondary" &&
            "bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-slate-900/80 text-white border border-white/30 hover:from-slate-800/90 hover:via-slate-700/80 hover:to-slate-800/90 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.3)]",
          variant === "outline" &&
            "bg-transparent text-white border-2 border-white/60 hover:bg-white/10 hover:border-white/80 backdrop-blur-sm",
          className
        )}
      >
        <a href={url} className="inline-block relative z-10">
          {text}
        </a>
      </Button>

      {/* Premium Button Glow */}
      {variant === "primary" && (
        <div className="absolute -inset-1 bg-gradient-to-r from-white/20 via-white/30 to-white/20 rounded-xs blur-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      {variant === "secondary" && (
        <div className="absolute -inset-1 bg-gradient-to-r from-slate-700/30 via-slate-600/40 to-slate-700/30 rounded-xs blur-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </div>
  );
}
