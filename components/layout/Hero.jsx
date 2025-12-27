"use client"
import React, { useEffect, useState } from "react";
import Cards from "../sections/Cards";
import CourseCards from "../sections/CourseCards";
import StatsSection from "../sections/State";
import Testimonial from "../sections/StudentsCarousel";
import Crowser from "../sections/Crowser";
import Frequently from "../sections/Frequently";
import CourseAd from "../sections/CourseAd";
import { FaWhatsapp } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import Link from "next/link";

const Hero = () => {
  const [currentHeading, setCurrentHeading] = useState("English Speaking Courses");
  const [isVisible, setIsVisible] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    emailAddress: "",
    course: "",
  });

  const courseHeadings = [
    "English Speaking Courses",
    "Web Development Courses",
    "Data Science Courses",
    "Graphic Design Courses",
    "Digital Marketing Courses",
  ];

  // Form validation
  const isFormValid =
    formValues.firstName &&
    formValues.lastName &&
    formValues.contactNumber &&
    formValues.emailAddress &&
    formValues.course;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Cycle through course headings every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentHeading((prev) => {
          const currentIndex = courseHeadings.indexOf(prev);
          const nextIndex = (currentIndex + 1) % courseHeadings.length;
          return courseHeadings[nextIndex];
        });
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [courseHeadings]);

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
              <div className="text-xs">Call us</div>
            </a>
          </li>
          <li className="cursor-pointer flex flex-col justify-center items-center pb-1">
            <a href="/" className='flex flex-col justify-center items-center'>
              <FaHome className="text-4xl text-blue-950"/>
              <div className="text-sm">Home</div>
            </a>
          </li>
          <li className="cursor-pointer flex flex-col justify-center items-center">
            <a href="https://wa.me/919354754227" target="_blank" className='flex flex-col justify-center items-center'>
              <FaWhatsapp className="text-2xl text-blue-950"/>
              <div className="text-xs">WhatsApp</div>
            </a>
          </li>
        </ul>
      </div>

      <section
        className="relative object-fit py-[180px] bg-cover bg-center w-full min-h-[58vh] md:min-h-[50vh] sm:min-h-[50vh] lg:min-h-[90vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8)), url('./images/bg.jpg') ",
        }}
      >
        <div className="text-center px-4 md:px-8 w-full max-w-5xl">
          <h2
            style={{
              animation: isVisible
                ? "slideUp 0.5s ease-out forwards"
                : " 0.3s ease-in forwards",
            }}
            className="text-[#000F66] font-Inter font-bold text-lg sm:text-xl md:text-2xl"
          >
            {currentHeading}
          </h2>
          <h1 className="text-[#000F66] font-Akkurat font-bold text-2xl sm:text-4xl md:text-6xl lg:text-[5rem] mt-4 leading-tight">
            Shape Futures with <br /> Education
          </h1>
          <p className="text-[#000F66] font-Inter mt-6 text-sm sm:text-base px-[10%] md:px-[15%] md:text-lg lg:text-xl leading-relaxed">
            Dite Academy – Empowering careers with 3+ years of experience in skill
            development. Offering offline and online training across India. Providing
            industry-relevant courses tailored to meet professional demands. Transforming learners
            into skilled professionals for a brighter future.
          </p>
          <div className="mt-8">
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#000F66] text-white py-3 px-6 font-Inter text-sm sm:text-lg rounded-full hover:bg-[#003b99] transition duration-300"
            >
              Try Demo Class Free
            </button>
            {/* Form part starts */}
            {showForm && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-800/80 bg-opacity-50 z-50">
                <div className="bg-white w-full relative max-w-lg rounded-3xl shadow-lg p-8">
                  <h2 className="text-xl font-bold text-center mb-6">Sign Up for Demo Class</h2>

                  <form className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        ></label>
                        <input
                          placeholder=" First Name*"
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formValues.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
                          required
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        ></label>
                        <input
                          placeholder="Last Name*"
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formValues.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="contactNumber"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      ></label>
                      <input
                        placeholder="Contact Number*"
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        value={formValues.contactNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="emailAddress"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      ></label>
                      <input
                        placeholder=" Email Address*"
                        type="email"
                        id="emailAddress"
                        name="emailAddress"
                        value={formValues.emailAddress}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="course"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      ></label>
                      <textarea
                        placeholder="Which Course You Want to Learn*"
                        id="course"
                        name="course"
                        value={formValues.course}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-[150px] placeholder-black"
                        required
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className={`w-[155px] py-2 rounded-[20px] ${
                          isFormValid
                            ? "bg-[#000F66] text-white hover:bg-[#003b99]"
                            : "bg-gray-300 text-gray-600 cursor-not-allowed"
                        }`}
                        disabled={!isFormValid}
                      >
                        Submit Message
                      </button>
                    </div>
                  </form>
                  {/* Form part ends */}

                  <button
                    onClick={() => setShowForm(false)}
                    className="absolute text-3xl top-4 right-4 text-gray-500 hover:text-gray-700"
                  >
                    &times;
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <div className="transition-opacity duration-1000 ease-in-out">
        <div
          className="py-16 text-center px-4"
          style={{
            background:
              "linear-gradient(109.7deg, rgba(121, 176, 223, 0.18) -0.75%, rgba(91, 18, 133, 0.08) 123.88%)",
          }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mt-8">
            Elevate your journey with our expertly designed courses
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            Bridge the gap between where you are and where you want to be with our expert guidance
          </p>
          <Cards />
        </div>
      </div>
      <div className="py-25">
        <Crowser />
      </div>
      <StatsSection />
      <div className="py-16 text-center px-4 bg-[rgba(246,246,246,0.8)]">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mt-8">
          Prepare for exams with guidance from expert instructors
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Get expert coaching, valuable exam tips, and personalized strategies to boost your
          confidence and ensure you’re fully prepared for the exam.
        </p>
        <CourseCards />
      </div>

      <div className="min-h-[500px] w-full rounded-md">
        <div className="text-center sm:z-20 mt-10">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold">
            What are students saying!
          </h2>
          <span className="block mt-2 w-32 sm:w-52 md:w-32 mx-auto border-t-4 border-blue-500"></span>
          <Testimonial />
        </div>
      </div>

      <div>
        <Frequently />
      </div>

      <div className="pb-20 ">
        <CourseAd />
      </div>
    </>
  );
};

export default Hero;
