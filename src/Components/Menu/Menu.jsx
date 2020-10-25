import React, { Component } from 'react';
import "./Menu.css"
import { Link } from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <div className="Container">
                <div className="row menuItems">
                    <div className="col-md-3"><Link to="/surahlist" ><img id="menu-1" src="QURAN.png" alt="THE HOLY QURAN" /></Link><p id="menu1-text">THE HOLY QURAN</p></div>
                    <div className="col-md-3"><Link to="/hadith"><img id="menu-2" src="HADITH.png" text="THE HADITH" /></Link><p id="menu2-text">THE HADITH</p></div>
                    <div className="col-md-3">  <Link to="/mosque"><img id="menu-3" src="MOSQUE1.png" text="MOSQUES" /></Link><p id="menu3-text">MOSQUES</p></div>
                    <div className="col-md-3 pb-5"><Link to="/naats"><img id="menu-4" src="NAAT.png" text="NAAT PLAYER" /></Link><p id="menu4-text">NAAT PLAYER</p></div>

                </div>
            </div>
        )
    }
}

export default Menu;