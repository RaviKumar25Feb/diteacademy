"use client"
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useState } from 'react';

function FrequentlyQues({question, answer}) {

    const [open, setOpen] = useState(true)

  return (
    <div className='flex flex-col items-center'>
        <div className='w-full px-3 sm:w-3/5 lg:py-2 flex flex-col'>
            <div onClick={() => setOpen(!open)} className={`flex flex-col py-3 px-4 rounded-md cursor-pointer transition-all duration-200 ${open ? "hover:bg-gray-100 gap-3" : "bg-gray-100"}`}>
                <div className='flex justify-between items-center'>
                    <p className={`${!open ? "text-orange-400" : ""} select-none text-sm md:text-base`}>{question}</p>
                    <div>
                        { 
                            open ? <FaPlus className='text-[15px]'/> : <FaMinus/>
                        }
                    </div>
                </div>
                <div className={`transition-all duration-700 ${!open ? " opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                    { !open && 
                        <p className='text-xs lg:text-sm'>{answer}</p>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default FrequentlyQues
