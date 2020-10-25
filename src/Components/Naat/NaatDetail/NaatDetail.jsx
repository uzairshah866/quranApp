import React, { Component } from 'react'
import TableDetail from "../TableDetail/TableDetail"
import "./NaatDetail.css"
import TableBody from '../TableBody/TableBody'
import MediaPlayer from '../MediaPlayer'
import {app} from '../../../base'

class NaatDetail extends Component{
    
    state={
        naats:[]
    }
   async componentDidMount(){
        const {naatId} =this.props.match.params
        let naats=[];
       await app.database().ref('/naats/'+naatId).once("value").then(snapshot=>{
           naats.push(snapshot.val())
           
           
        });
         
        this.setState({naats:naats})
    
    }


    render(){
        return(
            <div className="Container">
                
             <TableBody/>
            <table className="table table-hover" style={{width:"70%",textAlign:"center",marginLeft:"14%"}}>
            <thead>
                <tr>
                <th></th>
                <th>TITLE</th>
                <th>ARTIST</th>
                <th><i className="fa fa-clock-o fa-2x"></i></th>
                <th></th>
                </tr>
            </thead>
            {this.state.naats.length!=0 ?this.state.naats.map(d=>{
               return  <TableDetail data={d} />
            })
            :<div></div>}
            
            </table><br/><br/><br/>
            {this.state.naats!=0 ?<MediaPlayer data={this.state.naats} ></MediaPlayer>:<div></div>}
            </div>
        )
    }
}

export default NaatDetail;