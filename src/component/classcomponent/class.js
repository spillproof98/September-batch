import { Component } from "react";

class Demo extends Component{
    constructor(){

        super()

        this.state={
         a:10
        }
        
    }
    increase()
    {
        console.log('clicked');
        this.setState({
            a:this.state.a+1
        })
    }
    render()
    {
        return<>
        <h1>Hello {this.props.title}{this.state.a}</h1>
        <button onClick={()=>this.increase()}>Change</button>
        </>
    }

}
