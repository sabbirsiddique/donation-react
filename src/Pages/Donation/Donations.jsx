import { useEffect, useState } from "react";
import DonatedCard from "./DonatedCard";

const Donations = () => {

    const [donations,setDonations] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [isShow, setIsShow] = useState(false);


    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem("donations"));

        if(donationItems){
            setDonations(donationItems);
        }else{
            setNotFound("No donate yet");
        }
    },[]);


    // const handleRemove = () => {
    //     localStorage.clear();
    //     setDonations([]);
    //     setNotFound("No Data Found");
    //   };

    return (
    <div>{notFound?<div className="flex justify-center items-center text-center bg-red-500 h-[500px] w-[500px] mx-auto text-2xl text-white font-extrabold mt-36 rounded-full"><p>{notFound}</p></div>:
    
    <div>
        {/* {donations.length > 0 && (
            <div>
                <button
              onClick={handleRemove}
              className="px-5 bg-green-200 block mx-auto"
            >
              Deleted All donations
            </button>
            </div>
          )} */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-2xl mx-auto mt-12 mb-10">
            {isShow ? donations.map((category)=> (
            <DonatedCard key={category} category={category}></DonatedCard>)):
            donations.slice(0,4).map ((category)=>(
            <DonatedCard key={category} category={category}></DonatedCard>
            ))

            }
        </div>

        {
            donations.length > 4 && <button onClick={()=>setIsShow(!isShow)} className="px-5 bg-green-500 block mx-auto">
                {isShow ? "":"See More"}
            </button>
        }
        
        
    </div>
    }
    
    </div>
        
    );
};

export default Donations;