import DigitalClient from "./DigitalClient";

export const metadata = {
  title: "Digital Marketing Course",
  description:
    "Master Digital Marketing at Dite Academy — Learn SEO, Social Media, Google Ads, Content Marketing, and Analytics. 100% Job-Assured training available online and offline.",
  alternates: { canonical: "https://www.diteacademy.com/courses/digital-marketing" },

  openGraph: {
    title: "Digital Marketing Course | Learn SEO, Google Ads & Social Media",
    description:
      "Join Dite Academy’s Digital Marketing Course — learn SEO, Social Media Marketing, Google Ads, Email Marketing, and Analytics. Start your career with 100% job assurance.",
    url: "https://www.diteacademy.com/courses/digital-marketing",
    siteName: "Dite Academy",
    images: [
      {
        url: "https://www.diteacademy.com/og-digital-marketing.png",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Course at Dite Academy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Course",
    description:
      "Learn Digital Marketing at Dite Academy — Master SEO, Google Ads, Social Media, and more with online & offline job-assured training.",
    images: ["https://www.diteacademy.com/og-digital-marketing.png"],
  },
};

export default function Page() {
  return (
    <>
      <DigitalClient />
    </>
  );
}
