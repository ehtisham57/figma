
import React from 'react'
import "./Header.css"
import 'bootstrap-icons/font/bootstrap-icons.css';  // Check version number
import Image from 'next/image';
import logo from "../images/logo.png"
import Link from 'next/link';


const Headercomponent = () => {
  return (
    <div>
       <nav className="px-5 navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid mainNav">
    <Image src={logo} className='px-1 py-1'/>

    <a className="navbar-brand logoHead" href="#">WASSERSTOFF</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form className="d-flex mx-5" role="search">
    <div className="input-group">
      
      <input type="text" className="form-control col-xs-5 forms" aria-label="Username" aria-describedby="basic-addon1" />
      <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></span>
    </div>
      </form>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-5">
        <li className="nav-item px-4">
        <Link className="nav-link navlinks" href="/">Static</Link>
        </li>
        <li className="nav-item navlinks px-4">
          <a className="nav-link navlinks" href="/overwiew">Overview</a>
        </li>
        <li className="nav-item px-4">
          <a className="nav-link navlinks" href="/">Link</a>
        </li>
        <li className="nav-item px-4">
          <Link className="nav-link navlinks active" href="/analytic">Analytics</Link>
        </li>
      </ul>
      <div className="navbar-text px-5">
            <i className="bi bi-person icon"></i>
          </div>
          <div className="navbar-text">
          <i class="bi bi-sliders  icon"></i>
          </div>
      
    </div>
    
  </div>
</nav>
    </div>
  )
}

export default Headercomponent