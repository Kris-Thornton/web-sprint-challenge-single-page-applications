import React, {useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import axios from 'axios'; 
import formSchema from './formSchema';
import * as yup from 'yup';
import Form from './pizza';


const initialFormValues = {
    name: '',
    size: '',
    toppings: {
        pepperoni: false,
        sausage: false,
        olives: false,
        mushrooms: false
    },
    specialInstructions:''
};

const initialFormErrors = {
    name: ''
    };


const App = () => {

    const [formValues, setFormValues] = useState(initialFormValues);
    const [errors, setErrors] = useState(initialFormErrors)
    const [pizzas, setPizzas] = useState([]);



const handleChange = (evt) => {
    const {name, type, value, checked} = evt.target;

    const checkedValue = type === 'checkbox' ? checked : value;

yup
    .reach(formSchema, name)
    .validate(checkedValue)
    .then(valid => {
        setErrors({
            ...errors, [name]: ''
        });
    })
    .catch(err => {
        setErrors({
            ...errors, [name]: err.errors[0]
        });
    });


    if(type === 'checkbox') {
        setFormValues({...formValues, toppings: {...formValues.toppings, [name]: checkedValue }})
    } else {
        setFormValues({...formValues, [name]: checkedValue});
    }



};




    


const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submitted')


    const newPizza = {
        name: formValues.name.trim(),
        size: formValues.size.trim(),
        sauce: formValues.sauce,
        instructions: formValues.instructions,
        toppings: Object.keys(formValues.toppings)
          .filter(topping => formValues.toppings[topping] === true)
      }
  
      axios.post('https://reqres.in/api/orders', newPizza)
        .then(res => {
          setPizzas([res.data, ...pizzas])
  
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          setFormValues(initialFormValues)
        })
    }






    return (
        <div>
            <h1>My App</h1>
            <nav>
                <Link to='/'>Home</Link>&nbsp;
                <Link to='/pizza' id='order-pizza'>Order Pizza</Link> 
            </nav> 
            
            <Routes>
                <Route path='/' />
                <Route path='/pizza' element={<Form 
                handleChange={handleChange}
                formValues={formValues}
                setFormValues={setFormValues}
                handleSubmit={handleSubmit}
                errors={errors}
                setFormErrors={setErrors}
                />}/>
            </Routes>
        </div>

    )
}

export default App