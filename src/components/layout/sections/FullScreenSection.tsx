import { cn } from "@/lib/utils";

interface FullScreenSectionProps {
  children: React.ReactNode;
  className?: string;
  withHeader?: boolean;
}

export function FullScreenSection({
  children,
  className,
  withHeader = true,
}: FullScreenSectionProps) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",
        withHeader ? "min-h-screen-header" : "min-h-screen",
        className
      )}
    >
      {children}
    </section>
  );
}
