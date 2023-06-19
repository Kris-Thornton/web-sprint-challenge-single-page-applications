import React, {useState} from "react"




const Form = (props) => {

const {
    formValues,
    setFormValues,
    handleChange,
    handleSubmit,
    errors,
    setErrors
} = props;



    return (
        <>
        <form id='pizza-form' onSubmit={handleSubmit}>
            <h1>Order Your Pizza Here!</h1>
            <div>
                <label>Name:
                    <input type='text' id='name-input' name='name' onChange={handleChange}/>
                </label>
                {errors.name.length > 0 && <p>{errors.name}</p>}
                <br />
                <label>Crust Size:
                    <select id='size-dropdown' name='size' onChange={handleChange}>
                        <option></option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </label>
                <br />
                <label>Toppings:<br />
                    Pepperoni<input type='checkbox' name='pepperoni' 
                    checked={formValues.toppings.pepperoni}
                    onChange={handleChange}/>
                    Sausage<input type='checkbox' name='sausage' 
                    checked={formValues.toppings.sausage}
                    onChange={handleChange}/>
                    Olives<input type='checkbox' name='olives' 
                    checked={formValues.toppings.olives}
                    onChange={handleChange}/>
                    Mushrooms<input type='checkbox' name='mushrooms' 
                    checked={formValues.toppings.mushrooms}
                    onChange={handleChange}/>
                </label>
                <br />
                <label>Special Instructions:
                    <input type='text' name='specialInstructions'  id='special-text' onChange={handleChange}/>
                </label>
                <button id='order-button'>Add to Order</button>
            </div>
        </form>
    
        </>
    )
}

export default Form