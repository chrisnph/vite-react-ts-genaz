import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const SignUpSuccess = () => {
  const [showConfetti, setShowConfetti] = useState<boolean>(true);
  const { state } = useLocation();

  return (
    <>
      {showConfetti && (
        <Confetti
          recycle={false}
          tweenDuration={2000}
          className="w-full h-full"
          onConfettiComplete={() => setShowConfetti(false)}
        />
      )}
      <div className="relative w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              opacity: { duration: 0.8, ease: "easeInOut" },
            },
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="h-full flex flex-col justify-center items-center py-10"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="h-full font-extrabold mb-6 flex flex-col items-center justify-center text-center"
          >
            <motion.span
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="mb-5 drop-shadow-lg text-shadow-lg text-3xl md:text-4xl text-green-700"
            >
              Newsletter Sign Up Successfull
            </motion.span>

            <motion.span
              initial={{
                opacity: 0,
                x: -100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="mt-5 text-[14px] text-gray-500"
            >
              Receiving updates on
              <span className="text-gray-400"> {state.email}</span>
            </motion.span>
          </motion.h1>
        </motion.div>
      </div>
    </>
  );
};

export default SignUpSuccess;
