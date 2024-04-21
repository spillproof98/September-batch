import { useImperativeHandle, useState } from "react"
import axios from "axios"

function About()
{
    const [data,setdata]=useState({
        name:'',
        age:'',
        gender:''

    })
    const handler=(e)=>{
        setdata({
            ...data,[e.target.name]:e.target.value
        })
    }
    
    const createuser=()=>
    {
        console.log(data);
        axios.post('http://localhost:8080/',data,{
            headers: { 
                 
                'Authorization': 'Basic YWRtaW46MTIz'
              }
            }
        )
        .then((err)=>{
            console.log(err)
        })
     }
     return<>
     <h1>Create User</h1>
     <p>Name</p>
     <input onChange={handler} name="name"/>
     <p>Age</p>
     <input type="number" onChange={handler}name="age"/>
     <p>Gender</p>
     <input type="radio" name="gender" onChange={handler} value='male'/><label>Male</label>
     <input type="radio" name="gender" onChange={handler} value='female'/><label>Female</label>
     <button onClick={createuser}>Craete</button>
     </>

}
export default About