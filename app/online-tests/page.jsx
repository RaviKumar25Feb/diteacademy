import OnlineTests from "./OnlineTests";

export const metadata = {
  title: "Online Tests | Dite Academy",
  description:
    "Prepare for computer course exams with Dite Academy’s Online Test section — covering subjects like Basic Computer, MS Office, Excel, DCA, ADCA, CCC, and more with mock tests and quizzes.",
  alternates: { canonical: "https://www.diteacademy.com/online-tests" },

  openGraph: {
    title: "Online Test | Dite Academy",
    description:
      "Boost your computer knowledge with Dite Academy’s Online Test feature — practice questions from Basic to Advanced Computer, Excel, MS Office, DCA, ADCA, CCC, and more.",
    url: "https://www.diteacademy.com/online-tests",
    siteName: "Dite Academy",
    images: [
      {
        url: "https://www.diteacademy.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dite Academy Online Test",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online Test | Dite Academy",
    description:
      "Test your skills with Dite Academy’s Online Test platform — includes computer-related mock exams for CCC, DCA, ADCA, and MS Office courses. Learn, Practice, and Excel.",
    images: ["https://www.diteacademy.com/og-image.png"],
  },
};

export default function Page() {
  return (
    <>
      <OnlineTests />
    </>
  );
}
