import React from 'react';
import ReactDom from 'react-dom';
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router';

import WebApp from './pages';
import Home from './pages/home'
import Explore from './pages/explore'
import Detail from './pages/detail'


ReactDom.render(
	<Router history={ browserHistory }>
		<Route path="/" component={ WebApp }>
			<IndexRoute component={ Home } />
			<Route path="home" component={ Home } />
			<Route path="explore" component={ Explore } />
			<Route path="detail" component={ Detail} />
		</Route>	
	</Router>,
	document.getElementById('webapp')
);
