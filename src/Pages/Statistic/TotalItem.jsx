import { useEffect, useState } from "react";




    


const TotalItem = () => {
    const [totalItem, setTotalItem] = useState
    useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then (data => setTotalItem (data))
    },[setTotalItem])

    return (
        <div>
            <p>Total ={totalItem.json} </p>
        </div>
    );
};

export default TotalItem;