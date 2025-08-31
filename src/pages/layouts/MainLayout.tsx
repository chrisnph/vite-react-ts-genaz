import { Outlet } from "react-router-dom";
import TopNavBar, {
  type TopNavBarType,
} from "../../components/NavBar/TopNavBar";

type PageProps = {
  hasNavBar?: boolean;
  isCentered?: boolean;
  paddedTop?: boolean;
  paddedX?: boolean;
};

const MainLayout: React.FC<PageProps & TopNavBarType> = ({
  isCentered,
  hasNavBar,
  paddedTop,
  positionAbsolute,
  paddedX,
}) => {
  if (isCentered === undefined) isCentered = false;
  if (hasNavBar === undefined) hasNavBar = true;
  if (paddedTop === undefined) paddedTop = true;
  if (positionAbsolute === undefined) positionAbsolute = false;
  if (paddedX === undefined) paddedX = false;

  return (
    <div className="bg-no-repeat bg-padding-box flex flex-col h-screen ovedrflow-hidden">
      {hasNavBar && <TopNavBar positionAbsolute={positionAbsolute} />}
      <div
        className={`child-container flex-1 overflow-y-auto bg-container w-full px-0 ${
          isCentered ? "--full-center" : ""
        } ${paddedTop ? "pt-[5%]" : ""} ${paddedX ? "px-[10%]" : ""}`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
