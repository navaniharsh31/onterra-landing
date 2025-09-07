import { cn } from "@/lib/utils";

interface FullScreenSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function FullScreenSection({
  children,
  className,
}: FullScreenSectionProps) {
  return (
    <section
      className={cn("relative w-full h-screen overflow-hidden", className)}
    >
      {children}
    </section>
  );
}
