import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Us | Dite Academy",
  description:
    "Dite Academy is a leading institute for computer and digital education. We provide courses in Basic Computer, Advanced Computer, Excel, MS Office, DCA, ADCA, Graphic Designing, and Digital Marketing to help learners build strong career foundations.",
  alternates: { canonical: "https://www.diteacademy.com/about" },

  openGraph: {
    title: "About Dite Academy | Empowering Digital Learners",
    description:
      "Discover Dite Academy — your trusted computer education institute. Learn about our mission to make computer and digital education accessible for everyone through professional and academic courses.",
    url: "https://www.diteacademy.com/about",
    siteName: "Dite Academy",
    images: [
      {
        url: "https://www.diteacademy.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Dite Academy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Dite Academy | Leading Computer Education Institute",
    description:
      "Dite Academy offers professional computer courses like DCA, ADCA, Excel, MS Office, Graphic Designing, and Digital Marketing. Learn more about our vision and programs.",
    images: ["https://www.diteacademy.com/og-image.png"],
  },
};

export default function page() {
  return (
    <>
      <AboutClient />
    </>
  );
}
