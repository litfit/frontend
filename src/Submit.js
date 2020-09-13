import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import { API_URL } from './config.js';
import axios from 'axios';

function Submit() {
	const [details, setDetails] = useState({ name: '', location: ' ', images:'', });

	const handleChange = (e) => {
		// setDetails(e.target.value)
		if (e.target.name === 'name') {
			setDetails({ name: e.target.value, location: details.location, image: details.image });
		} else if (e.target.name === 'location') {
			setDetails({ location: e.target.value, name: details.name, image: details.image });
		} else if (e.target.name === 'image'){
            setDetails({image: e.target.value, location: details.locations, name: details.name})
        }
	};
	const onSubmit = (e) => {
		axios
			.post(API_URL + '/api/stores/new', details)
			.then((response) => {
				console.log(response);
				window.location.reload();
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					name='name'
					placeholder='Name'
					value={details.name}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='location'
					placeholder='location'
					value={details.location}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='image'
					placeholder='upload-file'
					value={details.image}
					onChange={handleChange}
				/>

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}
export default Submit;
