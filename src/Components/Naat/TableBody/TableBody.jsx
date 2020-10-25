import React, { Component } from 'react'
import Card from "../Card/Card"
import "../NaatDetail/NaatDetail.css"

class TableBody extends Component{
    render(){
        return(
            <div>
                <div className="table1">
                <div id="artistName">Artist Name</div>
                <div id="albumPhoto"><Card/></div>
                <div id="playAll"><button className="btn-danger">Play All</button></div>
            </div>
            </div>
        )
    }
}

export default TableBody;