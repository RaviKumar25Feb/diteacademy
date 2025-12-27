import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us | Dite Academy",
  description:
    "Have questions about our computer courses or need guidance? Contact Dite Academy today. We’re here to help you with admissions, course details, and learning support.",
  alternates: { canonical: "https://www.diteacademy.com/contact" },

  openGraph: {
    title: "Contact Dite Academy | Get in Touch with Us",
    description:
      "Reach out to Dite Academy for queries about computer courses like DCA, ADCA, Excel, MS Office, Graphic Designing, or Digital Marketing. We're here to support your learning journey.",
    url: "https://www.diteacademy.com/contact",
    siteName: "Dite Academy",
    images: [
      {
        url: "https://www.diteacademy.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dite Academy Contact Page",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Dite Academy | Get in Touch with Us",
    description:
      "Connect with Dite Academy for details on computer and digital education programs — including DCA, ADCA, Typing, Excel, and more. We’re happy to help you succeed.",
    images: ["https://www.diteacademy.com/og-image.png"],
  },
};

export default function Page() {
  return <ContactClient />;
}
