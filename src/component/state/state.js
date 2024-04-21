import { useState } from "react";

function StateExample()
{
    let [data,setdata]=useState([0]);
    return<><h1>{data}</h1>
    <button onClick={function()
    {
        setdata(data+1)
    }}>Change</button>

    </>
    
}
export default StateExample