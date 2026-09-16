import { IoCloseOutline, IoSunnyOutline } from "react-icons/io5";
import {
  setShowSidebar,
  toggleTheme,
} from "../../redux/ui-management/uiManagement";
import { FaRegMoon } from "react-icons/fa";
import { useAppDispatch, useAppSelectore } from "../../redux/reduxHooks";

const TopActionElement = () => {  
  const { theme } = useAppSelectore((state) => state.uiManagerReduser);
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-between md:justify-end items-center">
      <button
        onClick={() => dispatch(setShowSidebar(false))}
        className="md:hidden block"
      >
        <IoCloseOutline size={24} />
      </button>

      <button onClick={() => dispatch(toggleTheme())} className="block">
        {theme === "dark" ? (
          <IoSunnyOutline
            size={24}
            className={`cursor-pointer transform transition-all ${theme === "dark" && "rotate-90"}`}
          />
        ) : (
          <FaRegMoon size={24} className="cursor-pointer" />
        )}
      </button>
    </div>
  );
};

export default TopActionElement;
