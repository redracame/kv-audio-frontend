import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export default function UpdateItemPage() {
    const location = useLocation();
    const navigate = useNavigate();

    // Ensure safe access to location.state
    const product = location.state || {};

    // State variables with default values
    const [productKey, setProductKey] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productCategory, setProductCategory] = useState("audio");
    const [productDimensions, setProductDimensions] = useState("");
    const [productDescription, setProductDescription] = useState("");

    // Ensure values load properly
    useEffect(() => {
        setProductKey(product.key || "");
        setProductName(product.name || "");
        setProductPrice(product.price || "");
        setProductCategory(product.category || "audio");
        setProductDimensions(product.dimensions || "");
        setProductDescription(product.description || "");
    }, [product]);

    async function handleUpdateItem() {
        console.log(productKey, productName, productPrice, productCategory, productDimensions, productDescription);
        const token = localStorage.getItem("token");

        if (token) {
            try {
                const result = await axios.put(
                    `${import.meta.env.VITE_BACKEND_URL}/api/products/${productKey}`, // ✅ Fixed URL
                    {
                        name: productName,
                        price: productPrice,
                        category: productCategory,
                        dimensions: productDimensions,
                        description: productDescription,
                    },
                    {
                        headers: { Authorization: "Bearer " + token },
                    }
                );
                toast.success(result.data.message);
                navigate("/admin/items");
            } catch (err) {
                toast.error(err.response?.data?.error || "Update failed");
            }
        } else {
            toast.error("You are not authorized to update items");
        }
    }

    return (
        <div className="w-full h-screen flex flex-col items-center p-4">
            <h1 className="text-lg font-bold mb-4">Update Item</h1>
            <div className="w-[400px] border p-4 flex flex-col items-center gap-3 bg-white shadow-lg rounded-md">
                <input
                    disabled
                    value={productKey}
                    type="text"
                    placeholder="Product Key"
                    className="border p-2 w-full rounded bg-gray-100 text-black" // 🔧 Ensures visible text
                />
                <input
                    onChange={(e) => setProductName(e.target.value)}
                    value={productName}
                    type="text"
                    placeholder="Product Name"
                    className="border p-2 w-full rounded text-black" // 🔧 Ensures visible text
                />
                <input
                    onChange={(e) => setProductPrice(e.target.value)}
                    value={productPrice}
                    type="number"
                    placeholder="Product Price"
                    className="border p-2 w-full rounded text-black"
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
                    className="border p-2 w-full rounded text-black"
                />
                <textarea
                    onChange={(e) => setProductDescription(e.target.value)}
                    value={productDescription}
                    placeholder="Product Description"
                    className="border p-2 w-full rounded text-black"
                />
                <button onClick={handleUpdateItem} className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600">
                    Update Item
                </button>
                <button onClick={() => navigate("/admin/items")} className="bg-red-500 text-white p-2 w-full rounded hover:bg-red-600">
                    Cancel
                </button>
            </div>
        </div>
    );
}
