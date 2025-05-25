import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import image from "../../assets/images/signInBanner.webp"

function SignIn() {
  const navigate = useNavigate();

  const [icon, setIcon] = useState(eyeOff);
  const [type, setType] = useState("password");


  const handleToggle = () => {
    setIcon(type === "password" ? eye : eyeOff);
    setType(type === "password" ? "text" : "password");
  };

  return (
    <>
    <div className=" h-screen  mt-24 md:mt-20 lg:mt-28 xl:mt-24 pb-5 Urbanist">
      <div className="container-sm flex items-center">

      {/* Left Side - Image and Welcome */}
      <div className="w-1/2 relative hidden md:flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: image }}>
      <img src={image} alt="" />
      <div className="absolute inset-0 bg-blackColor opacity-50 z-0"></div>
        <div className=" bg-opacity-60 p-8 rounded-xl absolute bottom-8 container-sm">
          <h1 className="text-white text-4xl font-bold mb-4">Welcome to Internee.pk</h1>
          <p className="text-white">We help tech enthusiasts and professionals.</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center dark:bg-blackColor bg-gray-100 h-screen ">
        <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[400px] p-8 shadow-xl rounded-xl bg-white dark:bg-gray-600">
          <h2 className="text-center text-2xl font-semibold mb-6">Sign in to internee.pk</h2>
          <button className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2 mb-4 hover:shadow-md">
            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="inline w-5 mr-2" />
            Continue with Google
          </button>

          <div className="flex items-center my-2">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-gray-500">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <form >
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
               
                required
              />
            </div>

            <div className="mb-4 relative">
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type={type}
                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                
                
                required
                />
              <span className="absolute right-3 top-9 cursor-pointer" onClick={handleToggle}>
                <Icon icon={icon} size={20} />
              </span>
            </div>

            <button type="submit" className="w-full bg-greenColor text-white rounded-xl py-2 hover:bg-gray-800 transition">
              Continue
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link to="/sign-up" className="text-greenColor hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
                </div>
    </div>
                </>
  );
}

export default SignIn;
