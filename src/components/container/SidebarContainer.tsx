import type { ReactNode } from "react";
import { useAppSelectore } from "../../redux/reduxHooks";

const SidebarContainer = ({children} : {children : ReactNode}) => {
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
        {children}
    </section>
  );
};

export default SidebarContainer;
