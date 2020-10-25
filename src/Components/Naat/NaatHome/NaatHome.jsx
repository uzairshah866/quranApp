import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Slider from "../Slider/Slider"
import {app} from '../../../base'
import MediaPlayer from '../MediaPlayer';



class NaatHome extends Component{
    state={
        artists:[],
        naats:[]
    }
    componentDidMount(){
        
        app.database().ref('/naats').on("value",snapshot=>{
            const naats=[]
            snapshot.forEach(snap=>{
                var data=snap.val()
                naats.push({
                    title:data.title,
                    icon:data.icon,
                    duration:data.duration,
                    artist:data.artist,
                    id:snap.key
                })
            });
            this.setState({naats:naats});
            
        });
        
        
        
    }
    
    
    render(){
        return(<React.Fragment>
               {this.state.naats ? <Slider data={this.state.naats}/> : <div></div>} 
               
                </React.Fragment>
        )
    }
}

export default NaatHome;