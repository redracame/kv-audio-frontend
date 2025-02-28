import axios from "axios";
import { useLayoutEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

export default function UpdateItemPage() {
    const location = useLocation()

    console.log(location)

    const [productKey, setProductKey] = useState(location.state.key);
    const [productName, setProductName] = useState(location.state.name);
    const [productPrice, setProductPrice] = useState(location.state.price);
    const [productCategory, setProductCategory] = useState(location.state.category);
    const [productDimensions, setProductDimensions] = useState(location.state.dimensions);
    const [productDescription, setProductDescription] = useState(location.state.description);
    const navigate = useNavigate()
    
    
    async function handleAddItem(){
        console.log(productKey, productName,productPrice,productCategory,productDimensions,productDescription);
         const token = localStorage.getItem("token")

          if(token){
              try{
              const result= await axios.put("http://localhost:3000/api/products/" + productKey,{
                     
                     name :productName,
                     price : productPrice,
                     category : productCategory,
                     dimensions : productDimensions,
                     description : productDescription
              
              },{
                       headers : {
                            Authorization: "Bearer " + token

                       },
              });
              toast.success(result.data.message);
              navigate("/admin/items")


              }catch (err) {
                    
                     toast.error(err.response.data.error);
              }
       }else{
              toast.error("You are not authorized to add items")
          }
          
    }

    return (
        <div className="w-full h-full flex flex-col items-center p-4">
            <h1 className="text-lg font-bold mb-4">Update Item</h1>
            <div className="w-[400px] border  flex flex-col items-center p-4 gap-2 rounded-lg shadow-md">
                <input 
                    disabled
                    onChange={(e) => setProductKey(e.target.value)} 
                    value={productKey} 
                    type="text" 
                    placeholder="Product Key" 
                    className="border p-2 w-full"
                />
                <input 
                    onChange={(e) => setProductName(e.target.value)} 
                    value={productName} 
                    type="text" 
                    placeholder="Product Name" 
                    className="border p-2 w-full"
                />
                <input 
                    onChange={(e) => setProductPrice(e.target.value)} 
                    value={productPrice} 
                    type="Number" 
                    placeholder="Product Price" 
                    className="border p-2 w-full"
                />
                <select 
                    value={productCategory} 
                    onChange={(e) => setProductCategory(e.target.value)}
                    className="border p-2 w-full"
                >
                    <option value="audio">Audio</option>
                    <option value="lights">Lights</option>
                </select>
                <input 
                    onChange={(e) => setProductDimensions(e.target.value)} 
                    value={productDimensions} 
                    type="text" 
                    placeholder="Product Dimensions" 
                    className="border p-2 w-full"
                />
                <input 
                    onChange={(e) => setProductDescription(e.target.value)} 
                    value={productDescription} 
                    type="text" 
                    placeholder="Product Description" 
                    className="border p-2 w-full"
                />
                <button onClick={handleAddItem} className="bg-blue-500 text-white p-2 w-full rounded">Update Item</button>
                <button onClick={()=>{ navigate("/admin/items")}} className="bg-red-500 text-white p-2 w-full rounded">Cancel</button>
            </div>
        </div>
    );
}
