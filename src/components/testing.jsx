import { useState } from "react";

export default function Testing(){
const [file,setFile] = useState(null)


function UploadFile() {
  console.log(file)
}  

    return(
      <div className="w-full flex flex-col justify-center items-center bg-gray-100  h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg">
        <input type="file" multiple onChange={(e)=>{setFile(e.target.files[0])}} className="mb-4"/>
        <button onClick={UploadFile} className="w-[200px] h-[50px] bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-150">
          Upload
        </button>
      
       </div>
       </div>
)

}