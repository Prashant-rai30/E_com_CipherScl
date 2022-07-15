import React, { useEffect, useState } from 'react'
import './SingleProduct.css';

function SingleProductPage({productId}) {

    const [productData, setProductData] = useState("")

    console.log("productId", productId)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then(data => setProductData(data))
    }, [])

  return (
    <div className='singleproductpage_container'>
        <div className='singleproductpage_left_container'>
            <img src={productData.image} />
        </div>
        <div className='singleproductpage_right_container'>
            <p className='singleproductpage_right_title'>{productData.title}</p>
            <p className='singleproductpage_right_desc'>{productData.description}</p>
            <p className='singleproductpage_right_price'>₹{productData.price}</p>
            <button className='singleproductpage_right_button'>ADD TO BAG</button>
        </div>
    </div>
  )
}

export default SingleProductPage