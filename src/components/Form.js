import React, { useState } from "react";
import { useNavigate} from "react-router-dom";


const baseStyle = { display: 'flex', justifyContent: 'center', paddingTop: '20rem', color: 'gold' }



const PizzaForm = (props) => {
    const sizeAndSauce = {
        small: '', 
        medium: '', 
        large: '', 
        extraLarge: '', 
        gigantic: '', 
        original: '', 
        garlic: '', 
        bbq: '', 
        spinach: '',
        extra: '' 
    };    

    const toppings = {
        pepperoni: false,
        sausage: false,
        canadian: false,
        spicyItalian: false,
        grilled: false,
        onions: false,
        gPeppers: false,
        dicedTomatoes: false,
        bOlives: false,
        roastedGarlic: false,
        artichokeHearts: false,
        pineapple: false,
        extraCheese: false,
        fetaCheese: false
    };


    const [howMany, setHowMany] = useState(1);
    const [sAndS, setSandS] = useState(sizeAndSauce);
    const [topps, setTopps] = useState(toppings);
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate()
    // _________________________________________________________

    const handleSubmit = (evt) => {
        evt.preventDefault();


    }

    // _________________________________________________________


    const handleChange = (evt) => {
        const { type, name, value, checked } = evt.target
        const updatedInfo = type === 'checkbox' ? checked : value;
        setIsChecked(evt.target.checked)

        console.log('working')
        setSandS({...sAndS, [value]: updatedInfo})
    }

    const incrementor = (evt) => {
        setHowMany(howMany + 1)

    }

    const deincrementor = (evt) => {
        setHowMany(howMany - 1)

    }



    return (
        <>
            <h1 style={{display:'flex', justifyContent:'center', fontSize:'xx-large'}}>Build your Paw Paw Pizza Below</h1>
            <div className="formhead">
                <header style={baseStyle}></header>
            </div>


            <form onSubmit={handleSubmit} className='form'>
                <h2>Build your Paw Paw Pizza Below</h2>
                <div>
                    <h6>***Required***</h6>
                    <label>Choice of Size
                        <select>
                            <option>here!</option>
                            <option name='small' value={sAndS.small} onChange={handleChange}>Small</option>
                            <option name='medium' value={sAndS.medium} onChange={handleChange}>Medium</option>
                            <option name='large' value={sAndS.large} onChange={handleChange}>Large</option>
                            <option name='extraLarge' value={sAndS.extraLarge} onChange={handleChange}>Extra Large</option>
                            <option name='gigantic' value={sAndS.gigantic} onChange={handleChange}>Gigantic</option>
                        </select>
                    </label>
                </div>
                <br />
                <div>
                    <h6>***Required***</h6>
                    <label>Choice of Sauce<br /><br />
                        <input type='radio' value={"original"} checked={true} />Original Crust
                        <input type='radio' value={"garlic"} checked={true} />Garlic Crust
                        <input type='radio' value={"bbq"} checked={true} />BBQ Sauce
                        <input type='radio' value={"spinach"} checked={true} />Spinach Alfredo
                    </label>
                </div>
                <br />
                <div>
                    <label>Add Toppings <br />
                        Choose up to 10 <br /><br />
                        <div>
                            <input type='checkbox' name='pepperoni' checked={isChecked.pepperoni} onChange={handleChange} />Pepperoni
                            <input type='checkbox' name='sausage' checked={isChecked.sausage} onChange={handleChange} />Sausage
                            <input type='checkbox' name='canadian' checked={isChecked.canadian} onChange={handleChange} />Canadian Bacon
                            <input type='checkbox' name='spicyItalian' checked={isChecked.spicyItalian} onChange={handleChange} />Spicy Italian Sausage
                            <input type='checkbox' name='grilled' checked={isChecked.grilled} onChange={handleChange} />Grilled Chicken
                            <input type='checkbox' name='onions' checked={isChecked.onions} onChange={handleChange} />Onions
                            <input type='checkbox' name='gPeppers' checked={isChecked.gPeppers} onChange={handleChange} />Green Peppers
                            <input type='checkbox' name='dicedTomatoes' checked={isChecked.dicedTomatoes} onChange={handleChange} />Diced Tomatoes
                            <input type='checkbox' name='bOlives' checked={isChecked.bOlives} onChange={handleChange} />Black Olives
                            <input type='checkbox' name='roastedGarlic' checked={isChecked.roastedGarlic} onChange={handleChange} />Roasted Garlic
                            <input type='checkbox' name='artichokeHearts' checked={isChecked.artichokeHearts} onChange={handleChange} />Artichoke Hearts
                            <input type='checkbox' name='pineapple' checked={isChecked.pineapple} onChange={handleChange} />Pineapple
                            <input type='checkbox' name='extraCheese' checked={isChecked.extraCheese} onChange={handleChange} />Extra Cheese
                            <input type='checkbox' name='fetaCheese' checked={isChecked.fetaCheese} onChange={handleChange} />Feta Cheese
                        </div>

                    </label>
                </div>
                <div>
                    <input type="checkbox" />Gluten Free Crust for $3.00
                </div>
                <div>
                    <label>
                        <h4>Special Instructions</h4>
                        <input type='text' name='extra' value={topps.extra} placeholder="Anything you want to add?" onChange={handleChange}/>
                    </label>
                </div>
                <div>
                    <h2>{howMany}</h2>
                    <button name='add' value='add' onClick={incrementor}>+</button>
                    <button name='minus' value='minus' onClick={deincrementor}>-</button>
                    <br /><br />
                    <button onClick={() => navigate('/Confirmation')} >Add to Order!</button>
                </div>
            </form>
        </>
    )
}

export default PizzaForm;