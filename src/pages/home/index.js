import React from 'react';
import './style'
import { inject, observer } from 'mobx-react';
import { Banner, Card } from 'components';

@inject("HomeStore")
@observer
export default class Home extends React.Component {
	constructor(...args) {
		super(...args);
		this.Data = [
			1,2,3,4
		];
	}

	componentWillMount() {
		//this.props.HomeStore.getHotPlugins();	
	}

	componentDidMount() {
		this.props.HomeStore.getHotPlugins();
	}

	render() {
		console.log(this.props, 'home props');
		return (
			<div className="Home">
				<Banner />
				<div className="Home__List">
					<div className="Home__List__Title">
						<span className="hotIcon">热门精选</span>
					</div>
					<div className="Home__List__Con">
					{
						this.Data.map((item, index) => {
							return <Card key={index}/>
						})
					}
					</div>
				</div>
				<div className="Home__List">
						<div className="Home__List__Title">
							<span className="newIcon">新品推荐</span>	
						</div>
						<div className="Home__List__Con">
						{
							this.Data.map((item, index) => {
								return <Card key={index}/>
							})
						}
						</div>
				</div>
			</div>
		)
	}
}
