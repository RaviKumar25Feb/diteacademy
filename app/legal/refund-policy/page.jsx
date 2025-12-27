export const metadata = {
  title: "Refund Policy | Dite Academy",
  description:
    "Review Dite Academy’s Refund Policy for both online and offline courses. Learn about eligibility, refund timelines, and conditions for course cancellations.",
  alternates: { canonical: "https://www.diteacademy.com/legal/refund-policy" },
  openGraph: {
    title: "Refund Policy | Dite Academy",
    description:
      "Understand Dite Academy’s refund and cancellation policy for classroom and online courses. Learn about refund eligibility and processing timelines.",
    url: "https://www.diteacademy.com/legal/refund-policy",
    siteName: "Dite Academy",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Refund Policy | Dite Academy",
    description:
      "Learn about Dite Academy’s refund and cancellation policy — applicable for both online and offline programs.",
  },
};

function RefundPolicy() {
  return (
    <div className="max-w-4xl min-h-screen pt-35 mx-auto p-6 text-gray-800 leading-relaxed">
      <p className="text-3xl font-bold mb-6">Refund & Cancellation Policy</p>
      <p className="mb-6">
        At <strong>Dite Academy</strong>, we strive to ensure every student is
        satisfied with their learning experience — whether online or offline.
        However, if you need to request a refund or cancel a course enrollment,
        please read our policy carefully.
      </p>

      {/* Section 1 */}
      <p className="text-xl font-semibold mt-6 mb-3">1. Course Refunds (Online & Offline)</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          Refunds are eligible only within <strong>7 days</strong> of
          enrollment/payment.
        </li>
        <li>
          For <strong>online courses</strong>, refunds are valid only if you have
          not accessed more than <strong>10%</strong> of the course content.
        </li>
        <li>
          For <strong>offline courses</strong>, refunds may be issued before the
          first week of batch commencement, subject to management approval.
        </li>
        <li>
          Once classes have begun or course materials have been provided, no
          refunds will be granted.
        </li>
        <li>
          Approved refunds will be processed within <strong>7–14 business days</strong> 
          to your original payment method.
        </li>
      </ul>

      {/* Section 2 */}
      <p className="text-xl font-semibold mt-6 mb-3">2. Batch or Course Cancellation</p>
      <p className="mb-4">
        If a course or batch is canceled by Dite Academy due to insufficient
        enrollments or scheduling issues, students will be offered either:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>A full refund, or</li>
        <li>Transfer to another batch or equivalent course.</li>
      </ul>

      {/* Section 3 */}
      <p className="text-xl font-semibold mt-6 mb-3">3. Digital Products & Notes</p>
      <p className="mb-4">
        No refunds will be provided for <strong>digital study materials</strong>,
        downloadable PDFs, or online practice tests once they have been accessed
        or delivered.
      </p>

      {/* Section 4 */}
      <p className="text-xl font-semibold mt-6 mb-3">4. Exceptional Circumstances</p>
      <p className="mb-4">
        In special cases (such as duplicate payments, technical errors, or
        incorrect billing), Dite Academy will review your request and may issue
        a refund at our sole discretion.
      </p>

      {/* Section 5 */}
      <p className="text-xl font-semibold mt-6 mb-3">5. How to Request a Refund</p>
      <p className="mb-4">
        To request a refund, please email us at{" "}
        <a href="mailto:support@diteacademy.com" className="text-blue-600 underline">
          support@diteacademy.com
        </a>{" "}
        with your full name, course name, payment receipt, and reason for
        refund. Our support team will respond within 2–3 working days.
      </p>

      {/* Section 6 */}
      <p className="text-xl font-semibold mt-6 mb-3">6. Policy Updates</p>
      <p className="mb-4">
        Dite Academy reserves the right to update this Refund & Cancellation
        Policy at any time without prior notice. Any changes will be reflected
        with a new “Last Updated” date on this page.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        Last Updated: October 22, 2025
      </p>
    </div>
  );
}

export default RefundPolicy;
