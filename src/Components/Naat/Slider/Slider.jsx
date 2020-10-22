import React, { Component } from 'react';
import Slider from 'react-slick';
import Card from "../Card/Card"
import {Link} from 'react-router-dom'

const cssStyle={
  fontFamily:"Calibri",
  fontSize:"1.5em",
  letterSpacing:"1.5px"
}

 class Slider1 extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container">
        <div  className="row">
        <h1 style={cssStyle} className="col-lg-9 col-md-9 col-sm-9 col-sx-9 p-2">Title</h1>
        <Link  to=""><h6 className="col-lg-3 col-md-3 col-sm-3 col-xs-3" style={{position:"relative",left:"50%"}} >View All &gt;</h6></Link>
        </div>
				<link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <Slider className={cssstyle} {...settings}>
          {this.props.data.map(d=>{
            return <Card key={d.id} data={d}></Card>
          })}
        </Slider>
      </div>
    );
  }
}

export default Slider1;

const cssstyle = `
.container {
  margin: 0 auto;
  padding: 0px 40px 40px 40px;
  width: 400px;
}
h3 {
    background: #5f9ea0;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
`