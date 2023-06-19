import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string().trim().min(2, 'name must be at least 2 characters').required('name must be at least 2 characters'),
    size: yup.string(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadian: yup.boolean(),
    spicyItalian: yup.boolean(),
    grilled: yup.boolean(),
    onions: yup.boolean(),
    gPeppers: yup.boolean(),
    dicedTomatoes: yup.boolean(),
    olives: yup.boolean(),
    roastedGarlic: yup.boolean(),
    artichokeHearts: yup.boolean(),
    pineapple: yup.boolean(),
    extraCheese: yup.boolean(),
    fetaCheese: yup.boolean(),
    specialInstructions: yup.string(),
});

export default formSchema;