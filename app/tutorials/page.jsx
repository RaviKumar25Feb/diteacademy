import TutorialsClient from "./TutorialsClient";

export const metadata = {
  title: "Free Computer & Coding Tutorials | Dite Academy",
  description:
    "Learn computer basics, MS Office, Excel, Digital Marketing, Graphic Designing, Coding, and more with Dite Academy’s free tutorials — perfect for beginners and students.",
  alternates: { canonical: "https://www.diteacademy.com/tutorials" },

  openGraph: {
    title: "Free Computer & Coding Tutorials | Dite Academy",
    description:
      "Explore Dite Academy’s step-by-step tutorials on Basic Computer, Excel, MS Office, Coding, Digital Marketing, and Graphic Designing. Start learning for free today!",
    url: "https://www.diteacademy.com/tutorials",
    siteName: "Dite Academy",
    images: [
      {
        url: "https://www.diteacademy.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dite Academy Tutorials",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Learn Computer & Coding for Free | Dite Academy",
    description:
      "Start learning computer basics, Excel, MS Office, Digital Marketing, and Coding with Dite Academy’s easy and free tutorials. Perfect for beginners and students.",
    images: ["https://www.diteacademy.com/og-image.png"],
  },
};

export default function Page() {
  return (
    <>
      <TutorialsClient />
    </>
  );
}
