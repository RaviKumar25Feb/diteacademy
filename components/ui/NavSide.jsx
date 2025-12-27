"use client"
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

function NavSide({ visibleHandler, isLoggedIn }) {
  const [isShowed, setIsShowed] = useState(false);

  return (
    <div className="w-screen h-screen flex justify-end">
      <div className="w-3/4 sm:w-2/3 md:w-1/2 h-full rounded bg-gray-100 py-10">
        <ol className="w-full flex flex-col px-1">
          {/* Home */}
          <Link
            href="/"
            onClick={visibleHandler}
            className="w-full py-2 px-3 border-b-1 border-gray-300"
          >
            Home
          </Link>

          <Link
            href="/digital-marketing"
            onClick={visibleHandler}
            className="w-full py-2 px-3 border-b-1 border-gray-300"
          >
            Digital Marketing
          </Link>

          {/* Explore Dropdown */}
          <li
            onClick={() => setIsShowed(!isShowed)}
            className="flex items-center justify-between py-2 px-3 border-b-1 border-gray-300"
          >
            <p>Explore</p>
            {isShowed ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </li>

          {isShowed && (
            <div className="flex flex-col w-full border-b-1 bg-gray-200 border-gray-300">
              <Link
                href="/courses"
                onClick={visibleHandler}
                className="w-full py-2 px-5 border-b-1 border-gray-300"
              >
                Courses
              </Link>

              <Link
                href="/tutorials"
                onClick={visibleHandler}
                className="w-full py-2 px-5 border-b-1 border-gray-300"
              >
                Tutorials
              </Link>

              <Link
                href="/online-tests"
                onClick={visibleHandler}
                className="w-full py-2 px-5 border-b-1 border-gray-300"
              >
                Online Tests
              </Link>

              <Link
                href="/academic-subjects"
                onClick={visibleHandler}
                className="w-full py-2 px-5 border-b-1 border-gray-300"
              >
                Academic Subjects
              </Link>
            </div>
          )}

          {/* About & Contact */}
          <Link
            href="/about"
            onClick={visibleHandler}
            className="w-full py-2 px-3 border-b-1 border-gray-300"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            onClick={visibleHandler}
            className="w-full py-2 px-3 border-b-1 border-gray-300"
          >
            Contact Us
          </Link>

          {/* Auth Buttons */}
          <li className="w-full flex flex-col items-center gap-5 pt-10">
            {!isLoggedIn && (
              <button className="py-2 px-4 w-1/2 cursor-pointer rounded bg-orange-400 text-white flex justify-center items-center">
                Login
              </button>
            )}
            {!isLoggedIn && (
              <button className="py-2 px-3 w-1/2 cursor-pointer rounded bg-orange-400 text-white flex justify-center items-center">
                Signup
              </button>
            )}
            {isLoggedIn && (
              <button className="py-2 px-4 w-1/2 cursor-pointer rounded bg-orange-400 text-white flex justify-center items-center">
                Dashboard
              </button>
            )}
            {isLoggedIn && (
              <button className="py-2 px-4 w-1/2 cursor-pointer rounded bg-orange-400 text-white flex justify-center items-center">
                Logout
              </button>
            )}
          </li>
        </ol>
      </div>
    </div>
  );
}

export default NavSide;
