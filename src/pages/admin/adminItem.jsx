import axios from "axios";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const sampleArr = [
  {
    key: "prd001",
    name: "Wireless Headphones",
    price: 150,
    category: "Electronics",
    dimensions: "20x15x5 cm",
    description: "High-quality wireless headphones with noise cancellation.",
    availability: "In Stock",
    image: ["https://source.unsplash.com/600x400/?headphones"],
  },
  {
    key: "prd002",
    name: "Gaming Mouse",
    price: 50,
    category: "Accessories",
    dimensions: "12x6x4 cm",
    description: "Ergonomic gaming mouse with RGB lighting and adjustable DPI.",
    availability: "In Stock",
    image: ["https://source.unsplash.com/600x400/?mouse"],
  },
  {
    key: "prd003",
    name: "Mechanical Keyboard",
    price: 100,
    category: "Accessories",
    dimensions: "45x15x4 cm",
    description: "RGB backlit mechanical keyboard with blue switches.",
    availability: "Out of Stock",
    image: ["https://source.unsplash.com/600x400/?keyboard"],
  },
];

export default function AdminItemsPage() {
  const [items, setItems] = useState(sampleArr);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/api/products", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("Fetched Data:", res.data);
        setItems(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  const handleDelete = (key) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setItems(items.filter((item) => item.key !== key));
      const token = localStorage.getItem("token");
      axios.delete(`http://localhost:3000/api/products/$(key)`, {
         headers: {Authorization: `Bearer ${token}`},
      }).then(
            (res) => {
                console.log(res.data);
                window.location.reload();
            }
      ).catch(
        (err) => {
          console.error(err);
        }
      )
      }
    
  };

  return (
    <div className="p-5">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 border">Key</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Price</th>
              <th className="p-3 border">Category</th>
              <th className="p-3 border">Dimensions</th>
              <th className="p-3 border">Availability</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((product) => (
              <tr key={product.key} className="text-center border hover:bg-gray-100 transition">
                <td className="p-3 border">{product.key}</td>
                <td className="p-3 border">{product.name}</td>
                <td className="p-3 border">${product.price}</td>
                <td className="p-3 border">{product.category}</td>
                <td className="p-3 border">{product.dimensions}</td>
                <td className="p-3 border">
                  <span className={`px-2 py-1 rounded text-white ${product.availability === "In Stock" ? "bg-green-500" : "bg-red-500"}`}>
                    {product.availability}
                  </span>
                </td>
                <td className="p-3 border flex justify-center gap-3">
                  <Link to={`/admin/items/edit/${product.key}`} className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(product.key)}
                    className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded"
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
        <CiCirclePlus className="text-[100px] fixed bottom-5 right-5 text-green-600 hover:text-green-800 cursor-pointer transition" />
      </Link>
    </div>
  );
}
