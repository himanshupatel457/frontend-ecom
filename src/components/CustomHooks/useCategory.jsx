import { useEffect, useState } from "react";
import axios from "axios";


export default function useCategory() {
    const [categories, setCategories] = useState([]);

    const getAllCategories = async () => {
        try { 
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/allcategories`);
            if (res?.data?.success) {
                setCategories(res?.data?.categories);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        getAllCategories();
    },[])

    return categories;
}