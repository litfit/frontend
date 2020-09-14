import React, { useState, useEffect, useLayoutEffect } from 'react';
import { API_URL } from './config.js';
import axios from 'axios';
import Store from './Store.js'

function Stores() {
    const [stores, setStores] = useState([]);

    useEffect(() => {
      axios.get(API_URL + '/api/stores')
      .then(response => {
        console.log(response.data);
        setStores(response.data)
  
      })
      .catch(err => {
        console.log(err)
      })

    },[]);

    return (

     <div>
     <h1>Fits Bellow</h1>
       {stores.map((store) => (
					<Store key={store._id} name={store.name} image={store.image} id={store._id} comments={store.comments} location={store.location} />
				))}
     </div>
      
    
    

    )
}

export default Stores;