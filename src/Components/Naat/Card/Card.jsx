import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Cards extends Component{
   
    
    render(){
         return(
            <React.Fragment>
               {this.props.data ? <div class="shadow-sm p-2 mb-3 bg-white rounded card" style={{ width: '130px', height: '130px', borderRadius: '5px/5px'}}>
                 <Link to={`/naats/${this.props.data.id}`} > 
                    <img class="card-img-top"src="/99.png" style={{height:"150px"}}/>
                        <div class="card-body"> 
                                </div>  
               
                             </Link>     
                </div> : <div></div>} 
                 <br/> 
        
                {this.props.data ? <h5 style={{marginTop:"-10px", fontFamily:"Calibri",cursor:"pointer"}}>{this.props.data.title}</h5> :<div></div> }
                
                </React.Fragment>
         )            
    }
}

export default Cards;