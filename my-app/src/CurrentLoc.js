import React, { Component, PropTypes} from 'react';

import App from './App.js';
import * as serviceWorker from './serviceWorker';
import { Map } from '@esri/react-arcgis';
import { debug } from 'util';
// import {MapView} from '@esri/views/Map'

class CurrentLoc extends Component {
 

    constructor(props){
     super(props);
        
       this.state = {
           longitude: -75,
           latitude: -75,
           basemap: 'dark-gray-vector'
       }
         this.handleLongitude.bind(this);
         this.handleLatitude.bind(this);
         this.handleMap.bind(this);
         
     }
     
    handleLongitude = (longValue) => {
        this.state.longitude = longValue;
        this.setState({longitude: longValue})
    }

    handleLatitude = (latValue) => {
        // debugger;
        this.state.latitude = latValue;
        this.setState({latitude: latValue})
    }
    handleMap = (basemapValue) => {
        debugger;
        this.state.basemap = basemapValue;
        this.setState({basemap: basemapValue});
        // window.location.reload();
    }

     render() {
        
       return (
       
       <Map
        mapProperties={{ basemap: this.state.basemap}}
        viewProperties={{
            center: [this.state.latitude,this.state.longitude],
            zoom: 4
       }}><App handleMap = {this.handleMap} handleLongitude={this.handleLongitude} handleLatitude={this.handleLatitude}></App></Map>);
    }
}
   
   export default CurrentLoc;