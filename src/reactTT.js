import React, {Component} from 'react';
import axios from 'axios';
class reactTT extends Component {

   state = {
     postsarray: [],
    };
 componentDidMount(){
   // Make a request for a user with a given ID
axios.get('https://jsonplaceholder.typicode.com/posts')
.then((response) => {
  // handle success
 this.setState({postsarray:response.data})
})
.catch(function (error) {
  // handle error
  console.log(error);
})
 }

  render(){    
    const posts=this.state.postsarray;
    const allposts=posts.map((post,idx) => {
      return (
        <div>
          <h1>{post.title}</h1>
        </div>
        )
    });

  return (
  <div>
    <h1>{allposts}</h1>
  </div>
  );

}
}

export default reactTT;