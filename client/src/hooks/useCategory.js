import axios from "axios";
import { useState ,useEffect } from "react";

export default function useCategory(){
  const [categories,setCategories] = useState([])

  //Get categories
  const getCategories = async()=>{
    try {
      const {data} = await axios('/api/v1/category/get-category')
      setCategories(data?.category)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(()=>{
    getCategories();
  },[])
  return categories
}