import { motion } from "framer-motion";
import SignUpBanner from "./assets/coming-soon.png";
import SignUpForm from "./assets/forms/SignUpForm";

const SignUp = () => {
  return (
    <div className="flex flex-row w-full h-[90%]">
      <motion.div
        initial={{
          scale: 0.1,
          opacity: 0,
          rotateX: -180,
          rotateY: -180,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          rotateX: 0,
          rotateY: 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="w-1/2 h-auto hidden md:flex md:justify-center md:items-center"
      >
        <img src={SignUpBanner} alt="Sign Up" className="w-full h-auto" />
      </motion.div>
      <div className="w-full md:w-1/2 h-full p-5 pb-0 flex flex-col justify-start items-center border-0 md:border md:border-t-0 md:border-r-0 md:border-b-0 md:border-l-[rgba(0,0,0,0.1)]">
        <div className="h-1/3">
          <span className="mt-3 text-[#3A8284] text-[20px] font-semibold">
            Stay Updated With Us
          </span>
        </div>

        <div className="h-auto  w-full">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
