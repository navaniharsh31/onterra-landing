import { ContactHero } from "@/components/content/contact/ContactHero";
import { ContactForm } from "@/components/content/contact/ContactForm";
import { ContactInfo } from "@/components/content/contact/ContactInfo";
import { getContactPageData } from "@/lib/sanity/queries";

export const metadata = {
  title: "Contact Us - Onterra Capital",
  description:
    "Get in touch with Onterra Capital for real estate investment opportunities. Contact our team to discuss your investment goals and portfolio strategy.",
};

export default async function ContactPage() {
  const { contactPage } = await getContactPageData();

  // Return null if no content from Sanity
  if (!contactPage) {
    return null;
  }

  const heroData = contactPage.hero;
  const contactDetails = contactPage.contactDetails;
  const formSettings = contactPage.formSettings;

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Page Header Section */}
      <ContactHero heroData={heroData} />

      {/* Contact Content */}
      <section className="relative py-16 sm:py-20 lg:py-32 overflow-x-hidden">
        {/* Premium Light Background with Animated Orbs */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-50">
          {/* Optional Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.12]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(71,85,105,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(71,85,105,0.3) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <ContactForm formSettings={formSettings} />

            {/* Contact Information */}
            <ContactInfo contactDetails={contactDetails} />
          </div>
        </div>
      </section>
    </div>
  );
}
