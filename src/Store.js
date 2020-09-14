import React, { Component, useState } from 'react';
import axios from 'axios';
import { API_URL } from './config.js';
import AddThoughts from './AddThoughts.js'


function Store(props) {
    const [store, setStore] = useState(props);

    const delStore = (e) => {
        axios
		 .delete(API_URL + '/api/stores/' + props.id)
		.then((response) => {
		window.location.reload();
	    });
    }
    return (
			<div>
				<h2>{store.name}</h2>
				{/* <img src={props.image} alt='pictures of shoes' /> */}
				<button type='submit' onClick={delStore}>
					Delete
				</button>
				<section>
					<h4>Thoughts?</h4>
					<AddThoughts imageID={props.id} />
				</section>
			</div>
		);
    
}

export default Store;