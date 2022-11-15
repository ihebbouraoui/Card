import React from "react";
import {product} from "../App";
import CardEshop from "./cardTypes/cardEshop/CardEshop";

const Card:React.FC<{item:product,type:string}> = ({item,type})=>{
    const renderComponent=(type:string)=>{
        switch (type){
            case  'e_shop' :
                return <CardEshop item={item}/>
            default:
                return 'azeazeazezaeaze'
        }
    }
    return(
        <div>
            {renderComponent(type)}
        </div>
    )
}
export default Card