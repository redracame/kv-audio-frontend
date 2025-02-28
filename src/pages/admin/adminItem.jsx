import axios from "axios";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";



export default function AdminItemsPage() {
  const [items, setItems] = useState([]);//methanata empty array ekak dhenna items nathi ptan gannakota nisa
  const [itemsLoaded , setItemsLoaded] = useState(false);
  const navigate = useNavigate()
  
  useEffect(() => {

    if(!itemsLoaded){
      const token = localStorage.getItem("token");
      axios
        .get("http://localhost:3000/api/products", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log("Fetched Data:", res.data);
          setItems(res.data);
          setItemsLoaded(true);
        })
        .catch((err) => {
          console.error("Error fetching products:", err);
        });
    }
    
  }, [itemsLoaded]);

  const handleDelete = (key) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setItems(items.filter((item) => item.key !== key));
      const token = localStorage.getItem("token");
      axios
        .delete(`http://localhost:3000/api/products/${key}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res.data);
          setItemsLoaded(false);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="w-full p-4 relative flex justify-center items-center flex-col">
      {!itemsLoaded &&<div className="border-4 my-4 border-b-green-500 rounded-full animate-spin w-[100px] h-[100px]"></div>}
      {itemsLoaded && <div className="overflow-x-auto"></div>}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white text-left">
              <th className="p-4">Key</th>
              <th className="p-4">Name</th>
              <th className="p-4">Price</th>
              <th className="p-4">Category</th>
              <th className="p-4">Dimensions</th>
              <th className="p-4">Availability</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((product) => (
              <tr key={product.key} className="border-b hover:bg-gray-100">
                <td className="p-4">{product.key}</td>
                <td className="p-4 font-medium">{product.name}</td>
                <td className="p-4">${product.price}</td>
                <td className="p-4">{product.category}</td>
                <td className="p-4">{product.dimensions}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      product.availability === "In Stock" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {product.availability}
                  </span>
                </td>
                <td className="p-4 flex gap-3">
                  <button
                     onClick={() =>{
                          navigate(`/admin/items/edit`,{state:product})
                     }}
                    className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-1 rounded">
                  
                    Edit
                    </button>
                  <button
                    onClick={() => handleDelete(product.key)}
                    className="bg-red-500 hover:bg-red-700 text-white px-4 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/admin/items/add">
        <CiCirclePlus className="text-[80px] fixed bottom-6 right-6 text-green-600 hover:text-green-800 cursor-pointer transition transform hover:scale-110" />
      </Link>
    </div>
  );
}