/* eslint-disable react/prop-types */

const DonatedCard = ({ category }) => {
  const {
    picture,
    title,
    item,
    category_bg,
    card_bg,
    item_text_color,
    price,
  } = category || {};

  const itemStyle = {
    backgroundColor: category_bg,
  };

  const itemTextStyle = {
    color: item_text_color,
  };
  const itemTextStyleBg = {
    backgroundColor: item_text_color,
  };

  const cardStyle = {
    backgroundColor: card_bg,
  };

  return (
    <div>
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-clip-border text-gray-700 shadow-md" style={cardStyle}>
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={picture}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
          <h6 className="px-2 py-1 rounded-lg text-base font-medium"style={{...itemStyle,...itemTextStyle}}>
            {item}
          </h6>
          </div>
          
          <h4 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>
          <p className="mb-8 block text-base font-semibold leading-relaxed text-gray-700 antialiased" style={itemTextStyle}>$ 
            {price}
          </p>
          <a className="inline-block" href="#">
            <button
              className="w-[179px] h-[56px] text-white text-lg font-semibold rounded-lg"style={itemTextStyleBg}
              type="button"
            >
              View Details
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonatedCard;
