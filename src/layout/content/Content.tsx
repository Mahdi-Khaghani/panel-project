import { Route, Routes } from "react-router";
import Dashbord from "../../pages/dashbord/Dashbord";
import Categories from "../../pages/categories/Categories";
import Tasks from "../../pages/tasks/Tasks";

const Content = () => {
  return (
    <section
      id="content"
      className="fixed top-0 left-0 overflow-y-auto w-full p-4 h-screen bg-gray-200 md:pt-16 md:pr-96 dark:bg-gray-600"
    >
       <div className="w-full p-4">
          <Routes>
            <Route path="/" element={<Dashbord/>}/>
            <Route path="/categories" element={<Categories/>}/>
            <Route path="/tasks" element={<Tasks/>}/>
            
          </Routes>
       </div>
    </section>
  );
};

export default Content;
