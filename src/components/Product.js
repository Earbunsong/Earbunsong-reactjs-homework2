import { useEffect, useState } from "react";
import ProductCard from "./utils/ProductCard";
export default function Product(){
    const [data,setData] = useState([]);
    useEffect(() =>{
    async function fetchData(){
        const res=await fetch("https://api.escuelajs.co/api/v1/products");
        const json=await res.json();
        console.log(json.data);
        setData(json);
    }
    fetchData();
},[])
    return(
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((item,index)=>(
            <ProductCard description={item.description} images={item.images[0]} title={item.title} index={index} price={item.price}/>
        ))}
        </div>
    )
}