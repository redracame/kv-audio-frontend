import { Route, Routes } from "react-router-dom";
import Header from "../../components/header";

export default function HomePage(){
   return(
     <>
    <Header/>
    <div  className="h-[calc(100vh-100px)] w-full">
        <Routes path="/*"> 
        <Route path="/contact" element={<h1>Contact</h1>}/>
        <Route path="/gallery" element={<h1>Gllery</h1>}/>
        <Route path="/items" element={<h1>Items</h1>}/>
        <Route path="/" element={<h1>Home</h1>}/>
        
        </Routes>
    </div>
   </>
    
   )
}