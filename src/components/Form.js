import React from "react";
import { useNavigate } from "react-router-dom";


const baseStyle = {display: 'flex', justifyContent: 'center', paddingTop: '20rem', color:'gold'}



const PizzaForm = (props) => {
    return (
        <>
        <div className="formhead">
            <header style={baseStyle}><h1 >Build your Paw Paw Pizza Below</h1></header>
        </div>
        
        </>
    )
}

export default PizzaForm;