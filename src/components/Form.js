import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup'

const baseStyle = { display: 'flex', justifyContent: 'center', paddingTop: '20rem', color: 'gold' }


// _______________________________________________________
const PizzaForm = (props) => {
    const {handleChange, formValues, setFormValues, handleSubmit, quantity, setQuantity, errors } = props;
   
    const navigate = useNavigate()



    return (
        <>
            <h1 style={{ display: 'flex', justifyContent: 'center', fontSize: 'xx-large' }}>Build your Paw Paw Pizza Below</h1>
            <div className="formhead">
                <header style={baseStyle}></header>
            </div>


            <form onSubmit={handleSubmit} className='form'>
                <h2>Build your Paw Paw Pizza Below</h2>
                <div>

                    <h6>***Required***</h6>
                    {/* ???????????????????????????? */}
                    <p>{errors.size}</p>
                    {/* ???????????????????????????? */}
                    <label>Choice of Size
                        <select value={formValues.size} name='size' onChange={handleChange}>
                            <option value=''>here!</option>
                            <option value="small" onChange={handleChange}>Small</option>
                            <option name='medium' value="medium" onChange={handleChange}>Medium</option>
                            <option name='large' value="large" onChange={handleChange}>Large</option>
                            <option name='extraLarge' value="extraLarge" onChange={handleChange}>Extra Large</option>
                            <option name='gigantic' value="gigantic" onChange={handleChange}>Gigantic</option>
                        </select>
                    </label>
                </div>
                <br />
                <div>
                    <h6>***Required***</h6>
                    <label>Choice of Crust<br /><br />
                        <input type='radio' name='crust' value='original' checked={formValues.crust === 'original'} onChange={handleChange} />Original Crust




                        <input type='radio' name='crust' value="garlic" checked={formValues.crust === 'garlic'} onChange={handleChange} />Garlic Crust
                        <input type='radio' name='crust' value="bbq" checked={formValues.crust === 'bbq'} onChange={handleChange} />BBQ Sauce
                        <input type='radio' name='crust' value="spinach" checked={formValues.crust === 'spinach'} onChange={handleChange} />Spinach Alfredo
                    </label>
                </div>
                <br />
                <div>
                    <label>Add Toppings <br />
                        Choose up to 10 <br /><br />
                        <div>
                             <input type='checkbox' name='pepperoni' checked={formValues.toppings.pepperoni} onChange={handleChange} />Pepperoni
                            <input type='checkbox' name='sausage' checked={formValues.toppings.sausage} onChange={handleChange} />Sausage
                            <input type='checkbox' name='canadian' checked={formValues.toppings.canadian} onChange={handleChange} />Canadian Bacon
                            <input type='checkbox' name='spicyItalian' checked={formValues.toppings.spicyItalian} onChange={handleChange} />Spicy Italian Sausage
                            <input type='checkbox' name='grilled' checked={formValues.toppings.grilled} onChange={handleChange} />Grilled Chicken
                            <input type='checkbox' name='onions' checked={formValues.toppings.onions} onChange={handleChange} />Onions
                            <input type='checkbox' name='gPeppers' checked={formValues.toppings.gPeppers} onChange={handleChange} />Green Peppers
                            <input type='checkbox' name='dicedTomatoes' checked={formValues.toppings.dicedTomatoes} onChange={handleChange} />Diced Tomatoes
                            <input type='checkbox' name='bOlives' checked={formValues.toppings.bOlives} onChange={handleChange} />Black Olives
                            <input type='checkbox' name='roastedGarlic' checked={formValues.toppings.roastedGarlic} onChange={handleChange} />Roasted Garlic
                            <input type='checkbox' name='artichokeHearts' checked={formValues.toppings.artichokeHearts} onChange={handleChange} />Artichoke Hearts
                            <input type='checkbox' name='pineapple' checked={formValues.toppings.pineapple} onChange={handleChange} />Pineapple
                            <input type='checkbox' name='extraCheese' checked={formValues.toppings.extraCheese} onChange={handleChange} />Extra Cheese
                            <input type='checkbox' name='fetaCheese' checked={formValues.toppings.fetaCheese} onChange={handleChange} />Feta Cheese 
                        </div>

                    </label>
                </div>
                <div>
                    {/* <input type="checkbox" />Gluten Free Crust for $3.00 */}
                </div>
                <div>
                    <label>
                        <h4>Special Instructions</h4>
                        <input type='text' name='specialInstructions' value={formValues.specialInstructions} placeholder="Anything you want to add?" onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <h2>{quantity}</h2>
                    <button name='quantity'  onClick={() => {setQuantity(quantity + 1)}}>+</button>
                    <button name='quantity' onClick={() => {setQuantity(quantity - 1)}}>-</button>
                    <br /><br />
                    <button onClick={() => navigate('/Confirmation')} >Add to Order!</button>
                </div>
            </form>
        </>
    )
}

export default PizzaForm;