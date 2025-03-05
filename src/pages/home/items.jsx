import axios from "axios"
import { useEffect } from "react"

export default function Items() {
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`)
            .then((res) => {
                console.log(res.data) 
            })
           
    }, [])

    return (
        <div>
            <h1>Items</h1>
        </div>
    )
}
