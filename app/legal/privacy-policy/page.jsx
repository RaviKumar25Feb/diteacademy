export const metadata = {
  title: "Privacy Policy | Dite Academy",
  description:
    "Read Dite Academy’s Privacy Policy to understand how we collect, use, and protect your personal information while you learn at our online or offline centers.",
  alternates: { canonical: "https://www.diteacademy.com/legal/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Dite Academy",
    description:
      "Learn how Dite Academy responsibly manages and protects student data across online and offline courses.",
    url: "https://www.diteacademy.com/legal/privacy-policy",
    siteName: "Dite Academy",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Dite Academy",
    description:
      "Understand how Dite Academy collects, uses, and safeguards your data for both online and offline learning programs.",
  },
};

function PrivacyPolicy() {
  return (
    <div className="max-w-4xl min-h-screen pt-35 mx-auto p-6 text-gray-800 leading-relaxed">
      <p className="text-3xl font-bold mb-6">Privacy Policy</p>
      <p className="mb-4">Last Updated: October 22, 2025</p>

      <p className="mb-4">
        This Privacy Policy explains how <strong>Dite Academy</strong> collects,
        uses, stores, and protects your personal information when you use our
        online learning platform or visit our offline centers. By accessing or
        using Dite Academy’s services, you agree to the practices outlined in
        this Privacy Policy.
      </p>

      {/* Section 1 */}
      <p className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</p>
      <p className="mb-4">We may collect the following types of information:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Personal Information:</strong> Name, email address, phone
          number, and address provided during course enrollment (online or offline).
        </li>
        <li>
          <strong>Academic Information:</strong> Course preferences, progress,
          attendance, and certification details.
        </li>
        <li>
          <strong>Usage Data:</strong> IP address, device type, browser details,
          and platform interactions when using our website or online portal.
        </li>
        <li>
          <strong>Payment Details:</strong> Information necessary to process
          course fees (handled securely via trusted payment partners).
        </li>
        <li>
          <strong>Cookies & Tracking:</strong> Used to enhance user experience
          and personalize website content.
        </li>
      </ul>

      {/* Section 2 */}
      <p className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</p>
      <p className="mb-4">
        Your data helps us manage courses, improve learning experiences, and
        provide better support. Specifically, we use it to:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Register you for courses and manage academic records.</li>
        <li>Provide access to online learning materials and classes.</li>
        <li>Improve course quality and website functionality.</li>
        <li>Send updates about classes, workshops, or offers.</li>
        <li>Process payments and verify transactions securely.</li>
        <li>Comply with educational or legal requirements.</li>
      </ul>

      {/* Section 3 */}
      <p className="text-2xl font-semibold mt-8 mb-4">3. Sharing of Information</p>
      <p className="mb-4">
        We do not sell your personal information. Dite Academy may share limited
        data only in the following cases:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          With trusted service providers (like hosting or payment partners) who
          assist in our operations.
        </li>
        <li>To comply with laws, government, or court orders.</li>
        <li>In case of a merger, partnership, or restructuring of Dite Academy.</li>
      </ul>

      {/* Section 4 */}
      <p className="text-2xl font-semibold mt-8 mb-4">4. Data Security</p>
      <p className="mb-4">
        We implement strong security measures (encryption, firewalls, secure
        databases) to protect your personal information. However, please note
        that no data transmission over the internet or offline storage system is
        completely risk-free.
      </p>

      {/* Section 5 */}
      <p className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</p>
      <p className="mb-4">As a student or user, you have the right to:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Access the data we store about you.</li>
        <li>Request corrections or deletion of your data.</li>
        <li>Opt out of marketing messages or promotional emails.</li>
        <li>Withdraw consent for specific data processing activities.</li>
      </ul>

      {/* Section 6 */}
      <p className="text-2xl font-semibold mt-8 mb-4">6. Children’s Privacy</p>
      <p className="mb-4">
        Dite Academy offers beginner-friendly courses for students but does not
        knowingly collect personal data from individuals under 13 years of age
        without parental consent. If such data is discovered, it will be deleted
        immediately.
      </p>

      {/* Section 7 */}
      <p className="text-2xl font-semibold mt-8 mb-4">7. Third-Party Links</p>
      <p className="mb-4">
        Our website or digital materials may contain links to third-party
        websites. Dite Academy is not responsible for their privacy practices or
        content. We recommend reviewing their privacy policies before sharing
        any personal information.
      </p>

      {/* Section 8 */}
      <p className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Policy</p>
      <p className="mb-4">
        Dite Academy may update this Privacy Policy periodically. The revised
        version will include a new “Last Updated” date. Continued use of our
        services indicates your acceptance of any changes.
      </p>

      {/* Section 9 */}
      <p className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</p>
      <p className="mb-4">
        For questions or concerns regarding this Privacy Policy, please contact
        us:
      </p>
      <p className="mb-4">
        📧 <strong>Email:</strong> support@diteacademy.com
      </p>
      <p>
        🏫 <strong>Address:</strong> Dite Academy – Computer Training Institute,
        offering online and offline courses in Computer Basics, DCA, ADCA, Excel,
        Digital Marketing, and more.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
