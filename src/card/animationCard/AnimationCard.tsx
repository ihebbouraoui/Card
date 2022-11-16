import React, {useEffect, useRef, useState} from "react"
import './animationCard.scss'
import prev from "../../assest/prev.png";
import './../cardTypes/cardEshop/eShop.css'

const AnimationCard = () => {
    const productList = [
        {
            "id": 1,
            "title": "Microsoft Surface Laptop 4",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "price": 1499,
            "type": "e_shop",
            "stock": 68,
            "brand": "Microsoft Surface",
            "category": "laptops",
            "images": [
                "https://i.ebayimg.com/images/g/Gk4AAOSw95tjDuIL/s-l1600.jpg",
                "https://i.ebayimg.com/images/g/z8kAAOSwt7FjDuIW/s-l500.jpg",
                "https://i.ebayimg.com/images/g/tJwAAOSwAj5jDuIZ/s-l500.jpg",
                "https://i.ebayimg.com/images/g/XqYAAOSwx2ZjDuIb/s-l500.jpg"

            ]
        },

    ]
    const [runAnimation, setAnimation] = useState<boolean>(false)
    const [currentImage, setCurrentImage] = useState<number>(0)
    const [currentQte, setCurrentQte] = useState<number>(1)
    const [stopAnimation,setStopAnimation]=useState<boolean>()
    const addQte = () => {
        setCurrentQte(currentQte + 1)
    }
    const subQte = () => {
        if (currentQte !== 1) {
            setCurrentQte(currentQte - 1)
        }
    }
    const changePosition = () => {
      setAnimation(true)
        setStopAnimation(false)
    }
    const resetPosition = () => {
        setAnimation(false)
    }
    const getNextImage = () => {
        if (currentImage + 1 === productList[0].images.length) {
            setCurrentImage(0)
        } else {
            setCurrentImage(currentImage + 1)
        }
    }
    const getPrevImage = () => {
        if (currentImage === 0) {
            setCurrentImage(0)
        } else {
            setCurrentImage(currentImage - 1)
        }
    }
    useEffect(()=>{
        if (stopAnimation){
            setAnimation(false)

        }
    },[runAnimation])
    return (
        <div className={'card-Container'} >
            {
                runAnimation && <span className={'span-close'} onClick={()=>setAnimation(false)}> X </span>

            }
            <div className={'header'}>
                <img onClick={ changePosition}  className={`image ${runAnimation}`} alt={''}
                     src={productList[0].images[currentImage]}/>

                <img onClick={getNextImage} className={`next ${runAnimation}`} src={prev} alt={''}/>
                {
                    currentImage !== 0 && (
                        <img onClick={getPrevImage} className={`prev ${runAnimation}`} src={prev} alt={''}/>

                    )
                }
            </div>

            <div onClick={ changePosition} id={'body'} className={`body ${runAnimation}`}>
                <div className={'details'}>
                    <span>
                    PC De Bureau Gamer EROS / I5 10400F / GTX 1050 Ti Twin X2 4G / 8 Go
                    </span>
                </div>
                <div className={'detail-container'}>
                      <span className={'all_details'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum
                </span>
                </div>
                <div className={'body-footer'}>
                    <span className={'price'}>
                        PRICE : {productList[0].price * currentQte}$
                </span>

                    <button className={'btn-add'}>
                        add to cart
                    </button>
                    <div className={'count'}>
                        <div className={'stock-span-add-sub'}>
                            <span onClick={subQte} style={{fontSize: '20px'}}>-</span>
                        </div>
                        <span style={{fontSize: '20px'}}> {currentQte}</span>
                        <div className={'stock-span-add-sub'}>
                            <span onClick={addQte} style={{fontSize: '20px'}}> + </span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default AnimationCard