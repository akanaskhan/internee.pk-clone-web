import React from 'react';
import { MessageSquare, UserCheck, Briefcase, BarChart2, Brain } from "lucide-react";
import { Star } from "lucide-react";
import { AiFillStar } from "react-icons/ai";

import { Carousel } from 'antd';
import boy1 from "../assets/images/boy1.webp";
import boy2 from "../assets/images/boy2.webp";
import boy3 from "../assets/images/boy3.webp";
import girl1 from "../assets/images/girl1.webp";

export default function JoinCommunity() {
    

    return (

        <section
            className=" text-white py-28 px-2 md:px-12 bg-cover bg-center Urbanist container-sm"

        >
            <div className='flex flex-col md:flex-row lg:flex-row '>
                <div className="relative z-10 min-w-40 max-w-2xl mb-5 md:mb-0 lg:mb-0 text-alignment">
                    <div className="flex flex-row  justify-center md:justify-start lg:justify-start">
                        <div className="flex flex-row  dark:bg-gray-800 dark:text-whiteColor text-blackColor bg-gray-200  text-md px-3 py-1 rounded-full mb-4  w-fit items-center gap-1">

                            <div>

                                Trusted By Thousands

                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-5xl leading-relaxed mb-4 dark:text-whiteColor text-blackColor">
                        Join a Global Community Of Learners Achieving Their Dreams
                    </h2>
                    <button className="GreenColorBackground px-8 py-3 rounded-xl text-white text-lg hover:opacity-90">
                        Join Our Community
                    </button>
                </div>
                <div className='max-w-xl'>
                    <Carousel autoplay effect="fade" >
                        <div className='p-12'>
                            
                                <div className="bg-white text-center rounded-2xl shadow-md p-8 max-w-md mx-auto relative">
                             
                                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 ">
                                    <img
                                        src={boy1} 
                                        alt="Ali Raza"
                                        className="w-24 h-24 rounded-full border-4 border-white shadow-lg z-20 object-cover"
                                    />
                                </div>
                                
                                <div className="mt-16">
                                    <h3 className="text-xl font-bold text-black">Ali Raza</h3>
                                    <p className="text-gray-500">Islamabad, Pakistan</p>
                                    <p className="text-gray-600 italic mt-4">
                                        “I built my confidence and technical skills through this platform. Highly recommended!”
                                    </p>
                                    <div className="flex justify-center mt-4 text-yellow-400 text-xl gap-1">
                                    
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-12'>
                            
                                <div className="bg-white text-center rounded-2xl shadow-md p-8 max-w-md mx-auto relative">
                             
                                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 ">
                                    <img
                                        src={boy2} 
                                        alt="Mohammad Rafiq"
                                        className="w-24 h-24 rounded-full border-4 border-white shadow-lg z-20 object-cover"
                                    />
                                </div>
                                
                                <div className="mt-16">
                                    <h3 className="text-xl font-bold text-black">Mohammad Rafiq</h3>
                                    <p className="text-gray-500">Larkana, Pakistan</p>
                                    <p className="text-gray-600 italic mt-4">
                                        “I find internee.pk to be an outstanding to get hands on experience. Sometimes you have to spend to make lot of projects.”
                                    </p>
                                    <div className="flex justify-center mt-4 text-yellow-400 text-xl gap-1">
                                    
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-12'>
                            
                                <div className="bg-white text-center rounded-2xl shadow-md p-8 max-w-md mx-auto relative">
                             
                                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 ">
                                    <img
                                        src={girl1} 
                                        alt="Ayesha Khan"
                                        className="w-24 h-24 rounded-full border-4 border-white shadow-lg z-20 object-cover"
                                    />
                                </div>
                                
                                <div className="mt-16">
                                    <h3 className="text-xl font-bold text-black">Ayesha Khan</h3>
                                    <p className="text-gray-500">Lahore, Pakistan</p>
                                    <p className="text-gray-600 italic mt-4">
                                        “Internee.pk gave me the best learning experience. Now I'm a software engineer at a top firm.”
                                    </p>
                                    <div className="flex justify-center mt-4 text-yellow-400 text-xl gap-1">
                                    
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-12'>
                            
                                <div className="bg-white text-center rounded-2xl shadow-md p-8 max-w-md mx-auto relative">
                             
                                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 ">
                                    <img
                                        src={boy3} 
                                        alt="Kashan Soomro"
                                        className="w-24 h-24 rounded-full border-4 border-white shadow-lg z-20 object-cover"
                                    />
                                </div>
                                
                                <div className="mt-16">
                                    <h3 className="text-xl font-bold text-black">Kashan Soomro</h3>
                                    <p className="text-gray-500">Islamabad, Pakistan</p>
                                    <p className="text-gray-600 italic mt-4">
                                        “Thanks to internee.pk, I grew up my skills here and now I am working as a Flutter Developer in a US company.”
                                    </p>
                                    <div className="flex justify-center mt-4 text-yellow-400 text-xl gap-1">
                                    
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </Carousel>
                </div>
            </div>
        </section>
    );
};
