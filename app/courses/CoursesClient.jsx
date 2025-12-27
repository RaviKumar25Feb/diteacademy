"use client";
import React, { useState } from "react";
import coursesData from "../../public/assets/courses.json";
import { FaWhatsapp } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md"
import { FaHome } from "react-icons/fa";
import { Link } from "lucide-react";

const CoursesPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(coursesData[0]);

  const handleCourseSelect = (courseId) => {
    const course = coursesData.find((course) => course.id === courseId);
    setSelectedCourse(course);
  };

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
    
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-gray-800 pt-[100px]">
        {/* Sidebar: Course List */}
        <aside className="w-full md:w-1/3 bg-white shadow-md md:sticky md:top-[80px] md:h-[calc(100vh-80px)] overflow-y-auto p-6 pb-10">
          <h2 className="text-2xl font-bold mb-6">All Courses</h2>
          <div className="space-y-4">
            {coursesData.map((course) => (
              <div
                key={course.id}
                onClick={() => handleCourseSelect(course.id)}
                className={`cursor-pointer p-5 rounded-xl transition-all duration-300 border hover:shadow-md ${
                  selectedCourse?.id === course.id
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <h3 className="text-lg font-semibold">{course.name}</h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {course.description}
                </p>
              </div>
            ))}
          </div>
        </aside>

        {/* Main: Course Details */}
        <main className="w-full md:w-2/3 p-6 sm:p-10">
          {selectedCourse ? (
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300">
              <h2 className="text-3xl font-bold text-[#222B57] mb-2">{selectedCourse.name}</h2>
              <hr className="border-t border-gray-300 mb-4" />
              <p className="text-gray-700 leading-relaxed text-base">
                {selectedCourse.description}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 text-base">
                <p>
                  <strong className="text-gray-900">📅 Duration:</strong> {selectedCourse.duration}
                </p>
                <p>
                  <strong className="text-gray-900">💰 Price:</strong> {selectedCourse.price}
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="/enroll"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-base font-semibold transition duration-300 shadow-md"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          ) : (
            <div className="text-gray-500 text-lg">
              Please select a course to view its details.
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default CoursesPage;
