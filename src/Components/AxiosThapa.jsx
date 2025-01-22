import React,{useState,useEffect} from 'react'
import axios from 'axios';

function AxiosThapa() {

//    const API="https://picsum.photos/200";

   const [data, setdata] = useState([]);
   const [loading, setloading] = useState(true)
   const [error, seterror] = useState(null)

    const fetchData=async()=>{
        try {
            // const resp =await axios.get("https://picsum.photos/200")
            // const resp =await axios.get("https://jsonplaceholder.typicode.com/posts")
            const resp =await axios.get("https://fakestoreapi.com/products")
            
            console.log(resp)
            setdata(resp.data)
            setloading(false)
        } catch (error) {
            seterror("somthing is wrong")
            setloading(false)
        }
    }

    useEffect(() => {
     fetchData();
    }, [])
    
    

  return (
    <div>
      
    </div>
  )
}

export default AxiosThapa
