/* eslint-disable react/prop-types */

import Swal from "sweetalert2";

const CategoryCard = ({ category }) => {
  const {
    picture,
    title,
    item_text_color,
    description,
    price,
  } = category || {};

  const itemTextStyle = {
    backgroundColor: item_text_color,
  };

  const handleDonations = ()=>{
    
    const donationsArr = [];

    const donationItems = JSON.parse(localStorage.getItem("donations"));

    if (!donationItems){
        donationsArr.push(category);
        localStorage.setItem("donations",JSON.stringify(donationsArr));
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
    }else{




        donationsArr.push(...donationItems,category);
        localStorage.setItem('donations',JSON.stringify(donationsArr));
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )

    }
  }

  return (
    <div>
      <div className="relative">
        <img src={picture} className="w-full h-[70vh] object-fit" />
        <div className="absolute bottom-0 w-full h-1/5 bg-black opacity-50"></div>
        <div className="absolute bottom-0 w-full h-1/5 py-8 pl-9">
          <button onClick={handleDonations} className="w-[179px] h-[56px] text-white rounded-lg" style={itemTextStyle}>
            Donate $ {price}
          </button>
        </div>
      </div>

      <h1 className="mt-14 text-[40px] font-bold">{title}</h1>
      <p className="mt-6 text-base font-normal leading-8">{description}</p>
    </div>
  );
};

export default CategoryCard;
