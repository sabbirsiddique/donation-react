import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const Category = () => {


    const [category,setCategory]= useState({});
    const {id} = useParams();
    const categories =useLoaderData();

    useEffect(()=>{
        const findCategory = categories?.find((category)=> category.id === id);
        setCategory(findCategory);

    },[categories,id]);
    
    return (
        <div className="max-w-screen-2xl mx-auto mt-12 mb-10">
            <CategoryCard category={category}></CategoryCard>
        </div>
    );
};

export default Category;