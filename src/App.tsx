import React from 'react';
import './App.css';
import Card from "./card/Card";
export  interface product {
    id:number,
    images?:Array<string>,
    description?:string,
    title?:string
    price?:number,
    stock?:number,
    brand?:string,
    category?:string
    type:string



}
const productList = [
    {
        "id": 1,
        "title": "Microsoft Surface Laptop 4",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "price": 1499,
        "type":"e_shop",
        "stock": 68,
        "brand": "Microsoft Surface",
        "category": "laptops",
        "images": [
            "https://dummyjson.com/image/i/products/8/1.jpg",
            "https://dummyjson.com/image/i/products/8/2.jpg",
            "https://dummyjson.com/image/i/products/8/3.jpg",
            "https://dummyjson.com/image/i/products/8/4.jpg",
        ]
    },
]


function App() {
  return (
    <div className="App" style={{alignItems:'center'}}>
        {productList.map((item:product)=>(
            <Card key={item.id.toString()} item={item} type={item.type}  />
        ))}
    </div>
  );
}

export default App;
