import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "../pages/layouts/MainLayout";
import Home from "../pages/Home";
import { FullScreenBannerProvider } from "../components/FullScreenBanner/context/fullScreenBannerProvider";
import { AnimatePresence } from "framer-motion";
import SignUp from "../pages/SignUp";
import SignUpSuccess from "../pages/SignUp/SignUpSuccess";

const Routing = () => {
  const location = useLocation();

  return (
    <FullScreenBannerProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route element={<MainLayout hasNavBar paddedTop paddedX />}>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-up/success" element={<SignUpSuccess />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </FullScreenBannerProvider>
  );
};

export default Routing;
