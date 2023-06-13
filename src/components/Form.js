import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


const baseStyle = { display: 'flex', justifyContent: 'center', paddingTop: '20rem', color: 'gold' }



const PizzaForm = (props) => {

const [howMany, setHowMany] = useState(1)
// _________________________________________________________

const handleSubmit = (evt) => {
    evt.preventDefault();
}





    return (
        <>
            <h1 >Build your Paw Paw Pizza Below</h1>
            <div className="formhead">
                <header style={baseStyle}></header>
            </div>


            <form onSubmit={handleSubmit}>
                <h2>Build your Paw Paw Pizza Below</h2>
                <div>
                    <h6>***Required***</h6>
                    <label>Choice of Size
                        <select>
                            <option>here!</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                            <option>Extra Large</option>
                            <option>Gigantic</option>
                        </select>
                    </label>
                </div>
                <br />
                <div>
                    <h6>***Required***</h6>
                    <label>Choice of Sauce<br /><br />
                        <input type='radio' />Original Crust
                        <input type='radio' />Garlic Crust
                        <input type='radio' />BBQ Sauce
                        <input type='radio' />Spinach Alfredo
                    </label>
                </div>
                <br/>
                <div>
                    <label>Add Toppings <br />
                        Choose up to 10 <br /><br />
                        <div>
                            <input type='checkbox'/>Pepperoni
                            <input type='checkbox'/>Sausage
                            <input type='checkbox'/>Canadian Bacon
                            <input type='checkbox'/>Spicy Italian Sausage
                            <input type='checkbox'/>Grilled Chicken
                            <input type='checkbox'/>Onions
                            <input type='checkbox'/>Green Peppers
                            <input type='checkbox'/>Diced Tomatoes
                            <input type='checkbox'/>Black Olives
                            <input type='checkbox'/>Roasted Garlic
                            <input type='checkbox'/>Artichoke Hearts
                            <input type='checkbox'/>Pineapple
                            <input type='checkbox'/>Extra Cheese
                            <input type='checkbox'/>Feta Cheese
                        </div>
                        
                    </label>
                </div>
                <div>
                    <input type="checkbox"/>Gluten Free Crust for $3.00
                </div>
                <div>
                    <label>
                        <h4>Special Instructions</h4>
                        <input type='text' placeholder="Anything you want to add?"/>
                    </label>
                </div>
                <div>
                    <h2>{howMany}</h2>
                    <button>+</button>
                    <button>-</button>
                <br /><br />
                <button>Add to Order!</button>
                </div>
            </form>
        </>
    )
}

export default PizzaForm;