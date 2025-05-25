import health from "../assets/images/health.jpg";
import engineering from "../assets/images/engineering.webp";
import IT from "../assets/images/IT.avif";

export default function GraduateProgram() {


  return (
    <>
      <div className="dark:bg-blackColor bg-whiteColor mt-24 md:mt-20 lg:mt-28 xl:mt-28 pt-28 pb-20">
        <div className="container-sm">
          <div className="mx-auto text-center">

            <h1 className="text-4xl md:text-7xl lg:text-7xl font-bold dark:text-whiteColor text-greenColor">Graduate Programs</h1>
            <p className="text-lg max-w-xl my-3 dark:text-whiteColor text-blackColor mx-auto">Explore our comprehensive graduate programs designed to advance your career and expand your knowledge.</p>


          </div>


          <div className="py-10 dark:bg-blackColor bg-gray-100 rounded-xl mt-28 p-8  md:mt-36 lg:mt-36">
            <div className="text-center  ">
              <h1 className="text-4xl font-bold mb-3 dark:text-whiteColor text-blackColor">Explore Categories</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-10 py-8 px-2 lg:px-64 ">

              <div className="dark:bg-blackColor  bg-whiteColor dark:text-whiteColor text-themeGray rounded-2xl overflow-hidden shadow dark:border-whiteColor dark:border-2 hover:scale-105 transition-transform duration-100 ease-in-out">
                <img src={health} alt="Health" className="w-full h-60 object-cover" />
                <div className="p-3 text-center">
                  <h3 className="dark:text-white text-themeGray font-bold text-lg">Health Care</h3>

                  <p>Step into the world where every second counts and lives are changed. Whether it's assisting in patient care, supporting medical research, or exploring health tech innovation our internships put you at the heart of the action. Join the frontlines of impact and make your mark in the future of healthcare.</p>
                </div>
              </div>
              <div className="dark:bg-blackColor  bg-whiteColor dark:text-whiteColor text-themeGray rounded-2xl overflow-hidden shadow dark:border-whiteColor dark:border-2 hover:scale-105 transition-transform duration-100 ease-in-out">
                <img src={engineering} alt="Engineering" className="w-full h-60 object-cover" />
                <div className="p-3 text-center">
                  <h3 className="dark:text-white text-themeGray font-bold text-lg">Engineering</h3>

                  <p>
                    Enter the realm where ideas turn into structures, circuits, and code. From building the future to solving real-world challenges, our engineering internships place you in the driver’s seat of innovation. Whether it’s civil, electrical, mechanical, or software get ready to design, build, and disrupt.</p>
                </div>
              </div>
              <div className="dark:bg-blackColor  bg-whiteColor dark:text-whiteColor text-themeGray rounded-2xl overflow-hidden shadow dark:border-whiteColor dark:border-2 hover:scale-105 transition-transform duration-100 ease-in-out">
                <img src={IT} alt="IT" className="w-full h-60 object-cover" />
                <div className="p-3 text-center">
                  <h3 className="dark:text-white text-themeGray font-bold text-lg">
                    Information Technology</h3>

                  <p>Dive into the digital battlefield where code is power and innovation never sleeps. From software development to cybersecurity, data analytics to cloud computing our IT internships equip you to lead the tech revolution. Step in, gear up, and shape the future of technology.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}