import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SurahList from "./Components/Quran/SurahList/SurahList";
import SurahDetail from "./Components/Quran/SurahDetail/SurahDetail";
import Home from './Components/Home/Home';
import VerseDetail from './Components/Quran/VerseDetail/VerseDetail';
import MediaPlayer from './Components/Naat/MediaPlayer'
import Navbar from './Components/Navbar/Navbar';
import NaatHome from "./Components/Naat/NaatHome/NaatHome";
import NaatDetail from './Components/Naat/NaatDetail/NaatDetail'

function App() {
  return (
    <React.Fragment>
       <h1 style={{color: "#006400" , textAlign:"center"}}>NINETY NINE</h1>
       <Navbar></Navbar>
      <Switch>
         <Route path="/surahlist/:surahId/:ayahId" component={VerseDetail} ></Route>
         <Route path="/surahlist/:surahId" component={SurahDetail} />
         <Route path="/surahlist" component={SurahList} />
         <Route exact path="/" component={Home}></Route>
       
         <Route path="/naats/:naatId" component={NaatDetail}></Route>
         <Route path="/naats" component={NaatHome} ></Route>
        
       </Switch>
  
    </React.Fragment>
    
   
  );
}

export default App;
