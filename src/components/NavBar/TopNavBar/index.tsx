import { motion } from "framer-motion";
import { useFullScreenBanner } from "../../FullScreenBanner/context/fullScreenBannerContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "./assets/logo.png";

export type TopNavBarType = {
  positionAbsolute?: boolean;
};

const TopNavBar = ({ positionAbsolute }: TopNavBarType) => {
  const { isVideoEnded } = useFullScreenBanner();
  const [menuOpen, setMenuOpen] = useState(false);

  if (!isVideoEnded) return null;

  const navLinks = (
    <>
      <Link
        className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-10px] after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#ca1711] after:to-[#681a2b] after:transition-all after:duration-700 hover:after:w-full"
        to="/sign-up"
        onClick={() => setMenuOpen(false)}
      >
        Sign Up
      </Link>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`${
        positionAbsolute ? "absolute top-0 left-0" : ""
      } z-50 px-[10%] bg-white h-[72px] w-full flex flex-row justify-between items-center shadow-md`}
    >
      <nav className="flex justify-between items-center px-0 w-full">
        <Link to="/" className="">
          <img src={logo} alt="logo" className="h-auto w-[100px]" />
        </Link>
        <div className="hidden md:flex space-x-10 text-[14px] font-[600]">
          {navLinks}
        </div>
        <button
          className="md:hidden flex items-center justify-center p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {!menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ rotate: 180 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </motion.svg>
          )}
        </button>
        <motion.div
          initial={false}
          animate={
            menuOpen
              ? { height: "auto", opacity: 1, y: 0 }
              : { height: 0, opacity: 0, y: -20 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute top-[72px] left-0 w-full overflow-hidden bg-white shadow-md flex flex-col items-center space-y-4 py-0 md:hidden text-[14px] font-[600]"
        >
          {menuOpen && (
            <div className="py-4 flex flex-col items-center space-y-4 w-full">
              {navLinks}
            </div>
          )}
        </motion.div>
      </nav>
    </motion.div>
  );
};

export default TopNavBar;
