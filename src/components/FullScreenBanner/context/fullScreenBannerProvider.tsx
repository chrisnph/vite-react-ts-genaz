import { useState, type ReactNode } from "react";
import { FullScreenBannerContext } from "./fullScreenBannerContext";

export const FullScreenBannerProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isVideoEnded, setIsVideoEnded] = useState<boolean>(true);

  const toggleBannerVideoEnd = () => {
    setIsVideoEnded(!isVideoEnded);
  };

  const handleSkipBannerVideo = (
    videoRef: React.RefObject<HTMLVideoElement | null>
  ) => {
    const video = videoRef.current;

    if (video) {
      video.currentTime = video.duration - 0.5;
    }
  };

  return (
    <FullScreenBannerContext.Provider
      value={{
        isVideoEnded,
        setIsVideoEnded,
        toggleBannerVideoEnd,
        handleSkipBannerVideo,
      }}
    >
      {children}
    </FullScreenBannerContext.Provider>
  );
};
