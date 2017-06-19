import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
	constructor(...args) {
		super(...args);
		this.MenuData = [
			{
				type: "home",
				title: "首页",
			},
			{
				type: "explore",
				title: "发现",
			},
			{
				type: "developer",
				title: "开发者",
			},
			{
				type: "shopcard",
				title: "已购插件",
			},
			{
				type: "topup",
				title: "充值",
			},
		];
		let currentMenu = this.props.location.pathname.replace(/^\//,"");
		this.state = {
			currentMenu: currentMenu,
		}
	}

	componentWillReceiveProps(nextProps) {
		let currentMenu1 = this.props.location.pathname.replace(/^\//,""); 
		let currentMenu2 = nextProps.location.pathname.replace(/^\//,"");
		if(currentMenu1 !== currentMenu2) {
			this.setState({
				currentMenu: currentMenu2,
			})
		}
	}

	render() {
		return (
			<div className="header">
				<div className="header__con">
					<div className="header__con__logo">
						微生活插件平台
					</div>		
					<div className="header__con__menu">
						<ul>
							{
								this.MenuData.map((item, index) => {
									return (
										<li className={`icon_${item.type} ${item.type === this.state.currentMenu ? " icon__active" : ""}`} key={index}>
											<Link to={`/${item.type}`}><i className="icon__img"></i>{item.title}</Link>
										</li>			
									)
								})
							}
						</ul>	
					</div>
					<div className="header__con__user">
						云海肴云南菜 sella 退出
					</div>
				</div>		
			</div>
		)
	}
}
