import { useEffect, useState } from "react";

const Donations = () => {

    const [donations,setDonations] = useState([]);
    const [notFound, setNotFound] = useState(false);


    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem('donations'));

        if(donationItems){
            setDonations(donationItems);
        }else{
            setNotFound("No donate yet");
        }
    },[]);
    console.log(donations)

    return <div>{notFound?<p>nothing here</p>
    :
    <div>
        
        <div>
            {}
        </div>
        
        
    </div>
    }
    
    </div>;
        
    
};

export default Donations;