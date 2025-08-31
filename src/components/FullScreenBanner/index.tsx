import { useEffect, useRef, useState } from "react";
import carshow from "./assets/carshow.mp4";
import { motion } from "framer-motion";
import { useFullScreenBanner } from "./context/fullScreenBannerContext";
import { Link } from "react-router-dom";
import LoadingScreen from "../LoadingScreen";

const FullScreenBanner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isVideoReady, setIsVideoReady] = useState(false);

  const {
    isVideoEnded,
    setIsVideoEnded,
    toggleBannerVideoEnd,
    handleSkipBannerVideo,
  } = useFullScreenBanner();

  useEffect(() => {
    setIsVideoEnded(false);

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "hidden";
    };
  }, [setIsVideoEnded]);

  return (
    <motion.div
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        onEnded={() => toggleBannerVideoEnd()}
        onCanPlayThrough={() => setIsVideoReady(true)}
      >
        <source src={carshow} type="video/mp4" />
      </video>

      {!isVideoReady ? (
        <LoadingScreen />
      ) : (
        <div
          className={`flex justify-center items-center relative z-10 text-center w-screen h-screen transition-colors duration-1000 ease-in-out ${
            isVideoEnded ? "bg-transparent" : "bg-black/70"
          }`}
        >
          {!isVideoEnded && isVideoReady && (
            <motion.button
              initial={{
                x: "100%",
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                delay: 3,
                ease: "easeInOut",
              }}
              type="button"
              onClick={() => handleSkipBannerVideo(videoRef)}
              className="animate-pulse cursor-pointer brightness-[300%] text-[12px] absolute top-[30px] right-[30px] bg-gradient-to-r from-[#520907] to-[#681a2b] bg-clip-text text-transparent"
            >
              <div className="bg-[rgba(0,0,0,0.5)] px-2 py-1 rounded-4xl">
                Skip Video
              </div>
            </motion.button>
          )}

          {isVideoEnded && (
            <>
              <motion.div
                initial={{
                  y: 100,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.5,
                  delay: 1,
                  ease: "easeOut",
                }}
                className="absolute top-[30%]"
              >
                <Link
                  to="/about"
                  className="w-[160px] text-[rgba(255,255,255,0.6)] px-3 py-2 bg-gradient-to-b from-[#681a2b] to-[#250403] rounded-lg"
                >
                  Learn More
                </Link>
              </motion.div>

              <motion.div
                initial={{
                  y: -100,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.5,
                  delay: 1.5,
                  ease: "easeOut",
                }}
                className="absolute top-[70%]"
              >
                <Link
                  to="/sign-up"
                  className="w-[160px] text-[rgba(255,255,255,0.6)] px-3 py-2 bg-gradient-to-b from-[#250403] to-[#681a2b] rounded-lg"
                >
                  Campaign Sign Up
                </Link>
              </motion.div>
            </>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default FullScreenBanner;
