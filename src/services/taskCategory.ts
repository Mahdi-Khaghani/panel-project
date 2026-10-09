import type { CategoryListItemType } from "../types/taskCategory";
import httpService from "./_httpService";

export const getTaskCategoryServices = async () => {
  const response = await httpService<CategoryListItemType[]>("/taskCategories", "GET");
  if (response.status == 200) return response.data;
  return null;
};

export const addTaskCategoryService = () => {
  return httpService<CategoryListItemType>("/taskCategories", "POST", {
    title: "دسته تست 2",
    description: "توضیحات دسته تست 2",
    icon: "work_icon",
    userId: "1",
    createdAt: "2024-01-01T00:00:00.000Z",
  });
};
