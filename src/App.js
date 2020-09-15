import React from 'react';
import Submit from './Submit';
import Stores from './Stores';
import About from './About';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
	Jumbotron,
  Nav,
  NavItem,
	Container,
} from 'react-bootstrap';

function App() {
	return (
		<Container>
			<Router>

				<div class='nav justify-content-end'>
					<Nav>
						<NavItem class='navbar-nav mr-auto'>
							<button type='button' class='btn btn-light'>
								<Link to='/'>Home</Link>
							</button>
							<button type='button' class='btn btn-light'>
								<Link to='/about'>About</Link>
							</button>
							<button type='button' class='btn btn-light'>
								<Link to='/lit-fits'>Lit-Fits</Link>
							</button>
						</NavItem>
					</Nav>
				</div>
        <section>
				<Jumbotron>
					<h3> Welcome 2 Lit-Fit</h3>
					<p>Your Favorite Reused Review</p>
				</Jumbotron>
        </section>
				<Switch>
					<Route exact path='/' component={Submit} />
					<Route exact path='/lit-fits' component={Stores} />
					<Route exact path='/about' component={About} />\
				</Switch>
			</Router>
		</Container>
	);
}

export default App;
