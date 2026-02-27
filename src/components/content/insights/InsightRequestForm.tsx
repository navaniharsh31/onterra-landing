"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface InsightRequestFormProps {
  insightTitle: string;
  insightId: string;
  className?: string;
  formSettings?: {
    formTitle?: string;
    formDescription?: string;
    successMessage?: string;
    errorMessage?: string;
  };
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  profession: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  profession?: string;
}

export function InsightRequestForm({
  insightTitle,
  insightId,
  className,
  formSettings,
}: InsightRequestFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    profession: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (
      formData.phone &&
      !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ""))
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.profession.trim()) {
      newErrors.profession = "Profession is required";
    } else if (formData.profession.trim().length < 2) {
      newErrors.profession = "Profession must be at least 2 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/insight-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          insightTitle,
          insightId,
        }),
      });

      await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", profession: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const formTitle = formSettings?.formTitle || "Request This Report";
  const formDescription =
    formSettings?.formDescription ||
    "Fill in your details and our team will share the report with you shortly.";
  const successMessage =
    formSettings?.successMessage ||
    "Thank you! Our team will share the report with you shortly.";
  const errorMessage =
    formSettings?.errorMessage ||
    "Something went wrong. Please try again or contact us directly.";

  return (
    <motion.div
      className={cn("w-full", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="bg-white rounded-xs shadow-lg p-8 border border-gray-200/20">
        <div className="mb-8">
          <h2 className="text-2xl font-light text-slate-900 mb-2">
            {formTitle}
          </h2>
          <p className="text-slate-600">{formDescription}</p>
        </div>

        {submitStatus === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-8"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-50 mb-4">
              <CheckCircle className="h-7 w-7 text-green-600" />
            </div>
            <p className="text-slate-800 font-medium mb-2">
              Request Submitted
            </p>
            <p className="text-sm text-slate-500">{successMessage}</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div className="space-y-2">
              <Label
                htmlFor="insight-name"
                className="text-sm font-medium text-slate-700"
              >
                Name *
              </Label>
              <Input
                id="insight-name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={cn(
                  "rounded-xs",
                  errors.name && "border-red-500 focus:border-red-500"
                )}
              />
              {errors.name && (
                <p className="text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label
                htmlFor="insight-email"
                className="text-sm font-medium text-slate-700"
              >
                Email *
              </Label>
              <Input
                id="insight-email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={cn(
                  "rounded-xs",
                  errors.email && "border-red-500 focus:border-red-500"
                )}
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label
                htmlFor="insight-phone"
                className="text-sm font-medium text-slate-700"
              >
                Phone
              </Label>
              <Input
                id="insight-phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className={cn(
                  "rounded-xs",
                  errors.phone && "border-red-500 focus:border-red-500"
                )}
              />
              {errors.phone && (
                <p className="text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            {/* Profession */}
            <div className="space-y-2">
              <Label
                htmlFor="insight-profession"
                className="text-sm font-medium text-slate-700"
              >
                Profession *
              </Label>
              <Input
                id="insight-profession"
                type="text"
                placeholder="e.g. Real Estate Developer, Investor, Analyst"
                value={formData.profession}
                onChange={(e) =>
                  handleInputChange("profession", e.target.value)
                }
                className={cn(
                  "rounded-xs",
                  errors.profession && "border-red-500 focus:border-red-500"
                )}
              />
              {errors.profession && (
                <p className="text-sm text-red-600">{errors.profession}</p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xs font-medium tracking-wide transition-all duration-300 bg-navy-600 hover:bg-navy-700 text-white"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Request Report"
              )}
            </Button>

            {/* Error message */}
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-xs"
              >
                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <p className="text-sm text-red-800">{errorMessage}</p>
              </motion.div>
            )}
          </form>
        )}
      </div>
    </motion.div>
  );
}
