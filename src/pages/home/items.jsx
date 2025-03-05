import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "../../components/productCard"

export default function Items() {
     const[state,setState] = useState("loading")// loading,success,error
     const [items, setItems] = useState([]) //empty array ekak dhama apita wenadha wage sample array we don't use we directly connect backend

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`)
            .then((res) => {
                 console.log(res.data)
                setItems(res.data)//respond eke thiyanna data tika mekata send karanna
               setState("success")
            }).catch((err)=>{
                toast.error(err?.response?.data?.error||"An error occured")
                setState("error")
            })
           
    }, [])

    return (
        <div className="w-full h-full flex flex-wrap justify-center pt-[50px]">
            {
                state=="loading" &&
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-[50px] h-[50px] border-4 rounded-full border-t-fuchsia-600 animate-spin"></div>
                </div>
}
{
     state=="success" &&
     items.map((item) => {
        return(
            <ProductCard key={item.key} item={item}/>
        )
     })
} 
            
        </div>
    )
}
