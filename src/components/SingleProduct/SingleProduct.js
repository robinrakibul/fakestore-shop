import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import "./SingleProduct.css";

const SingleProduct = (props) => {
    const {setCartCount} = props;
    return (
        <div className='col-md-4' data-aos="flip-right"  data-aos-easing="linear"
        data-aos-duration="1000">
            <div className="card p-3 border">
                <img className="text-center w-50 h-50 m-auto" src={props.product.image} alt="" />
            <h1>{props.product.title.slice(0,10)}</h1>

            <div className='d-flex justify-content-around'>
            <button className='btn btn-success' onClick={setCartCount}>Add to Cart</button>
            <button className='btn btn-danger'>Delete</button>
            {/* <button className='btn btn-info'>Details</button> */}
            <ReactModal product={props.product}></ReactModal>
            </div>

            </div>
        </div>
    );
};

export default SingleProduct;