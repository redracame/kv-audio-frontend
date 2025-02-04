import "./productCard.css";
export default function ProductCard(coke){
   

  console.log(coke.price)

   return(

     <div>
        <img src={coke.photourl}/>
        <span>{coke.name}</span>
        <span>LKR. {coke.price}</span>
        <p>{coke.description}</p>
     </div> //achuwa tag eka hadhanna ganna
//me funtion eke thiyanna  coke(json ekak wage) ekata thamai ara app.jss eke ghapu tika enne
   )



}
