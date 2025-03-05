import toast from "react-hot-toast";
import axios from "axios"; // You forgot to import axios
import "./register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(""); // ✅ Added missing lastName state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();
    console.log("Registering with:", { firstName, lastName, email, password, address, phone });

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/Users/`, {
      email: email,
      firstName: firstName,
      lastName: lastName, // ✅ Fixed missing lastName
      password: password,
      address: address,
      phone: phone,
    })
    .then(() => {
      toast.success("Registration Success");
      navigate("/login"); // ✅ Redirect to login page on success
    })
    .catch((err) => {
      toast.error(err?.response?.data?.error || "An error occurred");
    });
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
            type="text" 
            placeholder="Last Name" 
            className="w-[300px] h-[30px] mt-4 bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={lastName} // ✅ Fixed incorrect variable name
            onChange={(e) => setLastName(e.target.value)}
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
