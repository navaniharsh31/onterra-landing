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
        "text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:scale-105 hover:shadow-lg",
        variant === "primary" && "bg-white text-black hover:bg-white/90",
        variant === "secondary" &&
          "bg-transparent text-white border-white hover:bg-white hover:text-black",
        variant === "outline" &&
          "bg-transparent text-white border-white hover:bg-white hover:text-black",
        className
      )}
    >
      <a href={url} className="inline-block">
        {text}
      </a>
    </Button>
  );
}
