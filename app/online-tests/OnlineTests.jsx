"use client";
import { FaWhatsapp } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md"
import { FaHome } from "react-icons/fa";

export default function OnlineTests() {
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
    
      <div className="flex flex-col items-center justify-center min-h-screen pt-30 text-center bg-gradient-to-br from-blue-50 to-white">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-6">
          Online Tests
        </h1>

        <p className="text-gray-700 text-lg mb-10 max-w-xl px-4">
          Practice tests and quizzes for computer courses like Basic Computer, MS Office, Excel, DCA, ADCA, and CCC are coming soon!  
          Stay tuned for interactive mock exams designed to boost your learning.
        </p>

        <button className="px-8 py-3 text-lg font-semibold bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all duration-200">
          🚧 Coming Soon
        </button>
      </div>
    </>
  );
}
