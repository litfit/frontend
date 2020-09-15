import React, { useState } from 'react';
import { API_URL } from './config.js';
import axios from 'axios';
import { Form, InputGroup, button } from 'react-bootstrap';

function Submit() {
	const [details, setDetails] = useState({
		name: '',
		location: ' ',
		images: '',
	});

	const handleChange = (e) => {
		// setDetails(e.target.value)
		if (e.target.name === 'name') {
			setDetails({
				name: e.target.value,
				location: details.location,
				image: details.image,
			});
		} else if (e.target.name === 'location') {
			setDetails({
				location: e.target.value,
				name: details.name,
				image: details.image,
			});
		} else if (e.target.name === 'image') {
			setDetails({
				image: e.target.value,
				location: details.location,
				name: details.name,
			});
		}
	};
	const onSubmit = (e) => {
		axios
			.post(API_URL + '/api/stores/new', details)
			.then(() => {
				window.location.reload();
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div>
			<h2>Lit-Fit's</h2>

			<p>Submit your Lit-Fit below</p>
			<form onSubmit={onSubmit}>
				<Form.Text></Form.Text>
				<input
					type='text'
					name='name'
					value={details.name}
					onChange={handleChange}
				/>
				<Form.Text>StoreName</Form.Text>

				<input
					type='text'
					name='location'
					placeholder='Location'
					value={details.location}
					onChange={handleChange}
				/>
				<Form.Text>Store-Location</Form.Text>

				<input
					type='text'
					name='image'
					value={details.image}
					onChange={handleChange}
				/>

				<Form.Text>Image:Url</Form.Text>

				<button type='submit' class='btn btn-light'>
					Submit
				</button>
			</form>
		</div>
	);
}
export default Submit;
