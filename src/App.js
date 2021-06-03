
import './App.css';
import Header from './header';
import reactTT from './reactTT';
import Headerr from './component/headerr';
import Home from './component/home';
import Footer from './component/footer';
import Posts from './component/posts';
import Data from './data';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
function App() {
  return (
<BrowserRouter>
<div>
<Headerr/>
<switch>
  <Route exact path="/" component={Posts}/>
  <Route exact path="/About" component={Data}/>
  <Route exact path="/Services" component={Posts}/>
  <Route exact path="/Contact" component={Data}/>
</switch>
<Footer/>
</div>
</BrowserRouter>
  );
}

export default App;
