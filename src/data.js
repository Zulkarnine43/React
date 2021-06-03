import React, { Component } from 'react'
import axios from 'axios';
export default class data extends Component {
    
constructor(props){
    super(props)

    this.state={
        name:"",
        job: ""
    }
}



    submitHanlder=(e)=>{
        e.preventDefault();

        axios.post("https://reqres.in/api/users", this.state)
        .then((res)=>{
            // console.log(res)
            this.setState({
               name:e.target.value,
               job: e.target.value
            })
        })
        .catch((err) =>{
            console.log(err)
        })
    
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHanlder}>
                    <input  type="text" name="name" />
                    <input  type="text" name="job" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
