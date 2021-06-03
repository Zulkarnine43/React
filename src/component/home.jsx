import React, { Component } from 'react';
import axios from 'axios';
class home extends Component {

constructor(props){
    super(props)

    this.state={
        posts:[]
    }
}

componentDidMount(){
axios.get("https://jsonplaceholder.typicode.com/posts")
.then((res) =>{
console.log(res);
})
.catch(err =>{
    console.log(err);
})
}

    render() {
        return (
            <div>
                  <div class="container">
                  <header class="jumbotron my-4">
                    <h1 class="display-3">A Warm Welcome!</h1>
                    <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
                    <a href="#" class="btn btn-primary btn-lg">Call to action!</a>
                    </header>
                  </div>
            </div>
        );
    }
}

export default home;