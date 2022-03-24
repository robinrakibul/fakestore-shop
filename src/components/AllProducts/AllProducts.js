import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import "./AllProducts.css";

const AllProducts = () => {

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[products]);

    return (
        <div>
            <h1>All Products</h1>
            
            <div className="row container">
            {products.map((props)=>(<SingleProduct key={props.id} product={props}></SingleProduct>))}
            </div>

        </div>
    );
};

export default AllProducts;