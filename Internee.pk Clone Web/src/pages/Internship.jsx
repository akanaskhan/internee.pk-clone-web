import graphicDesign from "../assets/images/graphics.webp";
import chatbotDev from "../assets/images/chatbot.webp";
import aiInternship from "../assets/images/ai.jpg";
import frontend from "../assets/images/frontend.webp";
import appDev from "../assets/images/app.webp";
import backend from "../assets/images/backend.webp";

export default function Internship() {
  const internships = [
    { title: "Graphic Design", image: graphicDesign },
    { title: "Chatbot Development", image: chatbotDev },
    { title: "Other Internships", image: aiInternship },
    { title: "Frontend Internship", image: frontend },
    { title: "App Development", image: appDev },
    { title: "Backend Development", image: backend },
  ];

  return (
    <>
      <div className="dark:bg-blackColor bg-whiteColor mt-24 md:mt-20 lg:mt-28 xl:mt-28 pt-40 pb-20">
        <div className="container-sm">
          <div className="flex flex-col md:flex-row lg:flex-row">
            <div className="mb-24 lg:mb-0">
              <h1 className="text-5xl font-bold dark:text-whiteColor text-greenColor">Unlock Your Future</h1>
              <p className="text-lg max-w-xl my-3 dark:text-whiteColor text-blackColor">Discover world-class internships and gain hands-on experience with top industry leaders.</p>
              <button className="GreenColorBackground px-8 py-2 rounded-xl text-white text-lg hover:bg-green-800  shadow">Get Started</button>
            </div>
            <div className="mx-auto">
              <div className="GreenColorBackground px-5 md:px-12 lg:px-12 py-10 rounded-xl text-white text-xl md:text-2xl lg:text-2xl font-bold   shadow">
                Find Your Dream Internship Today!</div>

            </div>
          </div>


          <div className="py-10 dark:bg-darkgray bg-gray-100 rounded-xl mt-28 p-8  md:mt-36 lg:mt-36">
            <div className="text-center  ">
              <h1 className="text-4xl font-bold mb-3 dark:text-greenColor text-blackColor">Explore Internship Categories</h1>
              <p className="text-lg dark:text-whiteColor max-w-2xl mx-auto ">Choose from a wide range of internship opportunities and kickstart your professional journey.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-8 ">
              {internships.map((item, index) => (
                <div key={index} className="dark:bg-darkgray  bg-whiteColor dark:text-whiteColor text-themeGray rounded-2xl overflow-hidden shadow dark:border-whiteColor dark:border-2 hover:scale-105 transition-transform duration-100 ease-in-out">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                  <div className="p-3 text-center">
                    <h3 className="dark:text-white text-themeGray font-bold text-lg">{item.title}</h3>
                    <hr className="my-3"></hr>
                    <div className="greenText  text-md mt-1 cursor-pointer font-semibold ">

                      <button className="GreenColorBackground px-8 py-2 rounded-xl text-white text-lg w-full  shadow">Apply Now</button>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr className="w-full text-whiteColor mt-5"></hr>
           <div className="container-sm dark:text-whiteColor text-blackColor flex flex-col md:flex-row lg:flex-row gap-4 justify-center px-20 py-20 items-center">
                <div className="text-center">
                    <p className="text-4xl font-bold">20+</p>
                    <p className="text-lg">Expert-Led Internships</p>
                </div>
                <div className=" w-48 md:w-24 lg:w-24 rotate-0 md:rotate-90 lg:rotate-90"><hr /></div>
                <div className="text-center">
                    <p className="text-4xl font-bold">1,500+</p>
                    <p className="text-lg">Successful Graduates</p>
                </div>
                <div className="w-48 md:w-24 lg:w-24 rotate-0 md:rotate-90 lg:rotate-90"><hr /></div>
                <div className="text-center">
                    <p className="text-4xl font-bold">50,000+</p>
                    <p className="text-lg">LinkedIn Followers</p>
                </div>
            </div>
            <hr className="w-full text-whiteColor "></hr>
        </div>
      </div>
    </>
  )
}