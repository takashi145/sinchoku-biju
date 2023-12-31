import ApplicationLogo from "@/components/ApplicationLogo";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="dark:border-t dark:border-gray-700 bg-center bg-repeat bg-[url('/images/jobtracker.PNG')] h-screen bg-gray-500 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 sm:py-40">
            <h1 className="mb-8 text-5xl font-extrabold tracking-tight leading-none text-white md:text-6xl lg:text-7xl">
              <ApplicationLogo />
            </h1>
            {/* <p className="mb-10 text-lg md:text-xl font-normal text-gray-300 lg:text-2xl sm:px-16 lg:px-48">
              進捗状況を視覚化し、目標達成
            </p> */}
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <Link href="/login" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Get started
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </div>
    </div>
  )
}
