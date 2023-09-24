/* eslint-disable react/prop-types */

const CategoryCard = ({ category }) => {
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

  return (
    <div>
      <div className="relative">
        <img src={picture} className="w-full h-[60vh]" />
        <div className="absolute bottom-0 w-full h-1/5 bg-black opacity-50"></div>
        <div className="absolute bottom-0 w-full h-1/5 py-8 pl-9">
          <button className="w-[179px] h-[56px] bg-blue-500 mt text-white rounded-lg">
            Donate $ {price}
          </button>
        </div>
      </div>

      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default CategoryCard;
