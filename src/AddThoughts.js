import React, { Component, useState } from 'react';
import { API_URL } from './config.js';
import axios from 'axios';

function AddThoughts(props) {
    const [thoughts, setThoughts] = useState({comment:" "});

    const onChange = (e) => {

        setThoughts({comment: e.target.value})
git     }

 const  onSubmit = (e) => {
		e.preventDefault();
		axios
			.post(`${API_URL}/api/stores/${props.imageID}/comments`, thoughts)
			.then(() => {
				window.location.reload();
			})
			.catch(console.error);
	};

 return (
     <form onSubmit={onSubmit}>
				<input
					type='text'
					name='comment'
					placeholder='comment'
					value={thoughts.comment}
					onChange={onChange}
				/>
    <button type="submit" >+</button>
 </form>
 )
}

export default AddThoughts;