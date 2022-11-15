import React, {useState} from "react";
import {product} from "../../../App";
import './eShop.css'
import prev from './../../../assest/prev.png'
const CardEshop:React.FC<{item:product}> = ({item})=>{
    const [currentImage,setCurrentImage]=useState<number>(0)
    const [currentQte,setCurrentQte]=useState<number>(1)
    const addQte =( ) =>{
        setCurrentQte(currentQte+1)
    }
    const subQte =( ) =>{
        if (currentQte !== 1){
            setCurrentQte(currentQte-1)
        }
    }

    const getNextImage=()=>{
        if (currentImage+1 === item?.images?.length){
            setCurrentImage(0)
        }else{
            setCurrentImage(currentImage+1)
        }
    }
    const getPrevImage=()=>{
        if (currentImage === 0){
            setCurrentImage(0)
        }else{
            setCurrentImage(currentImage-1)
        }
    }
    return(
        <div className={'cardContainer'}>
            <div className={'card-header'}>
                <img alt={''} src={item.images && item?.images[currentImage]}/>
                <img onClick={getNextImage} className={'next-arrow'} src={prev} alt={''}/>
                {
                    currentImage !== 0 && (
                        <img onClick={getPrevImage} className={'prev-arrow'} src={prev} alt={''}/>

                    )
                }
            </div>
            <div className={'card-body'}>
                 <div className={'body-header'}>
                     <span className={'header-title'}>{item?.title}</span>
                     <span className={'header-brand'}>{item?.brand}</span>
                 </div>
                <div className={'body-container'}>
                    <span className={'body-description'}> {item.description}</span>
                </div>
            </div>
            <div className={'card-footer'}>
                <div className={'stock'}>
                    <span style={{backgroundColor:item?.stock!==0 ? '#00800017' : '#ff00004d'}}  className={'available-stock'}> {item?.stock !== 0 ? 'EN STOCK ' : 'OFF STOCK'}</span>
                </div>
                <div className={'add-product'}>
                    <span className={'btn-add'}> ADD TO CART</span>
                </div>
                <div className={'qte-product'}>
                    <div className={'stock-span-add-sub'}>
                        <span onClick={subQte} style={{fontSize:'20px'}}>-</span>
                    </div>
                    <span style={{fontSize:'20px'}}> {currentQte}</span>
                    <div className={'stock-span-add-sub'}>
                        <span onClick={addQte} style={{fontSize:'20px'}}> + </span>
                    </div>
                </div>
                <div className={'price-contain'}>
                    <span className={'price'}> { item.price && item?.price * currentQte} €</span>
                </div>
            </div>
        </div>
    )
}
export default CardEshop