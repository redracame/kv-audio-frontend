const sampleArr = [
    {
      key: "prd001",
      name: "Wireless Headphones",
      price: 150,
      category: "Electronics",
      dimensions: "20x15x5 cm",
      description: "High-quality wireless headphones with noise cancellation.",
      availability: "In Stock",
      image: ["https://source.unsplash.com/600x400/?headphones"]
    },
    {
      key: "prd002",
      name: "Gaming Mouse",
      price: 50,
      category: "Accessories",
      dimensions: "12x6x4 cm",
      description: "Ergonomic gaming mouse with RGB lighting and adjustable DPI.",
      availability: "In Stock",
      image: ["https://source.unsplash.com/600x400/?mouse"]
    },
    {
      key: "prd003",
      name: "Mechanical Keyboard",
      price: 100,
      category: "Accessories",
      dimensions: "45x15x4 cm",
      description: "RGB backlit mechanical keyboard with blue switches.",
      availability: "Out of Stock",
      image: ["https://source.unsplash.com/600x400/?keyboard"]
    },
    {
      key: "prd004",
      name: "Smart Watch",
      price: 200,
      category: "Wearables",
      dimensions: "5x5x1 cm",
      description: "Feature-packed smartwatch with heart rate monitor and GPS.",
      availability: "In Stock",
      image: ["https://source.unsplash.com/600x400/?smartwatch"]
    },
    {
      key: "prd005",
      name: "Bluetooth Speaker",
      price: 75,
      category: "Audio",
      dimensions: "10x10x5 cm",
      description: "Portable Bluetooth speaker with deep bass and waterproof design.",
      availability: "In Stock",
      image: ["https://source.unsplash.com/600x400/?speaker"]
    }
  ];
  
import axios from "axios";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function AdminItemsPage(){
  const[items,setItems]= useState(sampleArr)

      const token = localStorage.getItem("token");
      axios.get("http://localhost :3000/api/products",{headers:{"Authorization" : `Bearer ${token}` }}).then((res)=> {
        console.log(res.data)
        //setItems(res.data)
      }).catch((err)=>{
           console.log(err)
      })
    


      return(
        <div
            className= "w-full h-full relative">
              <table>
                  <thead>
                     <th>Key</th>
                     <th>Name</th>
                     <th>Price</th>
                     <th>Category</th>
                     <th>Dimensions</th>
                     <th>Availability</th>
                     </thead> 
                     <tbody>
                     {
                        items.map((product)=>{
                           console.log(product)
                           return (
                             <tr key={product.key}>
                                <td>{product.key}</td>
                                <td>{product.name}</td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.dimensions}</td>
                                <td>{product.availability }</td>

                             </tr>
                           )
                        })
                     }
                     </tbody>
                     </table>
            <Link to="/admin/items/add">
             <CiCirclePlus className="text-[100px] absolute right-2 bottom-2 hover:text-red-900 "/> 
             </Link>  
            </div>

    )


}