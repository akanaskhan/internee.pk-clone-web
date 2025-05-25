import React from 'react';

const InternshipProcess = () => {
    return (

        <div className='container-sm'>
            <div className="flex flex-col lg:flex-row py-28 px-2 px md:px-0 lg:px-0 items-center  Urbanist whiteText">
                <div className='max-w-3xl'>
                    <div className="  justify-start dark:bg-lightgray dark:text-blackColor bg-white text-blackColor shadow  text-sm px-3 py-1 rounded-full mb-4  w-fit items-center gap-1">
                        How It Works
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6  dark:text-whiteColor text-blackColor leading-relaxed ">
                        A Simple and Seamless Process to Start Your Internship Journey
                    </h1>
                </div>

                <div className=" flex flex-row gap-3 ">
                    <div className='flex flex-col justify-around relative align-middle items-center'
                    style={{
                backgroundImage:
                    "url('')",
                  
            }}>
                        <div className="GreenColorBackground  rounded-full text-center text-md  font-semibold py-2 px-1 w-20">
                            <p className="">Step 1</p>
                        </div>
                        <div className="GrayColorBackground  rounded-full text-center text-md  font-semibold py-2 px-1 w-20">
                            <p className="">Step 2</p>
                        </div>
                        <div className="GrayColorBackground  rounded-full text-center text-md  font-semibold py-2 px-1 w-20">
                            <p className="">Step 3</p>
                        </div>
                    {/* <div className='absolute top-0  text-white justify-center align-middle w-full rotate-90 text-center '>----------------------------------------------------------</div> */}
                    </div>
                    {/* Step 1 */}
                    <div className=''>
                        <div className="flex items-start">
                            <div className='LightGreenColorBackground p-8 rounded-xl mb-4 backdrop-blur-sm w-fit items-center'>
                                <h2 className="text-xl font-semibold mb-2">Sign Up & Choose a Domain</h2>
                                <p className="">
                                    Explore a wide range of internships across various industries, tailored to match your skills.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex items-start">
                            <div>
                            <div className='LightGreenColorBackground p-8 rounded-xl mb-4 backdrop-blur-sm w-fit items-center'>
                                <h2 className="text-xl font-semibold mb-2">Fill out the Desired Form</h2>
                                <p className="">

                                    Fill out a quick application form to and secure your internship opportunity.
                                </p>
                            </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex items-start">
                            <div>
                            <div className='LightGreenColorBackground p-8 rounded-xl mb-4 backdrop-blur-sm w-fit items-center'>
                                <h2 className="text-xl font-semibold mb-2">Earn Your Certificate</h2>
                                <p className="">
                                    Complete your internship, gain valuable hands-on experience, and receive a certificate
                                </p>
                            </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default InternshipProcess;