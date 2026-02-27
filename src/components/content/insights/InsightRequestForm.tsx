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
  organisation: string;
  designation: string;
  email: string;
  city: string;
}

interface FormErrors {
  name?: string;
  organisation?: string;
  designation?: string;
  email?: string;
  city?: string;
}

export function InsightRequestForm({
  insightTitle,
  insightId,
  className,
  formSettings,
}: InsightRequestFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    organisation: "",
    designation: "",
    email: "",
    city: "",
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

    if (!formData.organisation.trim()) {
      newErrors.organisation = "Organisation is required";
    }

    if (!formData.designation.trim()) {
      newErrors.designation = "Designation is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
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
        setFormData({ name: "", organisation: "", designation: "", email: "", city: "" });
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

            {/* Organisation */}
            <div className="space-y-2">
              <Label
                htmlFor="insight-organisation"
                className="text-sm font-medium text-slate-700"
              >
                Organisation *
              </Label>
              <Input
                id="insight-organisation"
                type="text"
                value={formData.organisation}
                onChange={(e) => handleInputChange("organisation", e.target.value)}
                className={cn(
                  "rounded-xs",
                  errors.organisation && "border-red-500 focus:border-red-500"
                )}
              />
              {errors.organisation && (
                <p className="text-sm text-red-600">{errors.organisation}</p>
              )}
            </div>

            {/* Designation */}
            <div className="space-y-2">
              <Label
                htmlFor="insight-designation"
                className="text-sm font-medium text-slate-700"
              >
                Designation *
              </Label>
              <Input
                id="insight-designation"
                type="text"
                value={formData.designation}
                onChange={(e) => handleInputChange("designation", e.target.value)}
                className={cn(
                  "rounded-xs",
                  errors.designation && "border-red-500 focus:border-red-500"
                )}
              />
              {errors.designation && (
                <p className="text-sm text-red-600">{errors.designation}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label
                htmlFor="insight-email"
                className="text-sm font-medium text-slate-700"
              >
                Email ID *
              </Label>
              <Input
                id="insight-email"
                type="email"
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

            {/* City */}
            <div className="space-y-2">
              <Label
                htmlFor="insight-city"
                className="text-sm font-medium text-slate-700"
              >
                City *
              </Label>
              <Input
                id="insight-city"
                type="text" 
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className={cn(
                  "rounded-xs",
                  errors.city && "border-red-500 focus:border-red-500"
                )}
              />
              {errors.city && (
                <p className="text-sm text-red-600">{errors.city}</p>
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
