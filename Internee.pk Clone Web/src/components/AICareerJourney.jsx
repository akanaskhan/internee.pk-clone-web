import React from 'react';
import { MessageSquare, UserCheck, Briefcase, BarChart2, Brain } from "lucide-react";


export default function AICareerJourney() {
    return (

        <section
            className="relative text-white py-28 px-2 md:px-0 lg:px-0 bg-cover bg-center Urbanist"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80')",
            }}
        >
            <div className="absolute inset-0 dark:bg-blackColor bg-whiteColor opacity-80 z-0 "></div>
            <div className='container-sm'>
            <div className="relative z-10 max-w-2xl   ">
                <div className="flex flex-row  ">
                    <div className="flex flex-row greenText bg-green-500/10  text-lg px-4 py-1 rounded-full mb-4 backdrop-blur-sm w-fit items-center gap-1">
                        <div>
                            <Brain />
                        </div>
                        <div>

                            Your AI Career Journey

                        </div>
                    </div>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    AI Career Coach: Your Ultimate Guide to Building a Successful AI Career
                </h2>
                <p className="text-white/90 text-base md:text-lg max-w-3xl mb-10 ">
                    Looking to kickstart your career in the AI industry? Our AI Career Coach platform offers expert guidance in resume building, cover letter creation, interview preparation, quizzes, and industry insights—all designed to help you land your dream job in Artificial Intelligence.              </p>
            </div>
            </div>
        </section>
    );
};
