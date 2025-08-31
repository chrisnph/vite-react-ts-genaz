import { createContext, useContext } from "react";

export type FullScreenBannerContextType = {
  isVideoEnded: boolean;
  setIsVideoEnded: React.Dispatch<React.SetStateAction<boolean>>;
  toggleBannerVideoEnd: () => void;
  handleSkipBannerVideo: (
    videoRef: React.RefObject<HTMLVideoElement | null>
  ) => void;
};

export const FullScreenBannerContext = createContext<
  FullScreenBannerContextType | undefined
>(undefined);

export const useFullScreenBanner = (): FullScreenBannerContextType => {
  const context = useContext(FullScreenBannerContext);

  if (!context)
    throw new Error("context must be used within provider [FullScreenBanner]");

  return context;
};
