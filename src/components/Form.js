import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import * as Yup from 'yup'

const baseStyle = { display: 'flex', justifyContent: 'center', paddingTop: '20rem', color: 'gold' }


// _______________________________________________________
const PizzaForm = (props) => {
    const sizes = {
        small: '', 
        medium: '', 
        large: '', 
        extraLarge: '', 
        gigantic: ''
    }    
    const sauces = {        
        original: "", 
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
    const [sAndS, setSandS] = useState(sizes);
    const [topps, setTopps] = useState(toppings);
    const [crusts, setCrusts] = useState(sauces.original)
    const [errors, setErrors] = useState({
        sizes: ''
    })
    // const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate()
    // _________________________________________________________

    const handleSubmit = (evt) => {
        evt.preventDefault();
    

    }

    // _________________________________________________________


    const handleChange = (evt) => {
        const {name, type, value, checked} = evt.target;
        
        setSandS(evt.target.value);
        
        const allToppings = type === 'checkbox' ? checked : value;
        setTopps({...topps, [name]: allToppings});

        
        console.log('working')
        const allCrusts = type === 'radio' ? evt.target: value;
        setCrusts({...crusts, [value]: allCrusts});

// Yup
//         .reach(formSchema, name)
//         .validate(value)
//         .then(valid => {
//             setErrors({
//                 ...errors, [name]: ''
//             });
//         })
//         .catch(err => {
//             setErrors({
//                 ...errors, [name]: err.errors[0]
//             });
//         });

//         setSandS({
//             ...sAndS, [name]: value
//         });

    }
// _____________________________________________________________

// const formSchema = Yup.object().shape({
//     sizes: Yup
//         .string()
//         .option('You must choose one option please')
//         .required('What size would you like')
// })
// _____________________________________________________________

// useEffect(() => {
//     formSchema.isValid(sAndS).then(valid => {
        
//     })
// })


// _____________________________________________________________




// _____________________________________________________________

    const incrementor = (evt) => {
        setHowMany(howMany + 1)

    }

    const deincrementor = (evt) => {
        setHowMany(howMany - 1)

    }


// _____________________________________________________________



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
                    {errors.sizes}
                    <label>Choice of Size
                        <select value={sAndS.sizes} name='sizes' onChange={handleChange}>
                            <option>here!</option>
                            <option name='small' value="small" onChange={handleChange}>Small</option>
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
                        <input type='radio' name='crust' value="original" checked={crusts.crust === 'original'} onChange={handleChange} />Original Crust
                        <input type='radio' name='crust' value="garlic" checked={crusts.crust === 'garlic'} onChange={handleChange} />Garlic Crust
                        <input type='radio' name='crust' value="bbq" checked={crusts.crust === 'bbq'} onChange={handleChange} />BBQ Sauce
                        <input type='radio' name='crust' value="spinach" checked={crusts.crust === 'spinach'} onChange={handleChange} />Spinach Alfredo
                    </label>
                </div>
                <br />
                <div>
                    <label>Add Toppings <br />
                        Choose up to 10 <br /><br />
                        <div>
                            <input type='checkbox' name='pepperoni' checked={sAndS.pepperoni} onChange={handleChange} />Pepperoni
                            <input type='checkbox' name='sausage' checked={sAndS.sausage} onChange={handleChange} />Sausage
                            <input type='checkbox' name='canadian' checked={sAndS.canadian} onChange={handleChange} />Canadian Bacon
                            <input type='checkbox' name='spicyItalian' checked={sAndS.spicyItalian} onChange={handleChange} />Spicy Italian Sausage
                            <input type='checkbox' name='grilled' checked={sAndS.grilled} onChange={handleChange} />Grilled Chicken
                            <input type='checkbox' name='onions' checked={sAndS.onions} onChange={handleChange} />Onions
                            <input type='checkbox' name='gPeppers' checked={sAndS.gPeppers} onChange={handleChange} />Green Peppers
                            <input type='checkbox' name='dicedTomatoes' checked={sAndS.dicedTomatoes} onChange={handleChange} />Diced Tomatoes
                            <input type='checkbox' name='bOlives' checked={sAndS.bOlives} onChange={handleChange} />Black Olives
                            <input type='checkbox' name='roastedGarlic' checked={sAndS.roastedGarlic} onChange={handleChange} />Roasted Garlic
                            <input type='checkbox' name='artichokeHearts' checked={sAndS.artichokeHearts} onChange={handleChange} />Artichoke Hearts
                            <input type='checkbox' name='pineapple' checked={sAndS.pineapple} onChange={handleChange} />Pineapple
                            <input type='checkbox' name='extraCheese' checked={sAndS.extraCheese} onChange={handleChange} />Extra Cheese
                            <input type='checkbox' name='fetaCheese' checked={sAndS.fetaCheese} onChange={handleChange} />Feta Cheese
                        </div>

                    </label>
                </div>
                <div>
                    <input type="checkbox" />Gluten Free Crust for $3.00
                </div>
                <div>
                    <label>
                        <h4>Special Instructions</h4>
                        <input type='text' name='extra' value={sAndS.extra} placeholder="Anything you want to add?" onChange={handleChange}/>
                    </label>
                </div>
                <div>
                    <h2>{howMany}</h2>
                    <button name='add' value='add' onClick={incrementor}>+</button>
                    <button name='minus' value='minus' onClick={deincrementor}>-</button>
                    <br /><br />
                    <button onClick={() => navigate('/Confirmation') } >Add to Order!</button>
                </div>
            </form>
        </>
    )
}

export default PizzaForm;