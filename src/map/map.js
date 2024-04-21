import './props.css'


function Goat()
{

let arr=[{id:1,name:'hari',description:'abcd'},{id:2,name:'Pari',description:'CDEF'}]\
return arr.map(elem=> <Card.title={elem.name}  description  ={elem.description} key={elem.id}/>)
}


