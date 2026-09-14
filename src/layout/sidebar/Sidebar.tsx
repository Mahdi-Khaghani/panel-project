import { GoHome } from "react-icons/go";
import SidebarItem from "./SidebarItem";

import TopActionElement from "./TopActionElement";
import { FaTasks } from "react-icons/fa";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";
import SidebarContainer from "../../components/container/SidebarContainer";

const Sidebar = () => {
  console.log("sidebar");

  return (
    <SidebarContainer>
      <div className="h-full w-full ">
        <TopActionElement />
        <hr className="my-5 border-b dark:border-gray-500 border-gray-400" />
        <ul className="space-y-4">
          <SidebarItem title="داشبورد" Icon={GoHome} to={"/"} />
          <SidebarItem
            title="دسته‌بندی‌ها"
            Icon={IoEllipsisHorizontalCircle}
            to={"/categories"}
          />
          <SidebarItem title="تسک‌ها" Icon={FaTasks} to={"/tasks"} />
        </ul>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
