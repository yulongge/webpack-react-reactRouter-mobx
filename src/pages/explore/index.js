import React from 'react';
import './style';
import { Card } from 'components';

export default class Explore extends React.Component {
	constructor(...args) {
		super(...args);
		this.Data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	}
	render() {
		return (
			<div className="Explore">
				<div className="Explore__List">
					{
						this.Data.map((item, index) => {
							return <Card key={index} /> 
						})
					}	
				</div>
			</div>
		)
	}
}
