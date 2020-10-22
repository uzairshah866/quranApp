import React, { Component } from "react";
import Surah from "../SurahList/Surah";
import { getData } from "../Utils/finalSurahList";
import SearchSurah from './SearchSurah';
import Banner from '../../Banner/Banner'



class SurahList extends Component {
  state = {
    data: getData(),
  };

  render() {
    return (
      <React.Fragment>
         {/* <Navbar/> */}
        <Banner/>
      <br/>
        <SearchSurah></SearchSurah>
        <div className="container _4oT34IV0wKo8CmA8dz0Em mu-0">
          <div className="row">
            <div className="col-md-12 ">
              <h4 class="text-muted _12PdZOULNjnM8vEFGL_wQU">
                <span class="english undefined">
                  <span style={{ color: "#741626" }} >SURAHS (CHAPTERS)</span>
                </span>
              </h4>
              <div className="row">
                <ul className="col-md-4 list-unstyled">
                  {this.state.data.slice(0, 38).map((d) => {
                    return (
                      <li key={d.num} className="_2RyjZ4VLjPLNPpX8B8oX4a">
                        <Surah
                          num={d.SurahNo}
                          name={d.SurahNameEnglish}
                          meaning={d.SurahMeaning}
                          arabicText={d.SurahNameArabic}
                        ></Surah>
                      </li>
                    );
                  })}
                </ul>
                <ul className="col-md-4 list-unstyled">
                  {this.state.data.slice(38, 76).map((d) => {
                    return (
                      <li key={d.num} className="_2RyjZ4VLjPLNPpX8B8oX4a">
                        <Surah
                          num={d.SurahNo}
                          name={d.SurahNameEnglish}
                          meaning={d.SurahMeaning}
                          arabicText={d.SurahNameArabic}
                        ></Surah>
                      </li>
                    );
                  })}
                </ul>
                <ul className="col-md-4 list-unstyled">
                  {this.state.data.slice(76, 114).map((d) => {
                    return (
                      <li key={d.num} className="_2RyjZ4VLjPLNPpX8B8oX4a">
                        <Surah
                          num={d.SurahNo}
                          name={d.SurahNameEnglish}
                          meaning={d.SurahMeaning}
                          arabicText={d.SurahNameArabic}
                        ></Surah>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid"></div>
      </React.Fragment>
    );
  }
}

export default SurahList;
