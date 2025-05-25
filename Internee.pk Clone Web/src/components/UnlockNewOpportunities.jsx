
export default function UnlockNewOpportunities() {
    return (
        <>
            <div className="container-sm bg-[#0A1733] Urbanist rounded-xl">
                
                <div className=" py-28   md:p-32 lg:p-32 flex flex-col items-center justify-center gap-4  ">
                    <div className="mx-auto">

                    <div className=" WhiteColorBackground  text-sm px-1 py-1 rounded-full mb-2 flex flex-row  justify-center w-fit items-center gap-2 font-semibold">
                        <div className="font-semibold  px-2 py-1  rounded-full whiteText bg-black">Trending</div>
                        <div>Explore Internship Opportunities</div>
                    </div>
                    </div>
                    <div className="text-4xl md:text-5xl lg:text-5xl whiteText text-center max-w-xl">
                        <h1>Unlock New Opportunities
                            With Top-tier Internships.</h1>
                    </div>
                    <div>
                        <p className="whiteText text-center max-w-3xl">Take the first step toward a successful career with Internee.pk. Explore top internships, gain hands-on experience, and earn a valuable certificate.</p>
                    </div>
                    <div className="flex flex-col md:flex-row lg:flex-row gap-3">
                        <button className="GreenColorBackground px-8 py-2 rounded-xl text-white text-lg hover:opacity-90">
              Get Started Now
            </button>
                        <button className=" border border-white text-white hover:bg-white hover:transition-all hover:text-black px-8 py-2 rounded-xl  text-lg">
              Explore Internships
            </button>
                    </div>
                </div>
            </div>


            <div className="container-sm dark:text-whiteColor text-blackColor flex flex-col md:flex-row lg:flex-row gap-4 justify-center px-20 py-20 items-center">
                <div className="text-center">
                    <p className="text-6xl font-bold">20+</p>
                    <p className="text-lg">Expert-Led Internships</p>
                </div>
                <div className=" w-48 md:w-24 lg:w-24 rotate-0 md:rotate-90 lg:rotate-90"><hr /></div>
                <div className="text-center">
                    <p className="text-6xl font-bold">1,500+</p>
                    <p className="text-lg">Successful Graduates</p>
                </div>
                <div className="w-48 md:w-24 lg:w-24 rotate-0 md:rotate-90 lg:rotate-90"><hr /></div>
                <div className="text-center">
                    <p className="text-6xl font-bold">50,000+</p>
                    <p className="text-lg">LinkedIn Followers</p>
                </div>
            </div>
        </>
    )
}