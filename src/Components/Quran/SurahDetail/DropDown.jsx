import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getData } from './../Utils/finalSurahList';



class DropDown extends Component {
    state = {
        data: getData()

    }
    render() {

        return (
            <div class="col-md-2 col-5">
                <div className="dropdown">
                    <button  className="btn btn-white dropdown-toggle" type="button" data-toggle="dropdown" >
                        <div className="text-primary">
                        <strong style={{color:"white"}}>Al-Baqarah</strong>
                        </div>
                    </button>

                    <div style={{minWidth:"270px",overflow:"scroll",height:"500px"}} className="dropdown-menu dropdown-menu-left border-1 pl-50"  >

                        <div >
                            <div className="dropdown-item" style={{backgroundColor:"transparent"}}>
                                {this.state.data.map(d => {
                                    return (
                                    <Link style={{color:"#741626"}} to={`/surahlist/${d.SurahNo}`}>
                                        <div className="row">
                                            <div className="col-2">{d.SurahNo}</div>
                                            <div className="col-7 text-muted">
                                                {d.SurahNameEnglish}
                                            </div>
                                            <div style={{fontSize:"1em" }} classname="col-3">
                                                {d.SurahNameArabic}
                                            </div>

                                        </div>
                                    </Link>)
                                })}                </div>

                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default DropDown;