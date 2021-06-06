import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map(product => {
        let { title, id, price, category, image } = product;
        return (
            <div className='four wide column' key={id}>
                <Link to={`/product/${id}`}>
                <div className='ui link cards'>
                    <div className='card'>
                        <div className='image'>
                            <img className='ui fluid image' src={image} alt={title} />
                             </div>
                        <div className='content'>
                            <div className='header'>{title}</div>
                            <div className='meta price'>£ {price}</div>
                            <div className='meta'>{category}</div>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        );
    })
    // const {id,title} = products[0];
    return (
        <>{renderList}</>
    );
};

export default ProductComponent;