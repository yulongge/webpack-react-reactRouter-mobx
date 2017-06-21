import React from 'react';
import ReactDom from 'react-dom';
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router';
import { Provider } from 'mobx-react';

import WebApp from './pages';
import Home from './pages/home'
import Explore from './pages/explore'
import Detail from './pages/detail'

import * as stores from './stores';
console.log(stores, 'stores')


ReactDom.render(
	<Provider {...stores}>
		<Router history={ browserHistory }>
			<Route path="/" component={ WebApp }>
				<IndexRoute component={ Home } />
				<Route path="home" component={ Home } />
				<Route path="explore" component={ Explore } />
				<Route path="detail" component={ Detail} />
			</Route>	
		</Router>
	</Provider>,
	document.getElementById('webapp')
);
