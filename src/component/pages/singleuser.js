import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function SingleUser()
{
    const{id}=useParams();
    const[user,setuser]=useState({})
    useEffect(()=>
    {
     axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
     .then((res)=>{setuser(res.data)})
    },[])

    return(<> 
    <p>id:{id}</p>
    <p>Name{user.name}</p>
    <p>email</p>
    <p>phone</p>
    <p>website</p>

    
    </>
    
    )
}
export default SingleUser