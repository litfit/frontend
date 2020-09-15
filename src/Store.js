import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from './config.js';
import AddThoughts from './AddThoughts.js';
import Thoughts from './Thoughts.js';
import {
	Container,
	Row,
	Image,
	Card,
	Col,
	CardImg,
	CardBody,
	ListGroup,
	ListGroupItem,
} from 'react-bootstrap';

function Store(props) {
	const [store, setStore] = useState(props);

	const delStore = () => {
		axios.delete(API_URL + '/api/stores/' + props.id).then((response) => {
			window.location.reload();
		});
	};
	return (
		<div classname='Store'>
			<Row>
				<Col md={4}>
					<Card>
						<CardImg top width='100%' src={props.Image} />
						<Card.Body>
							<Card.Header>Store-Name</Card.Header>
							<Card.Text>{props.name}</Card.Text>
							<Card.Header>Location</Card.Header>
							<Card.Text>{props.location}</Card.Text>
							<Card.Header>Thoughts?</Card.Header>
							<AddThoughts storeID={props.id} />
							<ListGroup>
							<ListGroupItem>
							<Card.Text>
							<Thoughts comments={props.comments} storeID={props.id} commentsID={props.comments._id} />
							</Card.Text>
							</ListGroupItem>
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default Store;
