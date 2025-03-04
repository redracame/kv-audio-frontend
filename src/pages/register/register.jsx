import "./register.css";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  function handleRegister(e) {
    e.preventDefault();
    console.log("Registering with:", { email, password, firstName, address, phone });
  }

  return (
    <div className="bg-picture h-screen flex items-center justify-center">
      <form onSubmit={handleRegister}>
        <div className="w-[400px] h-[600px] backdrop-blur-xl rounded-2xl flex justify-center items-center flex-col relative">
          <img src="/logo.png" alt="logo" className="w-[100px] h-[100px] object-cover" />
          
          <input 
            type="text" 
            placeholder="First Name" 
            className="w-[300px] h-[30px] mt-4 bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input 
            type="email" 
            placeholder="Email" 
            className="w-[300px] h-[30px] mt-4 bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input 
            type="password" 
            placeholder="Password" 
            className="w-[300px] h-[30px] mt-4 bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input 
            type="text" 
            placeholder="Address" 
            className="w-[300px] h-[30px] mt-4 bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <input 
            type="text" 
            placeholder="Phone" 
            className="w-[300px] h-[30px] mt-4 bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button 
            className="my-6 w-[300px] h-[50px] bg-[#efac38] text-2xl text-white rounded-lg"
          > Register
          </button>
        </div>
      </form>
    </div>
  );
}
