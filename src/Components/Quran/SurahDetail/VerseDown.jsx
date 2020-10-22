import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class VerseDown extends Component {
    state = {}
    render() {
        
        return (
            < div className="col-md-1 col-4" >
                <div  class="dropdown verse-dropdown">
                    <button class="btn btn-white dropdown-toggle position-relative" type="button" id="verseDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div class="text-left pr-3 text-primary">
                            <strong> <  span style={{color:"white"}} class="en">Verse 1</span> </strong>
                        </div>
                    </button>

                    <div style={{overflow:"scroll",height:"300px"}} class="dropdown-menu border-0 custom-shadow pt-0" aria-labelledby="verseDropdown" data-controller="filter-list" data-list="#verse-list" data-input="#filter-ayah">

                        <div id="verse-list">
                            {this.props.data.map((d) => {
                                return (< div class="dropdown-item" data-filter-tags="1">
                                    <Link style={{color:"#741626"}} to={`/surahlist/${this.props.surahId}/${d.AyahNo}`}>
                                        <span class="en">Verse</span> {d.AyahNo}</Link>
                                </div>)
                            })}


                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default VerseDown;