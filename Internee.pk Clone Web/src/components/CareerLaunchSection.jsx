import React from "react";
import { BarChart3, FileCheck, Users, Briefcase } from "lucide-react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa6";
import { FaRegCircleDot } from "react-icons/fa6";
import { AiOutlineFileDone } from "react-icons/ai";
import { AiFillSignal } from "react-icons/ai";
import { FaRegMessage } from "react-icons/fa6";
import { BsBook } from "react-icons/bs";

export default function CareerLaunchSection() {
  return (
    <section
      className="relative text-white py-20 px-2 md:px-12 bg-cover bg-center Urbanist "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80')",
      }}
    >
      <div className="absolute inset-0 dark:bg-blackColor bg-whiteColor opacity-70 z-0 "></div>
      <div className="relative z-10 max-w-6xl mx-auto text-center container-sm">
        <div className="flex flex-row justify-center ">
          <div className="flex flex-row greenText bg-green-500/10  text-lg px-4 py-1 rounded-full mb-4 backdrop-blur-sm w-fit items-center gap-1">
            <div>
              <FaGraduationCap />
            </div>
            <div>

              Professional Development

            </div>
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-4 dark:text-whiteColor text-blackColor">
          Launch Your Career with Internee.pk
        </h2>
        <p className="dark:text-whiteColor text-blackColor text-base md:text-lg max-w-3xl mb-10 mx-auto ">
          Pakistan’s innovative platform for career growth and professional development. Join our <span className="greenText">virtual internships</span> to gain practical experience and kickstart your professional journey.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-semibold text-2xl mb-12">
          <div className="dark:bg-darkgray   bg-whiteColor text-greenColor shadow p-3 rounded-xl ">1000+<br /><span className="text-sm font-normal dark:whiteText text-blackColor">Active Internships</span></div>
          <div className="dark:bg-darkgray   bg-whiteColor text-greenColor shadow p-3 rounded-xl ">500+<br /><span className="text-sm font-normal dark:whiteText text-blackColor">Partner Companies</span></div>
          <div className="dark:bg-darkgray   bg-whiteColor text-greenColor shadow p-3 rounded-xl ">10,000+<br /><span className="text-sm font-normal dark:whiteText text-blackColor">Success Stories</span></div>
          <div className="dark:bg-darkgray   bg-whiteColor text-greenColor shadow p-3 rounded-xl ">50+<br /><span className="text-sm font-normal dark:whiteText text-blackColor">Industry Sectors</span></div>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
          <div className="dark:bg-darkgray  dark:text-whiteColor bg-whiteColor text-blackColor shadow p-8 rounded-xl">
            <div className="mb-4"><FaRegCircleDot className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl " /></div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              Targeted Learning
            </h3>
            <p className=" mb-4 text-base md:text-md lg:text-md max-w-3xl mx-auto font-medium ">
              Industry-specific <span className=" font-semibold">virtual internships</span> designed to build practical skills and experience.
            </p>
            <ul className="text-md space-y-2 ">
              <li><AiOutlineCheckCircle className="inline greenText mr-2" size={24} /> Web Development</li>
              <li><AiOutlineCheckCircle className="inline greenText mr-2" size={24} /> Digital Marketing</li>
              <li><AiOutlineCheckCircle className="inline greenText mr-2" size={24} /> UI/UX Design</li>
              <li><AiOutlineCheckCircle className="inline greenText mr-2" size={24} /> Content Writing</li>
              <li><AiOutlineCheckCircle className="inline greenText mr-2" size={24} /> Data Analytics</li>
              <li><AiOutlineCheckCircle className="inline greenText mr-2" size={24} /> Business Development</li>
            </ul>
          </div>

          <div className="dark:bg-darkgray  dark:text-whiteColor bg-whiteColor text-blackColor shadow p-8 rounded-xl">
            <div className="mb-4"><AiOutlineUsergroupAdd className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl " /></div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              Mentorship Program
            </h3>
            <p className=" mb-4 text-base md:text-md lg:text-md max-w-3xl mx-auto font-medium ">
              Learn directly from industry experts at <span className=" font-semibold">Internee.pk</span>
            </p>
            <ul className="text-md space-y-2">
              <li><AiOutlineCheckCircle className="inline greenText mr-2 " size={24} /> One-on-One Guidance</li>
              <li><AiOutlineCheckCircle className="inline greenText mr-2 " size={24} /> Weekly Sessions</li>
              <li><AiOutlineCheckCircle className="inline greenText mr-2 " size={24} /> Project Reviews</li>
              <li><AiOutlineCheckCircle className="inline greenText mr-2 " size={24} /> Career Planning</li>
              <li><AiOutlineCheckCircle className="inline greenText mr-2 " size={24} /> Industry Connect</li>
              <li><AiOutlineCheckCircle className="inline greenText mr-2 " size={24} /> Networking Events</li>
            </ul>
          </div>

          <div className="dark:bg-darkgray  dark:text-whiteColor bg-whiteColor text-blackColor shadow p-6 rounded-xl">
            <div className="mb-4"><AiOutlineUsergroupAdd className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl " /></div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              Certification Track
            </h3>
            <p className=" mb-4 text-base md:text-md lg:text-md max-w-3xl mx-auto font-medium ">
              Earn recognized certifications through <span className=" font-semibold">virtual internships</span>
            </p>
            <ul className="text-md space-y-2">
              <li><AiOutlineCheckCircle className="inline greenText mr-2" size={24} /> Skill Verification</li>
              <li><AiOutlineCheckCircle className="inline greenText mr-2" size={24} /> Project Portfolio</li>
              <li><AiOutlineCheckCircle className="inline greenText mr-2" size={24} /> Performance Badges</li>
              <li><AiOutlineCheckCircle className="inline greenText mr-2" size={24} /> Industry Recognition</li>
              <li><AiOutlineCheckCircle className="inline greenText mr-2" size={24} /> Digital Certificates</li>
              <li><AiOutlineCheckCircle className="inline greenText mr-2" size={24} /> LinkedIn Integration</li>
            </ul>
          </div>
        </div>

        {/* Progress and Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-left">
          <div className="dark:bg-darkgray  dark:text-whiteColor bg-whiteColor text-blackColor shadow p-8 rounded-xl flex flex-col gap-3">
            <h4 className="text-xl font-semibold">Your Learning Journey</h4>
            <div className="mb-2 dark:bg-lightgray dark:text-whiteColor bg-black/5 rounded p-3 font-semibold space-y-2">
              <p>Phase 1: Foundation</p>
              <div className="w-full h-2 dark:bg-gray-700 bg-gray-300 rounded-full overflow-hidden">
                <div className="GreenColorBackground h-full w-4/5 rounded-full"></div>
              </div>
            </div>
            <div className="mb-2 dark:bg-lightgray dark:text-whiteColor bg-black/5 p-3 font-semibold rounded space-y-2">
              <p>Phase 2: Practical Skills</p>
              <div className="w-full h-2 dark:bg-gray-700 bg-gray-300 rounded-full overflow-hidden">
                <div className="GreenColorBackground h-full w-2/3 rounded-full"></div>
              </div>
            </div>
            <div className="dark:bg-lightgray dark:text-whiteColor bg-black/5 p-3 font-semibold rounded space-y-2">
              <p>Phase 3: Industry Projects</p>
              <div className="w-full h-2 dark:bg-gray-700 bg-gray-300 rounded-full overflow-hidden">
                <div className="GreenColorBackground h-full w-1/2 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="dark:bg-darkgray  dark:text-whiteColor bg-whiteColor text-blackColor shadow p-8 rounded-xl">
            <h4 className="text-xl font-semibold mb-4">Career Resources</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="dark:bg-lightgray dark:text-whiteColor bg-black/5 rounded p-3  text-center flex gap-2 md:gap-3 lg:gap-3"><div className="greenText text-xl"><AiOutlineFileDone /></div><div>Resume Templates</div> </div>
              <div className="dark:bg-lightgray dark:text-whiteColor bg-black/5 rounded p-3  text-center flex gap-2 md:gap-3 lg:gap-3"><div className="greenText text-xl"><FaRegMessage /></div><div>Mock Interviews</div> </div>
              <div className="dark:bg-lightgray dark:text-whiteColor bg-black/5 rounded p-3  text-center flex gap-2 md:gap-3 lg:gap-3"><div className="greenText text-xl"><AiFillSignal /></div><div>Skill Analysis</div> </div>
              <div className="dark:bg-lightgray dark:text-whiteColor bg-black/5 rounded p-3  text-center flex gap-2 md:gap-3 lg:gap-3"><div className="greenText text-xl"><BsBook /></div><div>Learning Paths</div> </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="dark:bg-darkgray  dark:text-whiteColor bg-whiteColor text-blackColor shadow p-14 rounded-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Begin Your Professional Journey with <span className="greenText">Internee.pk</span>
          </h3>
          <p className=" mb-6 text-base md:text-lg max-w-3xl mx-auto">
            Join our <span className="greenText">virtual internships</span> program and transform your career prospects with hands-on experience and expert guidance.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="GreenColorBackground px-8 py-2 rounded-xl text-white text-lg hover:opacity-90  shadow">
              Explore Opportunities
            </button>
            <button className="LightGrayColorBackground px-8 py-2 rounded-xl text-white text-lg hover:opacity-90 shadow">
              View Programs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
