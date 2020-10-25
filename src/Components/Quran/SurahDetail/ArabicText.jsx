import React, { Component } from "react";
import "../Utils/quran.css";

class ArabicText extends Component {
  render() {
    return (
      <span>

        <b style={{ fontFamily: 'QuranFont', wordSpacing: "5px" }} >
          {this.props.arabicText}</b>
        <span style={{ fontFamily: "Calibri" }} className="AyahNo" >&#xFD3F;{this.props.verseNo}&#xFD3E;</span>


      </span >
    );
  }
}

export default ArabicText;
