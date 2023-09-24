/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CategoriesCard = ({ category }) => {


 

  const {
    id,
    picture,
    title,
    item,
    category_bg,
    card_bg,
    text_button_bg,
    description,
    price,
  } = category || {};

  const itemStyle = {
    backgroundColor: category_bg, // Use category_bg as the background color
  };

  return (
    <Link to={`/categories/${id}`}>
    <div className="relative flex w-[312px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div className="relative mx-4 mt-4 h-[194px] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
      <img
        src={picture}
        className="h-full w-full object-cover"
      />
    </div>
    <div className="p-6">
      <div className="mb-2 flex items-center justify-between">
        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased"style={itemStyle}>
          {item}
        </p>

      </div>
      <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
       {title}
      </p>
    </div>
  </div>
    </Link>
    
  );
};

export default CategoriesCard;
