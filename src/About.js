import React from 'react';
import {
    Jumbotron,
    Card,
} from 'react-bootstrap';

function About() {
    return (
			<div class='jumbotron jumbotron-fluid'>
				<div class='container'>
					<p>
						Welcome to Lit-Fit! We are proud and excited to host all your fits.
						Our founder, Kway Prempeh, is an advent environmentalist who
						believes in recyclable clothing. The belief in shared style and
						innovation is the reason he created Lit-Fit. Lit-Fit allows you to
						view fantastic finds (fits) ,from thrift stores, all over the
						world. This a community of respect, creativity, and style! Happy
						thrifting!
					</p>
					<img
						src='https://wl-brightside.cf.tsp.li/resize/728x/jpg/4f6/717/9b51e1586ab3017ad2b66c919c.jpg'
						class='img-rounded'
						alt='Responsive image'></img>
					<p class='lead'></p>
					<Card.Link>Twitter</Card.Link>
					<Card.Link>Instagram</Card.Link>
					<Card.Link>Facebook</Card.Link>
				</div>
			</div>
		);
}

export default About