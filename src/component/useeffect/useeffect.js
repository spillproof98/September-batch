import axios from "axios";
import { useEffect, useState } from "react";
function Useeffectexample() {

const [data,setdata]=useState([])
useEffect(()=>{
    axios.get('http://localhost:8080/')
})

}

export default Useeffectexample