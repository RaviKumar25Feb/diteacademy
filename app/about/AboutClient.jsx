import Link from 'next/link';
import { CheckCircle, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { FaHome } from "react-icons/fa";

const features = [
  "Free & Premium Computer Courses",
  "Structured DSA Sheets & Roadmaps",
  "Hands-on MERN & MEAN Projects",
  "Core IT & Programming Subjects Simplified",
  "Career-Oriented Learning Path",
  "Community Support (Discord/Telegram)",
];

const AboutClient = () => {
  return (
    <>
      {/* onscreen links */}
      <div className="max-sm:hidden">
        {/* whatsapp link */}
        <a href="https://wa.me/919354754227" target="_blank" className="cursor-pointer fixed z-10 bottom-30 right-5 h-[60px] w-[60px] lg:h-[80px] lg:w-[80px] flex justify-center items-center bg-green-500 rounded-full">
          <div className="lg:h-[75px] h-[55px] w-[55px] flex justify-center items-center text-3xl lg:text-5xl lg:w-[75px] border-1 border-white text-white rounded-full">
            <FaWhatsapp className="animation-all hover:scale-110 duration-150"/>
          </div>
        </a>

        <a href="tel: +919354754227" className="cursor-pointer fixed z-10 bottom-5 right-5 h-[60px] w-[60px] lg:h-[80px] lg:w-[80px] flex justify-center items-center bg-blue-500 rounded-full">
          <div className="lg:h-[75px] h-[55px] w-[55px] flex justify-center items-center text-3xl lg:text-4xl lg:w-[75px] border-1 border-white text-white lg:pr-2 lg:pt-1 rounded-full">
            <MdAddIcCall className="animation-all hover:scale-110 duration-150"/>
          </div>
        </a>
      </div>

      {/* onscreen footer */}
      <div className="sm:hidden z-10 fixed bottom-0 w-full h-[60px] bg-white shadow-sm shadow-gray-900">
        <ul className="h-full w-full flex items-center justify-evenly gap-2">
          <li className="cursor-pointer flex flex-col justify-center items-center">
            <a href='tel: +919354754227' className='flex flex-col justify-center items-center'>
              <MdAddIcCall className="text-2xl text-blue-950"/>
              <p className="text-xs">Call us</p>
            </a>
          </li>
          <li className="cursor-pointer flex flex-col justify-center items-center pb-1">
            <a href="/" className='flex flex-col justify-center items-center'>
              <FaHome className="text-4xl text-blue-950"/>
              <p className="text-sm">Home</p>
            </a>
          </li>
          <li className="cursor-pointer flex flex-col justify-center items-center">
            <a href="https://wa.me/919354754227" target="_blank" className='flex flex-col justify-center items-center'>
              <FaWhatsapp className="text-2xl text-blue-950"/>
              <p className="text-xs">WhatsApp</p>
            </a>
          </li>
        </ul>
      </div>

      <div className="pt-[120px] pb-10 px-6 md:px-16 bg-gray-50">
        {/* About Header */}
        <div className="text-center mb-15">
          <p className="py-5 text-4xl md:text-5xl font-bold text-blue-950">
            About Dite Academy
          </p>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Dite Academy is dedicated to providing practical, high-quality computer and IT education.
            Our mission is to make digital learning accessible, structured, and impactful for every student
            who aims to build a successful career in technology or communication.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center space-y-5">
          <div className="space-y-6">
            <p className="text-2xl font-semibold text-gray-800">Our Mission</p>
            <p className="text-gray-600">
              At Dite Academy, we aim to bridge the gap between education and industry by offering practical
              computer courses, full-stack development programs, English speaking training, and digital skill enhancement.
            </p>

            <p className="text-2xl font-semibold text-gray-800">Our Goal</p>
            <p className="text-gray-600">
              To empower students with in-demand skills, mentorship, and project-based learning so they can confidently
              grow in the digital era and build a successful career in IT or communication fields.
            </p>
          </div>

          <div className="flex justify-center relative">
            <Image
              src="/images/aboutImg.png"
              alt="Dite Academy illustration"
              className="w-2/3 max-w-md rounded-lg shadow"
              width={150}
              height={150}
              loading="lazy"
            />
          </div>
        </div>

        {/* Founder Section */}
        <div className="mt-24 max-w-4xl mx-auto text-center space-y-6">
          <p className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Meet the Founder
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full mb-4"></div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Hi, I'm <span className="font-bold text-gray-900">Sandeep Saini</span>, a{" "}
            <strong>Computer Trainer</strong> and <strong>English Speaker</strong>.
            I founded <span className="font-semibold text-purple-600">Dite Academy</span> in{" "}
            <strong>2021</strong> with a vision to provide practical and affordable education in{" "}
            <strong>computers, coding, and communication skills</strong> to students across India.
          </p>

          <div className="bg-white shadow-lg p-6 rounded-xl border-l-4 border-purple-500">
            <p className="italic text-gray-600">
              "My goal is to help every learner become confident in technology and communication.
              Dite Academy is built on the idea of empowering students to achieve career success
              through quality education and skill development 🚀."
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-6">
            <Link
              href="https://Instagram.com/diteacademy"
              target="_blank"
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full shadow transition"
            >
              <Instagram size={22} className="text-red-500" />
            </Link>
            <Link
              href="https://linkedin.com/company/diteacademy"
              target="_blank"
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full shadow transition"
            >
              <Linkedin size={22} className="text-blue-700" />
            </Link>
            <Link
              href="https://twitter.com/diteacademy"
              target="_blank"
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full shadow transition"
            >
              <Twitter size={22} className="text-sky-500" />
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24">
          <p className="text-3xl font-bold text-center mb-8">Why Choose Us?</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow hover:shadow-md transition"
              >
                <CheckCircle className="text-green-500" size={22} />
                <p className="text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Features */}
        <section className="w-full py-22">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#222B57] text-white rounded-full p-3 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 6v6l4 2" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Trainers</h3>
                <p className="text-gray-600">Learn from experienced computer trainers and digital marketing professionals.</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#222B57] text-white rounded-full p-3 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 17v-2a4 4 0 0 1 8 0v2" />
                    <circle cx="12" cy="7" r="4" />
                    <rect x="2" y="17" width="20" height="5" rx="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Career-Focused Curriculum</h3>
                <p className="text-gray-600">Courses designed to enhance employability and practical skill-building for real-world success.</p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#222B57] text-white rounded-full p-3 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
                <p className="text-gray-600">Choose from online or offline learning options that fit your schedule and goals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-20 mb-5 text-center">
          <p className="text-2xl font-semibold mb-4">
            Start Your Learning Journey Today 🚀
          </p>
          <p className="text-gray-600 mb-6">
            Explore computer, coding, and communication courses designed to make you job-ready and confident.
          </p>
          <Link href="/courses">
            <button className="px-6 cursor-pointer py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow hover:scale-105 transition">
              Explore Courses
            </button>
          </Link>
        </div>
      </div>

      {/* About and Map Section */}
      <section className="relative w-full py-15 bg-white">
        <div className="flex flex-col lg:flex-row justify-center gap-8 px-6 max-w-7xl mx-auto">

          {/* Google Map */}
          <div className="lg:w-[35%] w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.971382368237!2d77.27502737407531!3d28.63061978417011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3bd6098fa13%3A0x5f111c4431472261!2sDite%20Academy!5e0!3m2!1sen!2sin!4v1733154633771!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
              aria-label="Google Map showing Dite Academy"
            ></iframe>
          </div>

          {/* About Content */}
          <div className="lg:w-[60%] w-full text-black">
            <h2 className="text-3xl font-bold mb-4 text-[#222B57]">About Dite Academy</h2>
            <hr className="border-t-2 border-gray-200 mb-4" />
            <p className="text-base text-gray-700 leading-relaxed mb-8">
              Over the years, Dite Academy has emerged as one of the leading institutes in Delhi NCR,
              providing quality training in computer skills, digital marketing, and English communication.
              Whether you’re looking to start your IT journey or enhance your professional skills,
              Dite Academy offers the perfect platform for growth and success.
            </p>

            <Link
              href="/join-us"
              className="inline-block px-6 py-3 bg-[#222B57] text-white text-lg font-semibold rounded-md hover:bg-white hover:text-[#222B57] border border-[#222B57] transition duration-300"
            >
              Join Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutClient;
