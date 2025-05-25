import { MessageSquare, UserCheck, Briefcase, BarChart2, Brain } from "lucide-react";
import { AiOutlineRight } from "react-icons/ai";
import { FaRegCircleDot } from "react-icons/fa6";
import { AiOutlineFile } from "react-icons/ai";
export default function AIMockInterview() {
    return (
        <section className="relative text-white py-20 px-2 md:px-0 lg:px-0 bg-cover bg-center Urbanist"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80')",
            }}
            >
            <div className="absolute inset-0 dark:bg-blackColor bg-whiteColor opacity-70 z-0 "></div>

            <div className="relative max-w-7xl  container-sm">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 items-center">
                    <div className="mb-8">
                        <div className="flex flex-row greenText justify-start bg-green-500/10  text-lg px-3 py-1 rounded-full mb-4 backdrop-blur-sm w-fit items-center gap-1">
                            <div>
                                <Brain />
                            </div>
                            <div>
                                AI Mock Interviews
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-2 dark:text-whiteColor text-blackColor">AI Mock Interview <br /> Platform for Virtual <br /> Internships in Pakistan
                        </h2>
                        <p className="text-lg mt-4 max-w-xl dark:text-whiteColor text-blackColor">
                            Prepare for <span className="font-semibold">technical, marketing</span>, or <span className="font-semibold">business interviews</span> with our AI-powered mock interview system. Join <span className="font-semibold">Internee.pk’s virtual internship program</span> to get unlimited access, real-time feedback, and role-specific practice.
                        </p>
                        <button className="GreenColorBackground hover:bg-green-900 transition-all text-white px-6 py-3 rounded-xl font-semibold mt-6 flex items-center gap-2">
                            Apply Now for Virtual Internship <AiOutlineRight className="font-bold" />
                        </button>
                    </div>

                    <div className="mt-12 space-y-2">
                        <div className="dark:bg-darkgray  dark:text-whiteColor bg-whiteColor text-blackColor shadow p-6 rounded-xl flex gap-3">
                            <div><div className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl h-auto"><MessageSquare size={28} /></div></div>
                            <div>
                                <h3 className="text-xl font-bold mb-3">Realistic AI Interview Simulations</h3>
                                <p>
                                    Simulate real interview environments powered by AI. Perfect for students seeking <span className="font-semibold">online internship interview practice</span> or job readiness.
                                </p>
                            </div>
                        </div>


                        <div className="dark:bg-darkgray  dark:text-whiteColor bg-whiteColor text-blackColor shadow p-6 rounded-xl flex gap-3">
                            <div><div className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl h-auto"><UserCheck size={28} /></div></div>
                            <div>
                                <h3 className="text-xl font-bold mb-3">mart Feedback with AI</h3>
                                <p>
                                    Instantly analyze your answers, tone, and relevance. Improve every time with feedback tailored for <span className="font-semibold">virtual internship candidates</span>.
                                </p>
                            </div>
                        </div>



                        <div className="dark:bg-darkgray  dark:text-whiteColor bg-whiteColor text-blackColor shadow p-6 rounded-xl flex gap-3">
                            <div><div className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl h-auto"><Briefcase size={28} /></div></div>
                            <div>
                                <h3 className="text-xl font-bold mb-3">Role-Based Mock Interviews</h3>
                                <p>
                                    Practice interviews for <span className="font-semibold">software engineering, product management, business</span>, and <span className="font-semibold">digital marketing</span> roles in our <span className="font-semibold">internee.pk platform</span>.
                                </p>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-10 mt-12 md:mt-12 lg:mt-12 xl:mt-12">
                    <div className="dark:bg-darkgray  dark:text-whiteColor bg-whiteColor text-blackColor shadow p-6 rounded-xl">
                        <div className="greenText mb-4"><UserCheck size={28} /></div>
                        <h3 className="text-xl font-bold mb-2">Build Real Interview Confidence</h3>
                        <p>
                            Reduce anxiety and increase success rate through repeated AI-based mock interview sessions.
                        </p>
                    </div>

                    <div className="dark:bg-darkgray  dark:text-whiteColor bg-whiteColor text-blackColor shadow p-6 rounded-xl">
                        <div className="greenText mb-4"><BarChart2 size={28} /></div>
                        <h3 className="text-xl font-bold mb-2">Become Job-Ready Fast</h3>
                        <p>
                            Structured interview training that prepares you for real-world scenarios. Perfect for <span className="font-semibold">students applying for internships</span>.
                        </p>
                    </div>

                    <div className="dark:bg-darkgray  dark:text-whiteColor bg-whiteColor text-blackColor shadow p-6 rounded-xl">
                        <div className="greenText mb-4"><AiOutlineFile  rt2 size={28} /></div>
                        <h3 className="text-xl font-bold mb-2">Track Progress with Reports</h3>
                        <p>
                            Access detailed performance reports you can share with mentors and hiring managers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
