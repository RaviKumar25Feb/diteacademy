"use client";
import { RiMessage2Fill } from "react-icons/ri";
import { BsSend } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { FaHome } from "react-icons/fa";

const ContactClient = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

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

      <div className="flex justify-center pt-40 pb-20">
        <div className="flex flex-col lg:flex-row w-5/6 h-min-[600px]">
          {/* Left side form */}
          <div className="flex flex-col bg-white shadow shadow-gray-400 w-full px-10 py-10">
            <div className="flex justify-center sm:justify-between items-center">
              <p className="text-4xl line-clamp-5 font-bold text-gray-800">
                Get in Touch with Dite Academy
              </p>
              <RiMessage2Fill className="text-3xl hidden sm:block" />
            </div>

            <div className="relative top-10 w-full">
              <form onSubmit={submitHandler} className="flex flex-col gap-10">
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="w-full">
                    <label htmlFor="name">
                      Name<span className="text-pink-500">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      name="name"
                      onChange={changeHandler}
                      placeholder="Enter your name"
                      className="px-2 relative w-full left-1 top-1 py-[10px] bg-gray-200 border-none rounded-ms outline-0"
                    />
                  </div>

                  <div className="w-full">
                    <label htmlFor="email">
                      Email<span className="text-pink-500">*</span>
                    </label>
                    <br />
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      name="email"
                      onChange={changeHandler}
                      placeholder="Enter your email"
                      className="px-2 relative left-1 w-full top-1 py-[10px] bg-gray-200 border-none rounded-ms outline-0"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-10">
                  <div className="w-full">
                    <label htmlFor="phone">
                      Phone Number<span className="text-pink-500">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      id="phone"
                      value={formData.phone}
                      name="phone"
                      onChange={changeHandler}
                      placeholder="Enter your phone"
                      className="px-2 relative left-1 w-full top-1 py-[10px] bg-gray-200 border-none rounded-ms outline-0"
                    />
                  </div>

                  <div className="w-full">
                    <label htmlFor="subject">
                      Subject<span className="text-pink-500">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      name="subject"
                      onChange={changeHandler}
                      placeholder="Enter your subject"
                      className="px-2 relative left-1 w-full top-1 py-[10px] bg-gray-200 border-none rounded-ms outline-0"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message">
                    Message<span className="text-pink-500">*</span>
                  </label>
                  <br />
                  <textarea
                    id="message"
                    value={formData.message}
                    name="message"
                    onChange={changeHandler}
                    placeholder="Write your message"
                    className="px-2 relative left-1 w-full top-1 py-[10px] bg-gray-200 border-none rounded-ms outline-0"
                  />
                </div>

                <div className="flex justify-center pb-5">
                  <button className="flex justify-center hover:bg-orange-500 transition-all duration-100 rounded items-center cursor-pointer gap-5 text-xl py-3 px-5 bg-gray-200 hover:text-white w-1/2">
                    <p className="font-semibold">Submit</p>
                    <BsSend className="hidden sm:block" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right side contact info */}
          <div className="flex flex-col items-center lg:items-start bg-blue-950 w-full lg:w-4/7 h-100 lg:h-full justify-between text-gray-100">
            <p className="text-2xl font-bold pt-5 pl-7">Contact Information</p>

            <div className="flex flex-col gap-4 justify-center items-center w-full">
              <RiMessage2Fill className="text-3xl" />
              <a
                href="mailto:diteacademyofficial@gmail.com"
                className="font-semibold hover:underline"
              >
                support@diteacademy.com
              </a>
            </div>

            <div className="flex pb-5 pl-7 text-2xl gap-10">
              <a href="https://www.youtube.com/@diteacademy" target="_blank">
                <FaYoutube className="cursor-pointer hover:scale-120 transition-all duration-200" />
              </a>
              <a
                href="https://www.linkedin.com/company/diteacademy"
                target="_blank"
              >
                <FaLinkedin className="cursor-pointer hover:scale-120 transition-all duration-200" />
              </a>
              <a
                href="https://www.instagram.com/diteacademy"
                target="_blank"
              >
                <FaInstagram className="cursor-pointer hover:scale-120 transition-all duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactClient;
