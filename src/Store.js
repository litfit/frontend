import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from './config.js';
import AddThoughts from './AddThoughts.js';
import Thoughts from './Thoughts.js';


function Store(props) {
    const [store, setStore] = useState(props);

    const delStore = () => {
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
					<AddThoughts storeID={props.id} />
					<Thoughts comments={props.comments} storeID={props.id} commentsID={props.comments._id}/>
				</section>
			</div>
		);
    
}

export default Store;