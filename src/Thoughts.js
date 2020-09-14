import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from './config.js';
import moment from 'moment';

function Thoughts(props) {
	const deleteComment = (commentID) => {
		axios
			.delete(`${API_URL}/api/stores/${props.storeID}/comments/${commentID}`)
			.then(() => {
				window.location.reload();
				console.log(props.storeID);
			})
			.catch(console.error);
	};
	return (
		<div>
			<h4 key={props.comments._id}>
				{props.comments.map((comment) => (
					<p>
						{moment(comment.createdAt).fromNow()}: {comment.comment}
						<button type='text' onClick={() => deleteComment(comment._id)}>
							X
						</button>
					</p>
				))}
			</h4>
		</div>
	);
}

export default Thoughts;
