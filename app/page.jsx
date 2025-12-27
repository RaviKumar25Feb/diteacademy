import Hero from "../components/layout/Hero";

export const metadata = {
  title: "Dite Academy | Learn Computer Skills in Delhi",
  description:
    "Join Dite Academy to master computer skills with 100% Job Assurance — Basic Computer, Advanced Excel, MS Office, and Typing to Coding, DCA, ADCA, CCC, Digital Marketing, Graphic Designing and Web Development.",
  alternates: { canonical: "https://www.diteacademy.com" },

  openGraph: {
    title: "Dite Academy | Learn Computer Skills in Delhi",
    description:
      "Join Dite Academy to master computer skills with 100% Job Assurance — Basic Computer, Advanced Excel, MS Office, and Typing to Coding, DCA, ADCA, CCC, Digital Marketing, Graphic Designing and Web Development.",
    url: "https://www.diteacademy.com",
    siteName: "Dite Academy",
    images: [
      {
        url: "https://www.diteacademy.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dite Academy - Learn Computer Skills",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dite Academy | Learn Computer Skills in Delhi",
    description:
      "Join Dite Academy to master computer skills with 100% Job Assurance — Basic Computer, Advanced Excel, MS Office, and Typing to Coding, DCA, ADCA, CCC, Digital Marketing, Graphic Designing and Web Development.",
    images: ["https://www.diteacademy.com/og-image.png"],
  },
};

export default function HomePage() {
  return (
    <div>
      <Hero />
    </div>
  );
}
