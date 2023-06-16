import React, {useState} from "react";
import "./index.css";
import axios from 'axios'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from './components/Homepage';
import Form from './components/Form';
import Confirmation from './components/Confirmation';
import * as Yup from 'yup'





const App = () => {
  const initialFormValues = {
    name: '',
    size: '',
    crust: '',
    toppings: {
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
    },
    specialInstructions: ''
}

const [formValues, setFormValues] = useState(initialFormValues);
const [quantity, setQuantity] = useState(1);
const [errors, setErrors] = useState({
    size: ''
})

// _________________________________________________________

const handleSubmit = (evt) => {
    evt.preventDefault();
    // TODO finish
    console.log('submitted')
    

    axios
    .post('`https://reqres.in/api/orders`')
    .then((res => {
      console.log(res.data);
    }))
    .catch(err => {
      console.log(err);
    })
}


// _________________________________________________________


const handleChange = (evt) => {
    const { name, type, value, checked } = evt.target;

    

    const correctValue = type === 'checkbox' ? checked : value;
  
    Yup
        .reach(formSchema, name)
        .validate(correctValue)
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
        setFormValues({ ...formValues, toppings: {...formValues.toppings, [name]: correctValue}  });
        
    } else {
    setFormValues({ ...formValues, [name]: correctValue });
        
    }
}
// _____________________________________________________________

const formSchema = Yup.object().shape({
    size: Yup
        .string()
        .required('What size would you like'),
    crust: Yup.string(),
    pepperoni: Yup.boolean(),
    sausage: Yup.boolean(),
    canadian: Yup.boolean(),
    spicyItalian: Yup.boolean(),
    grilled: Yup.boolean(),
    onions: Yup.boolean(),
    gPeppers: Yup.boolean(),
    dicedTomatoes: Yup.boolean(),
    bOlives: Yup.boolean(),
    roastedGarlic: Yup.boolean(),
    artichokeHearts: Yup.boolean(),
    pineapple: Yup.boolean(),
    extraCheese: Yup.boolean(),
    fetaCheese: Yup.boolean(),
    specialInstructions: Yup.string(),
    quantity: Yup.number()
});





  return (
    <>
    <BrowserRouter >
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
      <Link to='/' style={{backgroundColor: 'lightblue', fontSize: '2rem', color: 'black'}}>Home</Link>&nbsp;
      <Link to='' style={{backgroundColor: 'lightblue', fontSize: '2rem', color: 'black'}}>Help</Link>
    </nav>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Form' element={<Form handleChange={handleChange} formValues={formValues} setFormValues={setFormValues} handleSubmit={handleSubmit} errors={errors} quantity={quantity} setQuantity={setQuantity}/>} />
        <Route path='/Confirmation' element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
      
    </>
  );
};
export default App;
