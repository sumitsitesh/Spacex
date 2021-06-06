import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './productComponent'
import { setProducts } from '../redux/actions/productActions';

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        // const response = await axios.get("https://api.nasa.gov/planetary/apod?api_key=UL1jejLNIpnw7FZXB3xMGosb7zbLaOS8ci2xON7D").catch((err) => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("Error", err)
        });
        console.log(response.status);
        dispatch(setProducts(response.data));
    };
    useEffect(() => {
        fetchProducts();
    }, [])

    return (
       
            <div className='ui grid container'>
                <ProductComponent />
            </div>
       

    );
};

export default ProductListing;