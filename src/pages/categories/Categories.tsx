import { useEffect, useState } from "react";
import { getTaskCategoryServices } from "../../services/taskCategory";

const Categories = () => {
    const [categories,setCategories] = useState([])
    const handleGetTaskCategories = async() => {
        const data = await getTaskCategoryServices()
        setCategories(data)
    }
    useEffect(() => {
        handleGetTaskCategories()
    },[])
    return(
        <div>
              {categories.map((cat : {id : string}) => (
                <div>
                    {cat.id}
                </div>
              ))}
        </div>
    )
}

export default Categories;