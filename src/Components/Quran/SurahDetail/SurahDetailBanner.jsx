import React, { Component } from 'react'
import VerseDown from "./VerseDown"
import DropDown from "./DropDown"
import {Link} from "react-router-dom"
import "../../Banner/Banner.css"

class SurahDetailBanner extends Component{

    render(){
        return(
  
             <div className="SurahNav">
                 <img className="py-0" style={{maxWidth:"100%"}}  src="/BORDER.png"/>
                <nav class="navbar navbar-expand-lg py-0">
        <ul class="nav navbar-.nav ">
            <li class="nav-item"><Link to="/"><i style={{color: "white" }} className="fa fa-home fa-2x"></i></Link>
            </li>
            <li class="nav-item"><VerseDown surahId={this.props.surahId} data={this.props.data}/></li>
            <li class="nav-item"><DropDown onClick={this.props.onClick}/></li>
        </ul>
    </nav>
                <img className="py-0" style={{maxWidth:"100%"}} src="/BORDER.png"/>
            </div>
        )
    }
}

export default SurahDetailBanner;