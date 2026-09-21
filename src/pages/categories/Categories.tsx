import { useEffect, useState } from "react";
import { getTaskCategoryServices } from "../../services/taskCategory";
import type { CategoryListItemType } from "../../types/taskCategory";
import { convertMiladi2Jalali } from "../../utils/dataUtils";
import { BsPencil, BsTrash } from "react-icons/bs";

const Categories = () => {
  const [categories, setCategories] = useState<CategoryListItemType[]>([]);
  const handleGetTaskCategories = async () => {
    const data = await getTaskCategoryServices();
    setCategories(data);
  };
  useEffect(() => {
    handleGetTaskCategories();
  }, []);
  return (
    <div className="mt-6 md:mt-0">
        <div className="flex p-1 justify-between items-center">
        <h1 className="py-5 text-lg font-bold">لیست دسته بندی وظایف</h1>
        <button className="text-white cursor-pointer hover:bg-sky-600 bg-sky-500 rounded-lg px-3 py-1">افزودن دسته بندی</button>
        </div>
      <table className="text-center w-full rounded-lg overflow-hidden shadow-sm bg-white dark:bg-gray-600">
        <thead>
          <tr className="border-b dark:border-b-gray-500 h-12">
            <th className="px-2 md:px-3 hidden md:table-cell">#</th>
            <th className="px-2 md:px-3">عنوان</th>
            <th className="px-2 md:px-3">توضیحات</th>
            <th className="px-2 md:px-3">تاریخ ایجاد</th>
            <th className="px-2 md:px-3">عملیات</th>
          </tr>
        </thead>
        <tbody className="text-center text-gray-800 dark:text-gray-400">
          {categories.map((item) => (
            <tr
              key={item.id}
              className="h-9 border-b border-dashed dark:border-gray-500 last:border-b-0"
            >
              <td className="px-2 md:px-3 hidden md:table-cell">{item.id}</td>
              <td className="px-2 md:px-3">{item.title}</td>
              <td className="px-2 md:px-3 hidden md:table-cell">{item.description}</td>
              <td className="px-2 md:px-3">
                {convertMiladi2Jalali(item.createdAt)}
              </td>
              <td>
                <span className="px-2 md:px-3 flex justify-center items-center gap-2 h-full">
                <BsTrash className="text-red-600 cursor-pointer"/>
                <BsPencil className="text-gray-600 cursor-pointer dark:text-gray-400"/>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Categories;
