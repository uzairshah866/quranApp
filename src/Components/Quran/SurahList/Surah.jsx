import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Utils/quran.css";

class Surah extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Link to={`/surahlist/${this.props.num}`} class="_2UxM9CFlksUC9o7XqGCTrP row">
          <div style={{color:"#741626",fontFamily:"Calibri"}}  class="col-xs-2">{this.props.num}</div>
          <div style={{color:"#741626",fontFamily:"Calibri",fontSize:"18px"}} class="col-xs-7">{this.props.name}</div>
          <div class="col-xs-3 text-left _26R0dcL03HfMlhTuaGv0PE">
          <span style={{color:"#741626",fontFamily:"Calibri",fontSize:"25px",position:"absolute",right:"0%"}} class={"icon-surah" + this.props.num}></span>
          </div>
          <div class="col-xs-10 col-xs-offset-2 YjSb1vbALjiAmE0C93FXi">
            <span style={{color:"#741626",fontFamily:"Calibri",fontSize:"10px"}}  class="text-uppercase english">{this.props.meaning}</span>
          </div>
        </Link>
      </React.Fragment>
    );
  }
}

export default Surah;
