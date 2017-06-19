import React from 'react';
import Slider from 'react-slick';
import './style';

export default class Banner extends React.Component {
	render() {
		let settings = {
			dots: true,
			//dotsClass: "Banner__Dots",
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			autoplay: true,
			autoplaySpeed: 5000,
		}
		return (
			<Slider {...settings} className="Banner">
				<div><img src={ require("assets/img/banner.png") } /></div>	
				<div><img src={ require("assets/img/banner.png") } /></div>
				<div><img src={ require("assets/img/banner.png") } /></div>
				<div><img src={ require("assets/img/banner.png") } /></div>
			</Slider>
		)
	}
}
