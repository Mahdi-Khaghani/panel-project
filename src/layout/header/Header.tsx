import { TiThMenu } from "react-icons/ti";
import { useAppDispatch } from "../../redux/reduxHooks";
import { setShowSidebar } from "../../redux/ui-management/uiManagement";

const Header = () => {
  const dispatch = useAppDispatch()
  return (
    <section
      id="header"
      className="fixed top-0 left-0 h-16 w-full md:pr-96 bg-white shadow-lg dark:bg-gray-700 p-2"
    >
      <div className="flex items-center h-full">

        <button onClick={() => dispatch(setShowSidebar(true))} className="md:hidden">
            <TiThMenu  className="cursor-pointer" size={24}/>
        </button>
      </div>
    </section>
  );
};

export default Header;
