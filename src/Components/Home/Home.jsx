import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar';

class Home extends Component{
    render(){
        return(
            <div className="Container">
                
                <Menu/>
                <Footer/>
            </div>
        )
    }
}

export default Home;