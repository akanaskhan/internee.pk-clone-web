import React, { useContext, useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/white-internee.png";
import logoGreen from "../assets/images/logo-green.png";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { AiOutlineSun } from "react-icons/ai";
import { useTheme } from "../context/ThemeContext";
import { AiOutlineMoon } from "react-icons/ai";


function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const toggleIcon = (setState) => {
    setState((prevState) => !prevState);
  };

 





 
 

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const handleToggle = () => {
    if (window.innerWidth < 1024) {
      toggleIcon(setIsOpen4);
      setExpanded(!expanded);
      scrollToTop();
    }
  };


  const [isSticky, setIsSticky] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsSticky(currentScrollPos > prevScrollPos && currentScrollPos > 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div className={`navbar-container p-0 m-0 border-b-2 dark:border-gray-700 border-gray-200 ${isSticky ? "fade-in" : ""} bg-whiteColor text-black dark:bg-darkgray dark:text-white Urbanist`}>
      <div className="container-sm my-auto">
        <Navbar expand="lg" className="nav-bar items-center h-20 text-sm p-0 m-0 container bg-whiteColor text-black dark:bg-darkgray dark:text-white" expanded={expanded}>
          <Navbar.Brand className="me-auto w-36 md:w-18 lg:w-52" href="/">
            <img src=
               {theme === "light" ? 
                logoGreen

                : 
                logo
                
                } 
               alt="Logo" />
          </Navbar.Brand>

          <div className="d-lg-none flex flex-col justify-center items-center mb-0 p-0">
            <div className="flex flex-row items-center gap-2">
              <button onClick={toggleTheme} className="w-12 h-12 bg-gray-200 text-yellow-500 rounded-full flex items-center justify-center text-2xl hover:bg-gray-300 dark:bg-[#27272A] dark:text-yellow-400 dark:hover:bg-gray-700 transition-all cursor-pointer">
                {theme === "light" ? 
                <AiOutlineMoon />

                : 
                <AiOutlineSun />
                
                } 
              </button>
              <div className="p-1.5 rounded-xl m-0 flex justify-center GreenColorBackground">
                <div
                  className="navbar-toggler p-0 m-0 before:border-none after:border-none"
                  type="button"
                  onClick={() => setExpanded(!expanded)}
                >
                  <div
                    id="nav-icon4"
                    className={` ${isOpen4 ? "open" : ""} p-0 m-0 before:border-none after:border-none`}
                    onClick={() => toggleIcon(setIsOpen4)}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto items-center text-sm bg-whiteColor dark:bg-darkgray z-10 font-semibold  ">
              <Link to="/" className="nav-link  dark:text-white hover:text-greenColor dark:hover:text-greenColor" onClick={handleToggle}>
                Home
              </Link>
              <Link to="/internship" className="nav-link  dark:text-white hover:text-greenColor dark:hover:text-greenColor" onClick={handleToggle}>
                Internship
              </Link>
              <Link to="/graduateprogram" className="nav-link  dark:text-white hover:text-greenColor dark:hover:text-greenColor" onClick={handleToggle}>
                Graduate Program
              </Link>
              <Link to="/studentambassadors" className="nav-link  dark:text-white hover:text-greenColor dark:hover:text-greenColor" onClick={handleToggle}>
                Student Ambassador
              </Link>

              {/* <div className="relative d-lg-none d-sm-block mt-3">
                <button className="absolute top-1 right-1.5">
                  <PiMagnifyingGlassLight className="cursor-pointer text-2xl text-black dark:text-white" />
                </button>
              </div> */}
            </Nav>
          <div className="d-sm-none d-lg-block ms-auto font-semibold">
            <div className="flex items-center gap-3 justify-center">
              <button className=" dark:hover:bg-transparent dark:text-whiteColor text-whiteColor dark:border dark:border-greenColor border border-greenColor bg-greenColor hover:bg-transparent  hover:text-blackColor  transition duration-300  rounded-lg  px-3 py-2 shadow">Job Portal</button>
              <Link to={'/sign-in'}>
                <button className="hover:bg-green-700 dark:text-whiteColor text-whiteColor  bg-greenColor     transition duration-300  rounded-lg  px-3 py-2 shadow">Sign In</button>
              </Link>
              <div className="hidden lg:block">

              <button onClick={toggleTheme} className="w-12 h-12 bg-gray-200  text-yellow-500 rounded-full flex items-center justify-center text-2xl hover:bg-gray-300 dark:bg-[#27272A] dark:text-yellow-400 dark:hover:bg-gray-700 transition-all cursor-pointer">
                 {theme === "light" ? 
                <AiOutlineMoon />
                
                : 
                <AiOutlineSun />
                
              } 
              </button>
              </div>
            </div>
          </div>
          </Navbar.Collapse>

        </Navbar>
      </div>
    </div>
  );
}

export default NavBar;
