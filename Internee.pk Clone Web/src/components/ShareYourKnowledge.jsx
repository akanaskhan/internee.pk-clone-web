import { FileText, Mail, Users, BarChart, DollarSign, Trophy, TrendingUp } from "lucide-react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiOutlineFileDone } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { AiFillSignal } from "react-icons/ai";

export default function ShareYourKnowledge() {
  return (
    <section className="w-full dark:bg-blackColor bg-whiteColor dark:text-whiteColor text-blackColor  py-20   container-sm">
      <div className=" px-2 md:px-0 lg:px-0  ">

        {/* Top Grid Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="dark:bg-darkgray  bg-whiteColor shadow p-6 rounded-2xl transition-transform duration-300 hover:scale-105">
            <div className=" mb-4 flex items-center gap-3">
              <AiOutlineFileDone className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl " />
              <h3 className="text-2xl font-bold mb-2">AI Resume Building</h3>
            </div>
            <p>
              Stand out in the AI job market with our professional resume-building guide. Learn how to highlight your AI skills, experience, and key accomplishments to catch the attention of top employers.
            </p>
          </div>

          <div className="dark:bg-darkgray  bg-whiteColor shadow p-8 rounded-2xl transition-transform duration-300 hover:scale-105">
            <div className=" mb-4 flex items-center gap-3">
              <BsBook className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl " />
              <h3 className="text-2xl font-bold mb-2">Cover Letter Creation</h3>
            </div>
            <p>
              Create compelling cover letters that showcase your passion for AI and demonstrate your value to employers. Make a strong first impression that speaks directly to your AI expertise.
            </p>
          </div>

          <div className="dark:bg-darkgray  bg-whiteColor shadow p-8 rounded-2xl transition-transform duration-300 hover:scale-105">
            <div className=" mb-4 flex items-center gap-3">
              <AiOutlineUsergroupAdd className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl " />
              <h3 className="text-2xl font-bold mb-2">Interview Preparation</h3>
            </div>
            <p>
              Ace your AI job interviews with confidence through practice questions, interview strategies, and tips for answering technical AI-related queries.
            </p>
          </div>

          <div className="dark:bg-darkgray  bg-whiteColor shadow p-8 rounded-2xl transition-transform duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <AiFillSignal className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl " />
              <h3 className="text-xl font-bold mb-2">Industry Insights</h3>
            </div>
            <p>
              Stay ahead of the curve with up-to-date insights on the latest AI trends, market demands, and emerging technologies in the AI industry.
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="dark:bg-darkgray  bg-green-100 shadow p-16 rounded-2xl text-center mb-20">
          <div className="flex flex-row justify-center ">
            <div className="flex flex-row greenText bg-green-500/10   md:text-lg lg:text-lg px-4 py-1 rounded-full mb-2 backdrop-blur-sm w-fit items-center gap-1">
              <div>
                <DollarSign />
              </div>
              <div>

                Monetize Your Expertise

              </div>
            </div>
          </div>
          <h3 className="text-3xl  md:text-4xl lg:text-4xl font-bold my-3">Share Your Knowledge & Earn</h3>
          <p className="max-w-2xl mx-auto">
            Are you an AI expert? Share your knowledge through courses, tutorials, or content. Build your personal brand and generate income while helping others succeed in their AI careers.
          </p>
        </div>

        {/* Bottom Grid Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Why Choose AI Career Coach?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="dark:bg-darkgray  bg-whiteColor shadow p-8 rounded-2xl text-center ">
            <div className="greenText mb-4 mx-auto flex justify-center"><Trophy size={28} /></div>
            <h3 className="text-lg font-bold mb-2">Comprehensive Guidance</h3>
            <p>Everything you need to succeed in the AI industry</p>
          </div>

          <div className="dark:bg-darkgray  bg-whiteColor shadow p-8 rounded-2xl text-center ">
            <div className="greenText mb-4 mx-auto flex justify-center"><TrendingUp size={28} /></div>
            <h3 className="text-lg font-bold mb-2">Industry-Ready Insights</h3>
            <p>Stay updated on the latest AI trends</p>
          </div>

          <div className="dark:bg-darkgray  bg-whiteColor shadow p-8 rounded-2xl text-center ">
            <div className="greenText mb-4 mx-auto flex justify-center"><DollarSign size={28} /></div>
            <h3 className="text-lg font-bold mb-2">Monetization Options</h3>
            <p>Share your AI knowledge and earn income</p>
          </div>
        </div>

      </div>
    </section>
  );
}
