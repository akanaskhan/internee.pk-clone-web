import React from "react";
import { AiFillSignal } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { BiBadgeCheck } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsBook } from "react-icons/bs";


export default function TaskPortalSection() {
  return (
    <section className="relative BlackColorBackground text-white py-20   bg-cover bg-center Urbanist "
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')`, }}
    >
      <div className="absolute inset-0 dark:bg-blackColor bg-whiteColor opacity-60 z-0"></div>

      <div className="relative z-10  container-sm px-4  text-center">
        <div className="flex flex-row justify-center ">
          <div className="flex flex-row greenText bg-green-500/10  text-lg px-4 py-1 rounded-full mb-4 backdrop-blur-sm w-fit items-center gap-1">
            <div>
              <AiFillSignal />
            </div>
            <div>

              Task Management Platform
            </div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-snug mb-4 dark:text-whiteColor text-blackColor ">
          Master Real-World Skills with Our Task Portal at <br className="hidden md:block" /> <span className="greenText">internee.pk</span>
        </h2>

        <p className="dark:text-whiteColor text-blackColor  mb-12 text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-medium ">
          Transform theoretical knowledge into practical expertise through our comprehensive task portal.
          Build, learn, and grow with industry-standard projects from our <span className="greenText">virtual internships</span> on <span className="GreentextColor">internee.pk</span>
        </p>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          {/* Card 1 */}
          <div className="dark:bg-darkgray  dark:text-whiteColor bg-whiteColor text-blackColor shadow p-8 rounded-2xl mb-6">
            <div className="mb-4"><BsBriefcase className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl " /></div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              
              Hands-on Industry Projects with internee.pk
            </h3>
            <p className="mb-4">Gain practical experience through real-world projects that simulate actual industry scenarios. Each task is carefully designed to enhance your professional portfolio through our virtual internships.</p>
            <ul className="text-sm   space-y-1 mt-2">
              <li className="flex flex-row  items-center text-base"><span className="greenText text-2xl pr-4 py-1"> <AiOutlineCheckCircle /></span>Project-based learning</li>
              <li className="flex flex-row  items-center text-base"><span className="greenText text-2xl pr-4 py-1"> <AiOutlineCheckCircle /></span>Industry-standard practices</li>
              <li className="flex flex-row  items-center text-base"><span className="greenText text-2xl pr-4 py-1"> <AiOutlineCheckCircle /></span>Portfolio building</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="dark:bg-darkgray  dark:text-whiteColor bg-whiteColor text-blackColor shadow p-8 rounded-2xl mb-6">
            <div className="mb-4"><BiBadgeCheck className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl " /></div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              
              Skill Verification System by internee.pk
            </h3>
            <p className="mb-4">Each completed task adds to your verified skills portfolio. Showcase your capabilities with confidence through our virtual internships and comprehensive tracking system.</p>
            <ul className="text-sm    space-y-1 mt-2">
              <li className="flex flex-row  items-center text-base"><span className="greenText text-2xl pr-4 py-1"> <AiOutlineCheckCircle /></span>Skill verification</li>
              <li className="flex flex-row  items-center text-base"><span className="greenText text-2xl pr-4 py-1"> <AiOutlineCheckCircle /></span>Progress tracking</li>
              <li className="flex flex-row  items-center text-base"><span className="greenText text-2xl pr-4 py-1"> <AiOutlineCheckCircle /></span>Achievement badges</li>
            </ul>
          </div>
        

          {/* Card 3 */}
          <div className="dark:bg-darkgray  dark:text-whiteColor bg-whiteColor text-blackColor shadow p-8 rounded-2xl">
            <div className="mb-4"><AiOutlineCheckCircle className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl " /></div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              
             SDLC Implementation via internee.pk
            </h3>
            <p className="mb-4">Experience the complete Software Development Life Cycle through structured tasks and milestones, part of our virtual internship offerings.</p>
           
          </div>



          {/* Card 4 */}
            <div className="dark:bg-darkgray  dark:text-whiteColor bg-whiteColor text-blackColor shadow p-8 rounded-2xl">
            <div className="mb-4"><BsBook className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl " /></div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              
              Guided Learning Path at internee.pk
            </h3>
            <p className="mb-4">Follow a structured learning path designed for both beginners and advanced learners as part of our virtual internship curriculum.</p>
           
          </div>


         
        </div>

        {/* CTA Section */}
        <div className="dark:bg-darkgray  dark:text-whiteColor bg-whiteColor text-blackColor shadow mt-12 p-12 md:px-12 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Ready to Build Your Professional Portfolio with <span className="GreentextColor">internee.pk</span>?
          </h3>
          <p className=" mb-6 text-base md:text-lg ">
            Join our <span className="GreentextColor">virtual internships</span> and get access to industry-standard tasks that <br className="hidden md:block" />
            will help you build a remarkable portfolio, only at <span className="GreentextColor">internee.pk</span>.
          </p>
          <button className="GreenColorBackground text-white px-6 py-3 rounded-xl text-sm hover:bg-green-900 transition-all">
            Start Your Journey Now
          </button>
        </div>
      </div>
    </section>
  );
}
