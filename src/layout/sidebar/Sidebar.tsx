import { GoHome } from "react-icons/go";
import { useAppSelectore } from "../../redux/reduxHooks";
import SidebarItem from "./SidebarItem";

import TopActionElement from "./TopActionElement";
import { FaTasks } from "react-icons/fa";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";

const Sidebar = () => {
  const { showSidebar } = useAppSelectore((state) => state.uiManagerReduser);

  return (
    <section
      id="sidebar"
      className={`fixed top-0 right-0 p-3 w-96 h-screen bg-white
        dark:bg-gray-700 border-l border-gray-500
        transition-all duration-300
        ${showSidebar ? "translate-x-0" : "translate-x-full"}
        md:translate-x-0`}
    >
      <div className="h-full w-full ">
        <TopActionElement />
        <hr className="my-5 border-b dark:border-gray-500 border-gray-400" />
        <ul className="space-y-4">
          <SidebarItem title="داشبورد" Icon={GoHome} to={"/"}/>
          <SidebarItem title="دسته‌بندی‌ها" Icon={IoEllipsisHorizontalCircle } to={"/categories"}/>
          <SidebarItem title="تسک‌ها" Icon={FaTasks} to={"/tasks"}/>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
