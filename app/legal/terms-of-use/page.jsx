export const metadata = {
  title: "Terms of Use | Dite Academy",
  description:
    "Review Dite Academy’s Terms of Use to understand the rules and conditions for accessing our online and offline courses, study materials, and services.",
  alternates: { canonical: "https://www.diteacademy.com/legal/terms-of-use" },
  openGraph: {
    title: "Terms of Use | Dite Academy",
    description:
      "Read Dite Academy’s Terms of Use to understand your rights and responsibilities while using our online and offline learning services.",
    url: "https://www.diteacademy.com/legal/terms-of-use",
    siteName: "Dite Academy",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Terms of Use | Dite Academy",
    description:
      "Understand Dite Academy’s Terms of Use — applicable for both online and offline courses, tests, and programs.",
  },
};

function TermsOfUse() {
  return (
    <div className="min-h-screen max-w-4xl pt-35 mx-auto p-6 text-gray-800 leading-relaxed">
      <p className="text-3xl font-bold mb-6">Terms of Use</p>
      <p className="mb-6">
        Welcome to <strong>Dite Academy</strong> — your destination for both
        online and offline learning. By accessing or using our website,
        classrooms, study materials, or services, you agree to these Terms of
        Use. Please read them carefully before proceeding.
      </p>

      {/* Section 1 */}
      <p className="text-xl font-semibold mt-6 mb-3">1. Acceptance of Terms</p>
      <p className="mb-4">
        By enrolling in a course, creating an account, or using Dite Academy’s
        facilities, you acknowledge that you have read and agreed to these Terms
        of Use, along with our Privacy and Refund Policies.
      </p>

      {/* Section 2 */}
      <p className="text-xl font-semibold mt-6 mb-3">2. Eligibility</p>
      <p className="mb-4">
        You must be at least 13 years old to register for our programs. If you
        are under 18, you may use Dite Academy’s services only under the
        supervision of a parent or legal guardian who agrees to these terms.
      </p>

      {/* Section 3 */}
      <p className="text-xl font-semibold mt-6 mb-3">3. Account Responsibilities</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          You are responsible for maintaining the confidentiality of your login
          credentials for online learning portals.
        </li>
        <li>
          You agree to provide accurate and up-to-date information during
          registration or admission.
        </li>
        <li>
          You are solely responsible for any activity that occurs under your
          account or student ID.
        </li>
        <li>
          Report any unauthorized access immediately to{" "}
          <a href="mailto:support@diteacademy.com" className="text-blue-600 underline">
            support@diteacademy.com
          </a>.
        </li>
      </ul>

      {/* Section 4 */}
      <p className="text-xl font-semibold mt-6 mb-3">4. Payments & Refunds</p>
      <p className="mb-4">
        All course fees, whether for online or offline programs, must be paid in
        advance. Pricing is subject to change without notice. Refunds are
        governed by our{" "}
        <a
          href="https://www.diteacademy.com/legal/refund-policy"
          className="text-blue-600 underline"
        >
          Refund Policy
        </a>
        . Fee payments are non-transferable and non-shareable.
      </p>

      {/* Section 5 */}
      <p className="text-xl font-semibold mt-6 mb-3">5. Permitted Use</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          You may use our study materials and content only for personal and
          educational purposes.
        </li>
        <li>
          You are not allowed to copy, record, or share Dite Academy’s course
          content, video lectures, or classroom sessions without written
          permission.
        </li>
        <li>
          Using our name, logo, or branding for any commercial or misleading
          purpose is strictly prohibited.
        </li>
      </ul>

      {/* Section 6 */}
      <p className="text-xl font-semibold mt-6 mb-3">6. Classroom & Online Conduct</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          Students are expected to maintain discipline in both offline and
          online classes.
        </li>
        <li>
          Harassment, abusive language, or misconduct towards teachers or peers
          will lead to immediate suspension or termination.
        </li>
        <li>
          Recording or sharing any part of live or recorded sessions without
          permission is a violation of institute policy.
        </li>
      </ul>

      {/* Section 7 */}
      <p className="text-xl font-semibold mt-6 mb-3">7. Intellectual Property</p>
      <p className="mb-4">
        All materials — including notes, videos, question papers, graphics, and
        online content — are the property of Dite Academy or its partners.
        Reproduction, distribution, or sale of our content without written
        consent is strictly prohibited.
      </p>

      {/* Section 8 */}
      <p className="text-xl font-semibold mt-6 mb-3">8. Disclaimer of Warranties</p>
      <p className="mb-4">
        Dite Academy provides its services “as is.” We make no guarantees about
        achieving specific academic or career results. Course completion does
        not automatically assure placement or certification unless specified.
      </p>

      {/* Section 9 */}
      <p className="text-xl font-semibold mt-6 mb-3">9. Limitation of Liability</p>
      <p className="mb-4">
        Dite Academy is not responsible for any loss, damage, or inconvenience
        caused by network issues, technical errors, or misuse of our services.
        Our total liability shall not exceed the amount you paid for the course.
      </p>

      {/* Section 10 */}
      <p className="text-xl font-semibold mt-6 mb-3">10. Termination of Access</p>
      <p className="mb-4">
        Dite Academy reserves the right to suspend or terminate student access
        (online or offline) for violation of rules, non-payment, or unethical
        behavior.
      </p>

      {/* Section 11 */}
      <p className="text-xl font-semibold mt-6 mb-3">11. Governing Law</p>
      <p className="mb-4">
        These Terms of Use are governed by and construed under the laws of India.
        All disputes will be subject to the jurisdiction of the courts in{" "}
        <strong>New Delhi</strong>.
      </p>

      {/* Section 12 */}
      <p className="text-xl font-semibold mt-6 mb-3">12. Updates to Terms</p>
      <p className="mb-4">
        Dite Academy may revise these Terms at any time. The latest version will
        always be available on this page with an updated “Last Updated” date.
      </p>

      {/* Section 13 */}
      <p className="text-xl font-semibold mt-6 mb-3">13. Contact Us</p>
      <p className="mb-4">
        For any concerns or clarifications regarding these Terms, please contact
        us at{" "}
        <a href="mailto:support@diteacademy.com" className="text-blue-600 underline">
          support@diteacademy.com
        </a>.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        Last Updated: October 22, 2025
      </p>
    </div>
  );
}

export default TermsOfUse;
