import { motion } from "framer-motion";

const variant = {
  hidden: {
    rotateX: -180,
    rotateY: -180,
  },
  visible: {
    rotateX: 0,
    rotateY: 0,
  },
};

const LoadingScreen = () => {
  return (
    <div className="z-50 bg-black w-screen h-screen overflow-hidden flex justify-center items-center">
      <div className="flex justify-center items-center px-2 py-1 rounded-4xl">
        {"Loading".split("").map((char, index) => (
          <motion.span
            key={index}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.1,
            }}
            variants={variant}
            className="text-[24px] font-semibold tracking-widest bg-gradient-to-r from-[#520907] to-[#681a2b] bg-clip-text text-transparent"
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
