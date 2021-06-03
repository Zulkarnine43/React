import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default class headerr extends Component {
    render() {
        return (
<div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Start Bootstrap</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/">Home
              <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/About">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Services">Services</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link"to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
 </div>
        )
    }
}
