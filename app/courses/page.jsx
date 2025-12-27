import CoursesClient from "./CoursesClient";

export const metadata = {
  title: "Courses | Dite Academy",
  description:
    "Explore Dite Academy’s professional computer courses — from Basic & Advanced Computer, Excel, MS Office, and Typing to Coding, DCA, ADCA, CCC, Digital Marketing, and Graphic Designing. Available online and offline.",
  alternates: { canonical: "https://www.diteacademy.com/courses" },

  openGraph: {
    title: "Courses at Dite Academy | Learn Computer Skills & Coding",
    description:
      "Join Dite Academy’s online and offline computer courses — Basic Computer, Advanced Computer, Excel, MS Office, DCA, ADCA, CCC, Digital Marketing, and Coding. Learn skills for your career growth.",
    url: "https://www.diteacademy.com/courses",
    siteName: "Dite Academy",
    images: [
      {
        url: "https://www.diteacademy.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dite Academy Courses Page",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Courses | Dite Academy",
    description:
      "Learn from Dite Academy — your offline & online training center for Computer Courses, Coding, Excel, MS Office, DCA, ADCA, CCC, and Digital Marketing.",
    images: ["https://www.diteacademy.com/og-image.png"],
  },
};

export default function Page() {
  return (
    <>
      <CoursesClient />
    </>
  );
}
