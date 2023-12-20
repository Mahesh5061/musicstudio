import React from 'react';
import { Component } from 'react';
import {FaAngleLeft, FaAngleRight, FaBars} from "react-icons/fa"
import "../Header/index.css";

class Header extends Component{
  render(){
    return(
      <nav>
        <div class="circle">
          <FaAngleLeft/>
        </div>
        <div class="circle">
          <FaBars/>
        </div>
        <div class="circle">
          <FaAngleRight/>
        </div>
      </nav>
    )
  }
}

export default Header;