import React from "react";
import Slider from 'react-slick'
import { CardMedia } from "@mui/material";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Pics = (props) => {
    const pics = props.photos
    
    const settings = {
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <div id='next' />,
        prevArrow: <div id='back' />,
        adaptiveHeight: true
      };

    return (
        <Slider {...settings}>
            {
                pics.map((pic, i) => {
                    return (
                        <React.Fragment>
                            <CardMedia 
                                component='img'
                                key={i}
                                image={pic.href}
                            />
                        </React.Fragment>
                    )
                })
            }
        </Slider>
    )
}

export default Pics;