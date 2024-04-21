import { useState } from "react";

function Cart()
{
    const [cart,setcart]=useState([{ id: 1, name: 'bedsheet1', image: 'https://m.media-amazon.com/images/I/51yFvP92XFL._SX300_SY300_QL70_FMwebp_.jpg', quantity: 1, actualprice: 200, totalprice: 200 },

    { id: 2, name: 'bedsheet2', image: 'https://m.media-amazon.com/images/I/51MKzsDFgGL._SX300_SY300_QL70_FMwebp_.jpg', quantity: 1, actualprice: 500, totalprice: 500 }])

     const[total,settotal]=useState (cart.reduce(function (cur,acc){return cur.totalprice+acc.totalprice }));

     let changequanity=(id,flag)=>
     {


        let index=cart.findIndex((ele)=>ele.id===id)
        let copiedarray=[...cart]
        if (flag==='Add')
        {
            copiedarray[index].quantity+=1;
        }
        else if(copiedarray[index].quantity>0)
        {
            copiedarray[index].quantity-=1;
        }

        copiedarray[index].totalprice=copiedarray[index].quantity*copiedarray[index].actualprice
        setcart(copiedarray);
        settotal(copiedarray.reduce((cur, acc) => cur.totalprice + acc.totalprice))


     }
    return <div>
    <h1>Cart Page</h1>
    {  
       cart.map(function (ele) {
            return <div key={ele.id} className="item">
    
                <img src={ele.image}></img>
                <h1 >{ele.name}</h1>
                <button onClick={() => changequanity(ele.id, 'Minus')}>-</button>
                <p>{ele.quantity}</p>
                <button onClick={() => changequanity(ele.id, 'Add')}>+</button>
                <p>{ele.totalprice}</p>
    
            </div> 
    
            
    
        }
        
         
        )
        
    
    }
    <h1>Total<span>{total}</span></h1>
    </div>





}
export default Cart