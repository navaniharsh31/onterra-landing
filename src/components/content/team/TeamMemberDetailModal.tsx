"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { TeamMemberDetailView } from "./TeamMemberDetailView";
import { useEffect } from "react";

interface TeamMemberDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: any | null;
  className?: string;
}

export function TeamMemberDetailModal({
  isOpen,
  onClose,
  member,
  className,
}: TeamMemberDetailModalProps) {
  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && member && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={cn(
              "fixed inset-4 sm:inset-8 lg:inset-16 xl:inset-24 z-50 ",
              className
            )}
          >
            <div className="relative w-full h-full bg-white rounded-xs shadow-2xl overflow-hidden">
              {/* Close Button */}
              <Button
                onClick={onClose}
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 text-slate-500 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
                <span className="sr-only">Close</span>
              </Button>

              {/* Content */}
              <div className="h-full overflow-y-auto p-4 sm:p-6">
                <TeamMemberDetailView member={member} />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
