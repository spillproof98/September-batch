import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function Home()
{
    const [count, setcount] = useState([]);
    const[show,setshow]=useState(true)
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{setcount(res.data)})
    .catch((err)=>{console.log(err.data)})
    .finally(()=>{setshow(false)})
    },[])

    
    return <>
    {show&&<p>Loading......</p>}
        {   
            count.map((ele)=>{
                return <><Link to={`/user/${ele.id}`}><div key={ele.id} style={{margin:10 ,border:1 ,borderStyle:"solid", backgroundColor:"bisque"}}>
                    <p>{ele.id}</p>
                    <p>{ele.name}</p>
                    <p>{ele.email}</p>
                </div> </Link></>
            })
        }
    </>
    
    
}
export default Home
