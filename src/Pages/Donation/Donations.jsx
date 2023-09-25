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
    <div>{notFound?<p>{notFound}</p>:
    
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
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
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