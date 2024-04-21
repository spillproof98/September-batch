import './props.css'




function Note(props)
{

    
    return <div className="name">
        <img src={props.src}/>
        <h1 >{props.title}</h1>
        <p>image here</p>
        
    </div>
}
export default Note    