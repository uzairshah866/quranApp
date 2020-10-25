import React, { Component } from 'react';
import { getData } from "../Utils/finalSurahList"
import Sugestions from './Sugestions';
import { findSurahName } from '../Utils/finalSurahList'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchSurah extends Component {
  state = {
    query: "",
    data: getData(),
    filteredData: [],
    check: true
  };


  componentWillMount() {
    this.
    setState(this.state.data = getData())

  }

  handleInputChange = event => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.SurahNameEnglish.toLowerCase().includes(query.toLowerCase());
      });
      return {
        query,
        filteredData,
      };
    });
  };
  checking() {
    const query = this.state.query;
    if (query.length > 1)
      return <div class="B86yR7URt7CDk9ZTRWb2d">
        <Sugestions results={this.state.filteredData} ></Sugestions>
      </div>
    else
      return <div class="B86yR7URt7CDk9ZTRWb2d">
      </div>
  }

  render() {
    return (
      <React.Fragment>

        <div className="col-md-10 col-md-offset-1 text-center pb-0">
          <div className="right-inner-addon">
            <a tabindex="-1">
              <i className="ss-icon ss-search"></i>
            </a>
            <input type="search" placeholder="Search &quot;Muzammil&quot;" value={this.state.query} onChange={this.handleInputChange}></input>
            {this.checking()}
          </div>
        </div>
      </React.Fragment>)
  }
}

export default SearchSurah;