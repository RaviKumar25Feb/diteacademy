"use client";
import Link from "next/link";
import NavLink from "../ui/NavLinks";
import Image from "next/image";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import NavDrop from "../ui/NavDrop";
import NavSide from "../ui/NavSide";
import { MdAddIcCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);

  function visibleHandler() {
    setIsVisible((prev) => !prev);
  }

  return (
    <>
      {/* ====== MOBILE NAVBAR ====== */}
      <div className="lg:hidden w-full fixed z-10 flex flex-col items-center justify-center">
        <nav className="flex items-center justify-between px-5 w-full lg:w-5/6 h-[70px] lg:h-[80px] bg-blue-950 shadow-blue-500 shadow-md">
          {/* Logo & Name */}
          <Link href="/" className="flex items-center gap-1">
            <Image
                src="/logo.png"
                width={250}
                height={250}
                alt="logo of dite academy"
                loading="lazy"
              />
          </Link>

          {/* Mobile Menu Icon */}
          <div>
            {isVisible ? (
              <RxCross2 onClick={visibleHandler} className="text-5xl text-white" />
            ) : (
              <IoReorderThreeOutline onClick={visibleHandler} className="text-5xl text-white" />
            )}
          </div>
        </nav>

        {/* Mobile Sidebar */}
        {isVisible && (
          <NavSide
            visibleHandler={visibleHandler}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}
      </div>

      {/* ====== DESKTOP NAVBAR ====== */}
      <div className="max-lg:hidden w-full fixed z-10 flex flex-col items-center">
        <nav className="flex flex-col justify-center w-full h-[85px] bg-blue-950 shadow-blue-500 shadow-md">
          <ul className="flex items-center justify-evenly">
            {/* Logo */}
            <li>
              <Link href="/" className="flex items-center gap-2">
                <div className="flex flex-col items-start gap-[1px]">
                  <h1 className="absolute top-2 left-[270px] font-semibold text-xs text-gray-400">ISO certified</h1>
                  <Image
                    src="/logo.png"
                    width={250}
                    height={250}
                    alt="logo of dite academy"
                    loading="lazy"
                    />
                  <p className="text-xs text-blue-300 relative -top-5 -right-[10px]">Digital Institute of Technical Education</p>
                </div>
              </Link>
            </li>

            {/* Navigation Links */}
            <li className="flex items-center justify-center gap-5 relative left-3 text-[18px] text-gray-200">
              <NavLink href="/">Home</NavLink>
              <Link href="/digital-marketing">
                <div className="flex items-center justify-center px-1 text-lg bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-sm">
                  Digital Marketing
                </div>
              </Link>
              {/* Explore Dropdown */}
              <div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                onClick={() => setOpen(false)}
                className="relative"
              >
                <div className="flex gap-1 items-center cursor-pointer">
                  <div>Explore</div>
                  {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>

                {open && (
                  <div className="absolute top-full -left-[100%] mt-0">
                    <NavDrop />
                  </div>
                )}
              </div>
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </li>

            {/* Auth Buttons */}
            <li className="flex items-center gap-7">
              {!isLoggedIn && (
                <>
                {/* contact number */}
                  <div className="flex flex-col max-h-[100%] items-start justify-center">
                    <div className="text-gray-200 flex items-center gap-2">
                      <FaLocationDot className="text-yellow-300"/>
                      <div className="text-yellow-300">Laxmi Nagar</div>
                    </div>
                    <a href="callto: 9354754227" className="text-gray-200 flex items-center gap-2">
                      <MdAddIcCall />
                      <div>9354754227</div>
                    </a>
                  </div>
                  
                  <button className="py-2 hover:bg-yellow-400 duration-150 transition-all px-4 cursor-pointer rounded bg-blue-100 flex justify-center items-center">
                    Register
                  </button>
                </>
              )}

              {isLoggedIn && (
                <>
                  <button className="py-2 px-4 cursor-pointer rounded bg-blue-100 flex justify-center items-center">
                    Dashboard
                  </button>
                  <button className="py-2 px-4 cursor-pointer rounded bg-blue-100 flex justify-center items-center">
                    Logout
                  </button>
                </>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
