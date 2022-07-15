import React from 'react'
import {  useNavigate } from 'react-router-dom'
import "./ProductSection.css"
import mens from "../../images/Product Section/mens.jpg"
import women from "../../images/Product Section/women.jpg"
import jewellery from "../../images/Product Section/jewellery.jpg"
import electronics from "../../images/Product Section/elec.jpg"
import Navbar from '../Navbar/Navbar'

function ProductSection() {

    const navigate= useNavigate();
    const navigate1= useNavigate();
    const navigate2= useNavigate();
    const navigate3= useNavigate();

    return (
        <>
            <Navbar />
            <div className='section_container'>
                <p className='header' >Let's Shop</p>
                <div className='topclass'>

                <div className='section_card' onClick={()=>navigate('electronics')} >
                    <div className='section_card_img'  >
                        <img src={electronics} alt="logo" />
                        <p className='section_card_p'>ELECTRONICS</p>
                    </div></div>
                    
                    <div className='section_card' onClick={()=>navigate1('mens-clothing')}>
                          <div className='section_card_img'>
                            <img src={mens} alt="logo" />
                            <p className='section_card_p' >MENS'S CLOTHING</p>
                        </div></div>
                    
                    <div className='section_card' onClick={()=>navigate2('jewellery')}>
                        <div className='section_card_img'>
                            <img src={jewellery} alt="logo" />
                             <p className='section_card_p'>JEWELLERY</p>
                        </div>
                    </div>
                    <div className='section_card' onClick={()=>navigate3('womens-clothing')}>
                    <div className='section_card_img'>
                        <img src={women} alt="logo" />

                        <p className='section_card_p'>WOMEN'S CLOTHING</p></div>
                    </div>
                </div>
                </div>



            </>
    )
}

export default ProductSection