import React, { Component } from "react";
import "../Utils/quran.css";
import TextArea from "./TextArea";
import { getData } from './../Utils/FinalQuran';
import Navbar from '../../Navbar/Navbar';
import SurahDetailBanner from './SurahDetailBanner';



class SurahDetail extends Component {
  state = {
    data: getData(),
    surah: []
  };
  componentDidMount() {
    window.scrollTo(0, 0)
    // this.changeVerse()
    let data1 = []
    {
      this.state.data.filter(d => d.SurahNo == this.props.match.params.surahId).map((d) => {
        return (
          data1.push(d)

        );
      })
    }
    
    this.setState(this.state.surah=data1);
    console.log(this.state.surah)
  }
  componentDidUpdate(prevProps, prevState, snapshot) {

    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
      let data1 = []
      {
        this.state.data.filter(d => d.SurahNo == this.props.match.params.surahId).map((d) => {
          return (
            data1.push(d)
  
          );
        })
      }
      
      this.setState(this.state.surah=data1);
    }
}
  

  // changeVerse(){
    
  //   console.log(this.state.surah)
   
  // }

  getBismillah() {
    if (this.props.match.params.surahId != 1)
    
      return <div class="row">
        <div id="bismillah" class="col-12 text-center my-2">
          ﷽
    </div>
      </div>
  }



  render() {
    
    return (
      <React.Fragment>

      < div >
         
      <br/><br/><br/><br/><br/>
        
        <SurahDetailBanner surahId={this.props.match.params.surahId} data={this.state.surah} />
        <br/><br/> <br/>
        { this.getBismillah()}
        <div className="container-fluid _2YLYw6-PFXwkQkNKiNXhFR ">
          <div className="row">
            <div className="col-md-10 col-md-offset-1" style={{cursor:"pointer"}}>
              {this.state.data.filter(d => d.SurahNo == this.props.match.params.surahId).map((d) => {
                return (

                  < TextArea
                    verseNo={d.AyahNo}
                    arabicText={d.OrignalArabicText}
                    englishMeaning={d.EnglishTranslation}
                  ></TextArea>
                );
              })}
            </div>
          </div>
        </div>
      </div >
      </React.Fragment>
    );
  }
}

export default SurahDetail;
