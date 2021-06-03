import React, { Component } from 'react'
import axios from 'axios';

export default class posts extends Component {
   
    constructor(props){
        super(props)
    
        this.state={
            posts:[]
        }
    } 
    componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) =>{
    this.setState({
        posts:res.data
    })
    })
    .catch(err =>{
        console.log(err);
    })
    }
   
    render() {

        const {posts} = this.state
        return (
          
         <div>
                 <h1>posts components</h1>
                 {posts.map((post)=>{
                     return <h1>{post.title}</h1>
                 })}
            </div>
           
        )
    }
}
