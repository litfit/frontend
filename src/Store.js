import React, { Component, useState } from 'react';
import axios from 'axios';
import { API_URL } from './config.js';


function Store(props) {
    const [store, setStore] = useState(props)

    return (
     <div>
         <h2>{store.name}</h2>
     </div>

    )
}

export default Store;