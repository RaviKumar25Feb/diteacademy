import { IoMdMail } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { MdAddIcCall } from "react-icons/md";

function Footer() {
  return (
    <div>
      <div className="bg-blue-950 flex flex-col justify-center items-center gap-12 pt-15 pb-5 px-1 md:px-3">
        {/* main footer content */}
        <div
          className="w-full flex flex-col items-center justify-evenly gap-8
          md:flex-row md:justify-evenly md:items-start md:gap-3"
        >
          {/* left side */}
          <div className="flex flex-col items-center md:items-start gap-10 md:gap-15">
            {/* name & logo */}
            <Link href="/" className="flex flex-col gap-3 justify-center">
              <div className="flex flex-col items-start gap-[2px] text-gray-100">
                  <h1 className="text-3xl font-bold">Dite Academy</h1>
                  <p className="text-xs">Digital Institute of Technical Education</p>
              </div>
            </Link>
            {/* Contact information links */}
            <ul className="flex flex-col items-center max-w-[200px] gap-2 text-sm font-semibold md:items-start text-gray-200">
              <li className="text-base">GET IN TOUCH</li>
              <li className="flex items-center gap-2 cursor-pointer transition-all duration-100">
                <IoMdMail className="mt-1 text-lg" />
                <a
                  href="mailto:diteacademyofficial@gmail.com"
                  className="hover:underline"
                >
                  diteacademyofficial@gmail.com
                </a>
              </li>
              <li className="flex flex-wrap justify-center gap-3 items-center mt-1 md:justify-start">
                <a href="https://www.youtube.com/@diteacademy" target="_blank">
                  <IoLogoYoutube className="text-[22px] cursor-pointer hover:text-red-500 transition-all duration-150" />
                </a>
                <a href="https://www.facebook.com/diteacademy" target="_blank">
                  <FaFacebookSquare className="text-[22px] cursor-pointer hover:text-blue-500 transition-all duration-150" />
                </a>
                <a href="https://www.instagram.com/diteacademy" target="_blank">
                  <FaInstagramSquare className="text-[21px] cursor-pointer hover:text-pink-600 transition-all duration-150" />
                </a>
                <a href="https://www.twitter.com/diteacademy" target="_blank">
                  <FaTwitterSquare className="text-[22px] cursor-pointer hover:text-violet-500 transition-all duration-150" />
                </a>
                <a href="https://www.linkedin.com/company/diteacademy" target="_blank">
                  <FaLinkedin className="text-[22px] cursor-pointer hover:text-blue-600 transition-all duration-150" />
                </a>
              </li>
              <li className="pt-2 flex gap-1">
                <a className="text-lg flex items-center gap-2" href="tel: +919354754227"> <MdAddIcCall /><div className="text-sm">9354754227, </div></a>
                <a className="text-lg flex items-center gap-2" href="tel: +918178401146"><div className="text-sm"> 8178401146</div></a>
              </li>
            </ul>
          </div>

          {/* quick links */}
          <ul className="flex flex-col items-center gap-2 text-xs font-semibold md:items-start text-gray-200">
            <li className="text-base sm:whitespace-nowrap">QUICK LINKS</li>
            <Link
              href="/"
              className="cursor-pointer scroll-smooth hover:underline transition-all duration-100"
            >
              Home
            </Link>
            <Link
              href="/digital-marketing"
              className="cursor-pointer hover:underline transition-all duration-100"
            >
              Digital Marketing
            </Link>
            <Link
              href="/courses"
              className="cursor-pointer hover:underline transition-all duration-100"
            >
              Courses
            </Link>
            <Link
              href="/tutorials"
              className="cursor-pointer hover:underline transition-all duration-100"
            >
              Our Free Tutorials
            </Link>
            <Link
              href="/online-tests"
              className="cursor-pointer hover:underline transition-all duration-100"
            >
              Online Tests
            </Link>
            <Link
              href="/academic-subjects"
              className="cursor-pointer hover:underline transition-all duration-100"
            >
              Academic Subjects
            </Link>
            <Link
              href="/about"
              className="cursor-pointer hover:underline transition-all duration-100"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="cursor-pointer hover:underline transition-all duration-100"
            >
              Contact Us
            </Link>
          </ul>

          {/* Our courses we provides */}
          <ul className="max-lg:hidden flex flex-col items-start gap-2 text-gray-200 text-xs font-semibold">
            <li className="text-base sm:whitespace-nowrap">COURSES WE PROVIDE</li>
            <li>MS Office</li>
            <li>Advanced Excel</li>
            <li>Tally Prime</li>
            <li>Digital Marketing</li>
            <li>Web Development</li>
            <li>CCC, ADCA, DCA</li>
            <li>Python, C/C++, Java</li>
            <li>Personality Development</li>
            <li>Spoken English</li>
            <li>Accounting</li>
            <li>E-Accounting</li>
          </ul>

          {/* legal links */}
          <ul className="flex flex-col text-center items-center gap-2 text-xs font-semibold md:items-start text-gray-200">
            <li className="text-base">LEGAL LINKS</li>
            <Link
              href="/legal/privacy-policy"
              className="cursor-pointer hover:underline transition-all duration-100"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms-of-use"
              className="cursor-pointer hover:underline transition-all duration-100"
            >
              Terms of Use
            </Link>
            <Link
              href="/legal/refund-policy"
              className="cursor-pointer hover:underline transition-all duration-100"
            >
              Refund & Cancellation Policy
            </Link>
          </ul>

        </div>

        {/* copyright text */}
        <div className="max-sm:pb-15 px-2 w-full text-gray-200 text-center flex flex-col items-center">
          © 2026 Dite Academy. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
