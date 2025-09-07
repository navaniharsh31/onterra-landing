import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CentralHubProps {
  className?: string;
}

export function CentralHub({ className }: CentralHubProps) {
  return (
    <motion.div
      className={cn(
        "w-56 h-28 bg-white rounded-2xl shadow-2xl",
        "flex items-center justify-center p-4",
        "border border-gray-100",
        className
      )}
      animate={{
        scale: [1, 1.02, 1],
        opacity: [0.95, 1, 0.95],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Image
        src="/logo.png"
        alt="Onterra Capital Logo"
        width={200}
        height={100}
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
}
