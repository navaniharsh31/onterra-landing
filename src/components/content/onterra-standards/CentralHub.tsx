import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CentralHubProps {
  className?: string;
  logoData?: {
    src: string;
    alt: string;
  };
}

export function CentralHub({ className, logoData }: CentralHubProps) {
  return (
    <motion.div
      className={cn(
        "w-64 h-32 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95",
        "flex items-center justify-center p-4",
        "border border-slate-700/40 rounded-xs",
        "backdrop-blur-xl shadow-[0_12px_32px_rgba(0,0,0,0.3)]",
        className
      )}
      animate={{
        scale: [1, 1.01, 1],
        opacity: [0.98, 1, 0.98],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Premium Glass Morphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/10 via-transparent to-slate-800/20 rounded-xs" />

      {/* Professional Border Treatment */}
      <div className="absolute inset-0 ring-1 ring-inset ring-slate-600/30 rounded-xs" />

      {/* Premium Corner Accents */}
      <div className="absolute -top-px -left-px w-6 h-6 bg-gradient-to-br from-navy-400/20 to-transparent rounded-tl-xs" />
      <div className="absolute -bottom-px -right-px w-6 h-6 bg-gradient-to-br from-slate-400/15 to-transparent rounded-br-xs" />

      {/* Professional Logo Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <Image
          src={logoData?.src || "/logo.png"}
          alt={logoData?.alt || "Onterra Capital Logo"}
          width={200}
          height={100}
          className="w-full h-full object-contain brightness-0 invert opacity-90"
        />
      </div>

      {/* Sophisticated Professional Glow */}
      <div className="absolute -inset-2 bg-gradient-to-br from-navy-500/8 via-slate-700/5 to-slate-600/8 rounded-xs blur-xl -z-10 opacity-70" />
    </motion.div>
  );
}
