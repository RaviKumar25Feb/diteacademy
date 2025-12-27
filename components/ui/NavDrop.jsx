"use client"
import Link from 'next/link'

function NavDrop() {
  return (
    <>
      <div className='w-80 rounded-xl bg-gray-100 border-gray-100 shadow-md h-auto'>

        <ul className='flex flex-col items-start gap-5 py-2'>

          {/* Courses */}
          <li className='hover:text-gray-600 text-blue-950 flex flex-col justify-center px-4 h-[80px] w-full'>
            <Link href="/courses" className='flex flex-col'>
              <h2 className='text-xl font-semibold'>Courses</h2>
              <p className='text-sm text-slate-700'>
                Learn professional computer courses at Dite Academy — from Basic to Advanced levels
              </p>
            </Link>
          </li>

          {/* Tutorials */}
          <li className='hover:text-gray-600 text-blue-950 flex flex-col justify-center px-4 h-[80px] w-full'>
            <Link href="/tutorials" className='flex flex-col'>
              <h2 className='text-xl font-semibold'>Tutorials</h2>
              <p className='text-sm text-slate-700'>
                Step-by-step tutorials from Dite Academy to master computer skills, coding, and digital tools
              </p>
            </Link>
          </li>

          {/* Online Tests */}
          <li className='hover:text-gray-600 text-blue-950 flex flex-col justify-center px-4 h-[80px] w-full'>
            <Link href="/online-tests" className='flex flex-col'>
              <h2 className='text-xl font-semibold'>Online Tests</h2>
              <p className='text-sm text-slate-700'>
                Practice with Dite Academy’s online tests — computer course quizzes and DSA practice sheets for exam and job prep
              </p>
            </Link>
          </li>

          {/*Academic Courses */}
          <li className='hover:text-gray-600 text-blue-950 flex flex-col justify-center px-4 h-[80px] w-full'>
            <Link href="/academic-subjects" className='flex flex-col'>
              <h2 className='text-xl font-semibold'>Academic Subjects</h2>
              <p className='text-sm text-slate-700'>
                Explore academic subjects related to BCA, B.Tech, and MCA — learn DBMS, OS, CN, OOPs, and more with Dite Academy
              </p>
            </Link>
          </li>

        </ul>

      </div>
    </>
  )
}

export default NavDrop
