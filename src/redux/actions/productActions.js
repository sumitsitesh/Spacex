import fakestoreapi from '../../apis/fakeStoreApi';
import {ActionTypes} from '../constants/action-types';


export const fetchProducts =  () => {

    return async function(dispatch,getState){
        const response = await fakestoreapi.get("/products");
        dispatch({ type:ActionTypes.FETCH_PRODUCTS, payload:response.data})
    }
    // console.log("response",response);
    // return {
    //     type:ActionTypes.SET_PRODUCTS,
    //     payload:response,
    // };
}

export const fetchProduct =  (id) => {

    return async function(dispatch){
        const response = await fakestoreapi.get(`/products/${id}`);
        dispatch({ type:ActionTypes.SELECTED_PRODUCTS, payload:response.data})
    }
}

export const setProducts = (products) => {
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    };
}

export const selectedProduct = (product) => {
    return {
        type:ActionTypes.SELECTED_PRODUCTS,
        payload:product,
    };
}

export const removeSelectedProduct = () => {
    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCTS,
    };
}