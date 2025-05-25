import React from "react";
import { BsCloudUpload } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsPersonCheck } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";

export default function InstructorSection() {
    return (
        <>
        <div className="relative z-20">

        <section className="dark:bg-blackColor bg-whiteColor dark:text-whiteColor text-blackColor  py-20 px-4 md:px-10 Urbanist  container-sm ">
            <div className="max-w-6xl mx-auto text-center z-50">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Tech Instructor or Content Creator?
                </h2>
                <p className="greenText text-lg md:text-xl mb-6">
                    Create in Your Native Language & Start Earning
                </p>
                <button className="GreenColorBackground hover:bg-green-700 transition px-6 py-3 text-lg rounded-xl font-bold text-white  mb-12">
                    Start Teaching Today
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                    {/* Card 1 */}
                    <div className="dark:bg-darkgray  bg-whiteColor shadow p-8 rounded-2xl z-10">
                        <div className="mb-4"><BsCloudUpload className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl " /></div>
                        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">

                            Upload Tutorials & Exercises
                        </h3>
                        <p className="mb-4">Use <span className="font-semibold">internee.pk</span> to share tutorials, exercises, and projects.
                            Help others learn while you grow with <span className="font-semibold">virtual internships</span> that reward your skills.</p>
                        <a href="#" className="greenText text-md font-medium flex items-center gap-2">
                            Learn more <AiOutlineRight />
                        </a>
                    </div>





                    {/* Card 2 */}
                    <div className="dark:bg-darkgray  bg-whiteColor shadow p-8 rounded-2xl ">
                        <div className="mb-4"><BsCurrencyDollar className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl " /></div>
                        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">

                            Earn from Your Expertise
                        </h3>
                        <p className="mb-4"> <span className="font-semibold">Internee.pk</span> offers <span className="font-semibold">virtual internships in Pakistan</span> where tech creators and instructors can earn passive income by sharing their knowledge.</p>
                        <a href="#" className="greenText text-md font-medium flex items-center gap-2">
                            Learn more <AiOutlineRight />
                        </a>
                    </div>



                    {/* Card 3 */}
                    <div className="dark:bg-darkgray  bg-whiteColor shadow p-8 rounded-2xl ">
                        <div className="mb-4"><BsPersonCheck className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl " /></div>
                        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">

                            Build Your Instructor Profile
                        </h3>
                        <p className="mb-4">
                            Become a trusted voice on <span className="font-semibold">internee.pk</span>. Our <span className="font-semibold">virtual internship</span> ecosystem helps you build your personal brand in the online learning space.
                        </p>
                        <a href="#" className="greenText text-md font-medium flex items-center gap-2">
                            Learn more <AiOutlineRight />
                        </a>
                    </div>



                    {/* Card 4 */}
                    <div className="dark:bg-darkgray  bg-whiteColor shadow p-8 rounded-2xl ">
                        <div className="mb-4"><FaHandshake className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl " /></div>
                        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">

                            Fair Revenue Sharing
                        </h3>
                        <p className="mb-4">
                            We keep it transparent. Join <span className="font-semibold">internee.pk</span> and benefit from a fair model that pays you well — all while gaining experience in <span className="font-semibold">virtual internships</span>.
                        </p>
                        <a href="#" className="greenText text-md font-medium flex items-center gap-2">
                            Learn more <AiOutlineRight />
                        </a>
                    </div>


                   
                </div>
            </div>
        </section>
            <div className="absolute top-0  w-full h-1/4 dark:bg-blackColor  bg-greenColor opacity-20 " style={{clipPath: "polygon(0 0, 100% 0, 100% 40%, 0 100%)",}}></div>
        </div>
        </>
    );
}
