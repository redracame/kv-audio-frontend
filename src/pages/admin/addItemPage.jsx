export default function AddItemPage(){
       return(
        <div className ="w-full h-full flex flex-col items-center">
              <h1> Add items</h1>
              <div className="w-[400px] border flex flex-col items-center">
                     <input type="text" placeholder="Product key"/>     
                     <input type="text" placeholder="Product Name"/> 
                     <input type="text" placeholder="Product Price"/> 
                     <select>
                        <option key="audio">Audio</option>
                        <option key="lights">Lights</option>
                        </select>
                        <input type="text" placeholder="Product Dimensions"/> 
                        <input type="text" placeholder="Product Description"/> 
                        
                     <button>Add</button>
         </div>
       </div>
       )


} 