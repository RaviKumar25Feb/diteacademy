import Link from "next/link";

export const metadata = {
  title: "Error - 404 | Dite Academy",
  description:
    "The page you are looking for doesn’t exist or may have been moved. Return to Dite Academy’s homepage to continue learning and exploring computer courses.",
  robots: {
    index: false, // ❌ Don’t let Google index the 404 page
    follow: true, // ✅ Allow following links
  },
  alternates: { canonical: "https://www.diteacademy.com/404" },

  openGraph: {
    title: "Page Not Found | Dite Academy",
    description:
      "Oops! The page you’re trying to reach is not available. Head back to Dite Academy’s homepage and continue your learning journey.",
    url: "https://www.diteacademy.com/404",
    siteName: "Dite Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Page Not Found | Dite Academy",
    description:
      "This page is unavailable. Visit Dite Academy’s homepage and explore computer, digital, and coding courses.",
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-white p-6">
      {/* 404 Text */}
      <p className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
        404
      </p>

      {/* Subtitle */}
      <p className="mt-4 text-xl md:text-2xl text-center text-gray-700">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-orange-400 to-pink-500 text-white text-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
