import CategoriesCard from "./CategoriesCard";

/* eslint-disable react/prop-types */
const Categories = ({categories}) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    categories?.map(category=><CategoriesCard key={category.id} category={category}></CategoriesCard>)
                }
            </div>
        </div>
    ); 
};

export default Categories;