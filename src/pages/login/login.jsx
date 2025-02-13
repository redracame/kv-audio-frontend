import axios from "axios";
import "./login.css";
import { useState } from "react";
import { GiConsoleController } from "react-icons/gi";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleOneSubmit(e){
    e.preventDefault()
    console.log(email, password)

    axios.post("http://localhost:3000/api/Users/login" ,
    {
       email : email,
       password : password
    }
    ).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })

   }

  return (
    <div className="bg-picture w-full h-screen flex justify-center items-center">

      <form onSubmit={handleOneSubmit}>
      <div className="w-[400px] h-[400px] backdrop-blur-xl rounded-2xl flex justify-center items-center flex-col relative">
        <img src="/logo.png" alt="logo" className="w-[100px] h-[100px] object-cover" />
        
        <input 
          type="email" 
          placeholder="Email" 
          className="w-[300px] h-[30px] mt-6 bg-transparent border-b-2 border-white text-white text-xl outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          type="password" 
          placeholder="Password" 
          className="w-[300px] h-[30px] mt-6 bg-transparent border-b-2 border-white text-white text-xl outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Fixed onClick event */}
        <button 
          className="my-8 w-[300px] h-[50px] bg-[#efac38] text-2xl text-white rounded-lg"
        > Login
        </button>
      </div>
      </form>
    </div>
  );
}

