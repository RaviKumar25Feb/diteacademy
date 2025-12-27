"use client";

import Link from "next/link";
import Image from "next/image";

function CourseAd() {
  return (
    <div className="w-full flex flex-col items-center lg:justify-center mt-25 mb-15">
      <div className="relative w-11/12 max-b:w-full max-lg:gap-5 flex flex-col lg:flex-row lg:items-center py-5 lg:py-13 justify-between px-4 lg:px-10 bg-gray-950 rounded-xl">
        {/* Left Section - Course Stats */}
        <div className="flex flex-col gap-7">
          <p className="text-gray-100 text-xl sm:text-4xl font-bold">
            Learn anything you want with{" "}
            <span className="text-orange-400">5000+</span> learners at{" "}
            <br/>
            <span className="text-orange-400">Dite Academy</span>
          </p>

          <div className="w-full flex py-2 justify-around gap-2">
            {/* Course Count */}
            <div className="text-gray-100 w-1/3 bg-gray-950 shadow-sm shadow-gray-700 px-2 py-2 rounded-sm text-center">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold">15+</p>
              <p className="text-xs sm:text-sm font-medium">
                Job-Oriented Courses
              </p>
            </div>

            {/* DSA Problems */}
            <div className="text-gray-100 w-1/3 bg-gray-950 shadow-sm shadow-gray-700 px-2 py-2 rounded-sm text-center">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold">5+</p>
              <p className="text-xs sm:text-sm font-medium">
                Trainers
              </p>
            </div>

            {/* Video Tutorials */}
            <div className="text-gray-100 w-1/3 bg-gray-950 shadow-sm shadow-gray-700 px-2 py-2 rounded-sm text-center">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold">150+</p>
              <p className="text-xs sm:text-sm font-medium">
                Free Video Lectures
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Link href="/courses" className="max-lg:w-full">
          <button className="w-full px-3 py-3 lg:mx-5 lg:ml-3 rounded-sm bg-orange-400 text-white hover:bg-orange-500 transition-all duration-200">
            Get Started for Free
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CourseAd;
