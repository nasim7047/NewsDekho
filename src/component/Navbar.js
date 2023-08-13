import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand fs-3 ms-3" to="/">News Dekho</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav text-center">
          <Link className="nav-item nav-link active" to="/">Home </Link>
          <Link className="nav-item nav-link active" to="/business">Business</Link>
          <Link className="nav-item nav-link active" to="/science">Science</Link>
          <Link className="nav-item nav-link active " to="/sports">Sports</Link>
          <Link className="nav-item nav-link active " to="/entertainment">Entertainment</Link>
          <Link className="nav-item nav-link active " to="/technology">Technology</Link>
        </div>
      </div>
</nav>
      </div>
    )
  }
}
