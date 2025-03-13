import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddItemPage() {
    const [productKey, setProductKey] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productCategory, setProductCategory] = useState("audio");
    const [productDimensions, setProductDimensions] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const navigate = useNavigate();
    
    async function handleAddItem() {
        console.log(productKey, productName, productPrice, productCategory, productDimensions, productDescription);
        const token = localStorage.getItem("token");

        if (token) {
            try {
                const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/products`, {
                    key: productKey,
                    name: productName,
                    price: productPrice,
                    category: productCategory,
                    dimensions: productDimensions,
                    description: productDescription
                }, {
                    headers: { Authorization: "Bearer " + token }
                });
                toast.success(result.data.message);
                navigate("/admin/items");
            } catch (err) {
                toast.error(err.response?.data?.error || "An error occurred");
            }
        } else {
            toast.error("You are not authorized to add items");
        }
    }

    return (
        <div className="w-full h-screen flex flex-col items-center p-4">
            <h1 className="text-lg font-bold mb-4">Add Items</h1>
            <div className="w-[400px] border p-4 flex flex-col items-center gap-3 bg-white shadow-lg rounded-md">
                <input
                    onChange={(e) => setProductKey(e.target.value)}
                    value={productKey}
                    type="text"
                    placeholder="Product Key"
                    className="border p-2 w-full rounded text-black bg-white placeholder-gray-500"
                />
                <input
                    onChange={(e) => setProductName(e.target.value)}
                    value={productName}
                    type="text"
                    placeholder="Product Name"
                    className="border p-2 w-full rounded text-black bg-white placeholder-gray-500"
                />
                <input
                    onChange={(e) => setProductPrice(Number(e.target.value))}
                    value={productPrice}
                    type="number"
                    placeholder="Product Price"
                    className="border p-2 w-full rounded text-black bg-white placeholder-gray-500"
                />
                <select
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                    className="border p-2 w-full rounded bg-white text-black"
                >
                    <option value="audio">Audio</option>
                    <option value="lights">Lights</option>
                </select>
                <input
                    onChange={(e) => setProductDimensions(e.target.value)}
                    value={productDimensions}
                    type="text"
                    placeholder="Product Dimensions"
                    className="border p-2 w-full rounded text-black bg-white placeholder-gray-500"
                />
                <textarea
                    onChange={(e) => setProductDescription(e.target.value)}
                    value={productDescription}
                    placeholder="Product Description"
                    className="border p-2 w-full rounded text-black bg-white placeholder-gray-500"
                />
                <button onClick={handleAddItem} className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600">
                    Add
                </button>
                <button onClick={() => navigate("/admin/items")} className="bg-red-500 text-white p-2 w-full rounded hover:bg-red-600">
                    Cancel
                </button>
            </div>
        </div>
    );
}
