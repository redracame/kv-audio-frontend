export default function ProductCard(props) {
     const item = props.item;
   
     return (
       <div className="max-w-[200px] w-full bg-white rounded-lg shadow-lg overflow-hidden relative">
         {/* Image */}
         <img 
           src={item.image[0]} 
           alt={item.name} 
           className="w-full h-56 object-cover"
         />
   
         {/* Product Details */}
         <div className="p-4">
           <h1 className="text-xl font-semibold text-gray-800">{item.name}</h1>
           <p className="text-sm text-gray-600">{item.category}</p>
           <p className="text-lg font-bold text-green-600 mt-2">{item.price}</p>
           
           {/* Description */}
           <p className="text-sm text-gray-500 mt-2">{item.description}</p>
   
           {/* Dimensions */}
           <p className="text-xs text-gray-400 mt-1">Dimensions: {item.dimensions}</p>
   
           {/* Availability */}
           <p className={`text-xs font-semibold mt-2 ${item.availability === "true" ? "text-green-500" : "text-red-500"}`}>
             {item.availability === "true" ? "In Stock" : "Out of Stock"}
           </p>
   
           {/* Button to Buy (or see more details) */}
           <div className=" flex justify-center h-full p-4 border-t border-gray-200  ">
            <button className="w-[90%] bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200 absolute mx-auto bottom-3">
              Buy Now
           </button>
           </div>

         </div>
       </div>
     );
   }
   