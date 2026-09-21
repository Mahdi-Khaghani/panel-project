import { useEffect, useState } from "react";
import { getTaskCategoryServices } from "../../services/taskCategory";
import type { CategoryListItemType } from "../../types/taskCategory";



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
    <div>
        <table className="text-center w-full rounded-lg overflow-hidden shadow-sm bg-white dark:bg-gray-600">
            <thead>
                <tr className="border-b h-12">
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
                    className="h-9 border-b border-dashed dark:border-gray-500">
                        <td className="px-2 md:px-3 hidden md:table-cell">
                            {item.id}
                        </td>
                        <td className="px-2 md:px-3">{item.title}</td>
                        <td className="px-2 md:px-3">{item.description}</td>
                        <td className="px-2 md:px-3">{item.createdAt}</td>
                        <td className="px-2 md:px-3">Action</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default Categories;
