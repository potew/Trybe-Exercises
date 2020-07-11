import { NEW_FORM } from "./reducer";

// Como dito anterioremente, nossa action, por convenção, deve ser um objeto. Esse objeto pode possuir apenas a key type ou mais outras keys, caso seja conveniente. Note que, no caso acima, criamos também uma key value, que guardará o valor recebido pela action.
// Teoria bloco 17.2
export const addAssignment = (value) => ({ type: 'ADD_ELEMENT', value });


// Exercício peer / teoria bloco 17.3
export const formAction = (state) => {
    return {
    type: NEW_FORM, 
    ...state
    }
};