import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import "./AllProducts.css";

const AllProducts = (props) => {
    const { setCartCount } = props;
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[products]);

    return (
        <div>
            <h1 className='text-warning mb-5 mt-3'>Fake Store Shop</h1>
            
            <div className="row container">
            {products.map((props)=>(<SingleProduct key={props.id} product={props} setCartCount={setCartCount}></SingleProduct>))}
            </div>

        </div>
    );
};

export default AllProducts;