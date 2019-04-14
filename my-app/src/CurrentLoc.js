import React, { Component, PropTypes} from 'react';

import App from './App.js';
import * as serviceWorker from './serviceWorker';
import { Map } from '@esri/react-arcgis';
// import {MapView} from '@esri/views/Map'

class CurrentLoc extends Component {
 

    constructor(props){
     super(props);
        
       this.state = {
           longitude: -75,
           latitude: -75
       }
         this.handleLongitude.bind(this);
         this.handleLatitude.bind(this);
         
     }
     
    handleLongitude = (longValue) => {
        this.state.longitude = parseInt(longValue,2);
        this.setState({longitude: longValue})
    }

    handleLatitude = (latValue) => {
        this.state.latitude = parseInt(latValue,2);
        this.setState({latitude: latValue})
    }

     render() {
       return (<Map
        mapProperties={{ basemap: 'dark-gray-vector' }}
        viewProperties={{
            center: [this.state.latitude,this.state.longitude],
            zoom: 4
       }}><App handleLongitude={this.handleLongitude} handleLatitude={this.handleLatitude}></App></Map>);
    }
}
   
   export default CurrentLoc;