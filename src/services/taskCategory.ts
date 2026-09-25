import httpService from "./_httpService";

export const getTaskCategoryServices = async () => {
  const response = await httpService("/taskCategories", "GET");
  if (response.status == 200) return response.data;
  return null;
};
