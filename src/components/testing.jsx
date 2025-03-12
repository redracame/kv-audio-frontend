import { useState } from "react";

export default function Testing(){
const [file,setFile] = useState(null)




    return(
      <div className="w-full h-screen">
        <input type="file" multiple onChange={(e)=>{console.log(e.target.files[0])}}/>
        <button className="w-[200px] h-[50px] text-white py-2 rounded-lg hover:bg-blue-600 transition duration-150">
          upload
        </button>
      
       </div>
)

}