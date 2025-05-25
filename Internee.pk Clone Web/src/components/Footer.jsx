import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/images/white-internee.png";
import logoGreen from "../assets/images/logo-green.png";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
    const { theme, toggleTheme } = useTheme();
  
  return ( 
    <footer className=" dark:bg-darkgray dark:text-whiteColor  text-themeGray bg-gray-200  Urbanist py-12">       
      <div className=" container-sm  ">
        {/* Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
          <div>
            <h3 className="text-xl font-bold">Subscribe to Newsletter</h3>
            <p className=" dark:text-gray-400  text-themeGray  mt-2">
              Subscribe to our newsletter and get exclusive insights, industry trends.
            </p>
          </div>
          <form className="mt-4 md:mt-0 w-full md:w-auto lg:w-auto flex justify-between items-center  dark:text-whiteColor dark:bg-gray-700 bg-whiteColor shadow  text-themeGray rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 bg-transparent dark:text-whiteColor  text-themeGray focus:outline-none"
            />
            <button
              type="submit"
              className="GreenColorBackground text-whiteColor   px-6 py-2 mr-2 rounded-full hover:bg-green-600 "
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className=" gap-8 justify-between flex flex-col md:flex-row lg:flex-row">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={theme === "light" ? 
               logoGreen

                : 
               logo                
                } alt="Internee.pk" className="h-8" />
            </div>
            <p className="dark:text-gray-400  text-themeGray">
              The ultimate platform designed to turbocharge the IT sector in Pakistan.
            </p>
            <div className="flex items-center mt-4 dark:text-gray-400  text-themeGray">
              <FaPhoneAlt className="mr-2 text-pink-500" />
              <span>+92 312 3023645</span>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="GreenColorBackground p-2 rounded-full text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="GreenColorBackground p-2 rounded-full text-white">
                <FaTwitter />
              </a>
              <a href="#" className="GreenColorBackground p-2 rounded-full text-white">
                <FaLinkedinIn />
              </a>
              <a href="#" className="GreenColorBackground p-2 rounded-full text-white">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap  gap-24 dark:text-gray-400  text-themeGray">

          <div className="">
            <h4 className="font-bold  mb-4">Company</h4>
            <ul className=" space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#">Student Ambassador</a></li>
              <li><a href="#">Interns Profiles</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold  mb-4">Resources</h4>
            <ul className=" space-y-2">
              <li><a href="#">Community</a></li>
              <li><a href="#">Certification</a></li>
              <li><a href="#">Scholarships</a></li>
            </ul>
          </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between text-sm dark:text-gray-400  text-themeGray">
          <p>Copyright © 2025 internee.pk</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
