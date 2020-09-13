import React, { useState, useEffect } from 'react';
import { API_URL } from './config.js';
import axios from 'axios';

function Stores() {
    const [stores, setStores] = useState([]);

    axios.get(API_URL + '/api/stores').then((response) => {
			console.log(response.data);
			setStores({ stores: response.data });
		});
    

    return (
     <div>
       
     </div>
    
    

    )
}

export default Stores;