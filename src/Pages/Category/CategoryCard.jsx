/* eslint-disable react/prop-types */

import Swal from "sweetalert2";

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
        <img src={picture} className="w-full h-[60vh]" />
        <div className="absolute bottom-0 w-full h-1/5 bg-black opacity-50"></div>
        <div className="absolute bottom-0 w-full h-1/5 py-8 pl-9">
          <button onClick={handleDonations} className="w-[179px] h-[56px] bg-blue-500 mt text-white rounded-lg">
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
