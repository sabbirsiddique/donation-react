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
    item_text_color,
    title_text_color,
  } = category || {};

  const itemStyle = {
    backgroundColor: category_bg,
  };
  const cardStyle = {
    backgroundColor: card_bg,
  };
  const itemTextStyle = {
    color: item_text_color,
  };
  const titleTextStyle = {
    color: title_text_color,
  };


  return (
    <Link to={`/categories/${id}`}>
      <div className="w-[312px] rounded-xl shadow-md" style={cardStyle}>
        <div className="h-[194px] rounded-xl">
          <img src={picture} className="h-full w-full object-cover" />
        </div>
        <div className="p-3">
          <div className="mb-2 flex items-center justify-between">
            <p
              className="px-2 py-1 rounded-lg text-base font-medium"
              style={{...itemStyle,...itemTextStyle}}
            >
              {item}
            </p>
          </div>
          <p className="text-xl font-semibold" style={titleTextStyle}>
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoriesCard;
