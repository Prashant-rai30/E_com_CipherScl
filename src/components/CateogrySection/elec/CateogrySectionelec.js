import React, { useEffect, useState } from 'react'
import "./CateogrySectionelec.css"
// import { useNavigate } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar';

function CateogrySection() {
  // const navigate = useNavigate();

  // function navigateToProductPage(id) {
  //     setProductId(id)
  //     navigate(`/electronics/${id}`)
  // }
  const [cateogryData, setCateogryData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then(res => res.json())
      .then(data => setCateogryData(data))

  }, [])
  return (


    <div >
      <Navbar />
      <div className='cont_cat'>
        {/* <button onClick={(key) => navigateToProductPage(key)}>Click me</button> */}
        

        {cateogryData.map((value, key) => (
          <div className='cont'>
            <div className='cont_img' >
            <img src={value.image} />

            <div className='cont_data'><p className='p_title'> {value.title}</p>
            <p className='price'>&#8377;{value.price}</p>
            <p className='rate'> {value.rating.rate}&#10032;</p>
            <p className='descr'> {value.description}</p>
            
            </div></div></div>

      ))}

      </div>

    </div>
  )
}

export default CateogrySection