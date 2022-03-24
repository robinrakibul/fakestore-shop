import React, { useEffect, useState } from 'react';

const AllProducts = () => {

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
    },[products]);

    return (
        <div>
            <h1>All Products</h1>
        </div>
    );
};

export default AllProducts;