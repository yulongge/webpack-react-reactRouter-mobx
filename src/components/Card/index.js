import React from 'react';
import { Link } from 'react-router';
import './style'

export default class Card extends React.Component {
	render() {
		return (
			<div className="Card">
				<Link to="/detail">
					<div className="Card__Img">
						<img src={require("assets/img/card.png")} />
					</div>
					<div className="Card__Msg">
						<p className="Card__Msg__Name">阴阳师丑式神</p>
						<p className="Card__Msg__Desc">增加用户消费频次，提升整体战斗力，狂暴对手，完虐别人，称霸无敌.</p>
					</div>
				</Link>
			</div>
		)
	}
}
