import { useLocation, useNavigate } from "react-router";
import leftArrow from "../assets/icon/left-arrow-icon.png";

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const showBackButton = pathname !== "/board";
  const handlebackbutton = () => {
    navigate(-1);
  };
  return (
    <div className="text-center p-3 shadow-sm bg-white">
      <div className="text-xl relative">
        {showBackButton && (
          <button
            type="button"
            aria-label="뒤로 가기"
            className="absolute left-1 top-2"
            onClick={handlebackbutton}
          >
            <img src={leftArrow} width="14px" alt="" />
          </button>
        )}
        <div>
          아파트민원<span className="text-amber-500 text-xl"> 각</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
