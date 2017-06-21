import React from 'react';
import './style.less';
import Header from './header';
import Footer from './footer';
import { inject, observer } from 'mobx-react';

export default class WebApp extends React.Component {
	render() {
		console.log('render');
		return (
			<div className="webapp">
				<Header {...this.props}/>
				<div className="content">
					{ this.props.children && React.cloneElement(this.props.children, {...this.props}) }
				</div>
				<Footer />
			</div>
		)
	}
}
