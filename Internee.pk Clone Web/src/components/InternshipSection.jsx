import React from "react";
import graphicDesign from "../assets/images/graphics.webp";
import chatbotDev from "../assets/images/chatbot.webp";
import aiInternship from "../assets/images/ai.jpg";
import frontend from "../assets/images/frontend.webp";
import appDev from "../assets/images/app.webp";
import backend from "../assets/images/backend.webp";
import { AiOutlineVerticalAlignTop } from "react-icons/ai";

const internships = [
  { title: "Graphic Design", image: graphicDesign },
  { title: "Chatbot Development", image: chatbotDev },
  { title: "Other Internships", image: aiInternship },
  { title: "Frontend Internship", image: frontend },
  { title: "App Development", image: appDev },
  { title: "Backend Development", image: backend },
];

export default function InternshipSection() {
  return (
    <section className="dark:bg-black dark:text-themeGray bg-gray-200 text-themeGray  px-4 md:px-0 lg:px-0  py-16 Urbanist">

    <section className="container-sm">
      <div className="text-center mb-10 font-bold p-0 m-0 flex flex-col justify-center items-center">
        <div className=" dark:bg-gray-800 dark:text-whiteColor bg-whiteColor  text-xs px-2 py-2 rounded-full mb-2 flex justify-center w-fit items-center gap-1 shadow">
          <div className="font-semibold  dark:text-blackColor  dark:bg-whiteColor bg-blackColor text-whiteColor px-2 py-1  rounded-full  ">Trending</div> 
          <div className="">Explore Internship Opportunities</div>
        </div>
        <h2 className="dark:text-whiteColor  text-3xl md:text-4xl lg:text-6xl font-normal my-5">
          Your Dream Internship is Just One <br className="hidden md:block" />
          Click Away!
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {internships.map((item, index) => (
          <div key={index} className="dark:bg-darkgray  bg-whiteColor dark:text-whiteColor text-themeGray rounded-2xl overflow-hidden shadow">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="dark:text-white text-themeGray font-bold text-lg">{item.title}</h3>
              <div className="greenText flex items-center gap-2 text-md mt-1 cursor-pointer font-semibold ">
              
                <div className="rotate-90"><AiOutlineVerticalAlignTop /></div>
                Apply Now
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
        </section>
  );
}
