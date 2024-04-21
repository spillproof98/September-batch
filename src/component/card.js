import './card.css'
function Card(props)
{
    return <div className="name">
        <img src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png"></img>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        
    </div>
}

export default Card