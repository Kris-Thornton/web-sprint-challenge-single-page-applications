import React, { useState } from "react";
import { useNavigate } from "react-router-dom";




const Confirmation = (props) => {

    const navigate=(useNavigate)

    return (
        <>
        <div className="formTwo">
            <h1>Congratulations!</h1>
            <h2>Your order has been placed!</h2>
            <div>
                <list>{props.howMany}</list>
            </div>
        </div>
        
        </>
    )
}

export default Confirmation;



// const [howMany, setHowMany] = useState(1);
// const [sAndS, setSandS] = useState(sizes);
// const [topps, setTopps] = useState(toppings);
// const [crusts, setCrusts] = useState({crust:""})