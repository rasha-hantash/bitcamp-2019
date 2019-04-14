import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import { MDBContainer, MDBRow, MDBCol, MDBInput} from 'mdbreact';
import Mgrs, { LatLon } from 'geodesy/mgrs.js';
import './App.css';
import CurrentLoc from './CurrentLoc';
import 'mdbreact/dist/css/mdb.css'

class App extends Component {
 

 constructor(){
  super();
  
  this.handleLonChange = (lon) => {
   this.props.handleLongitude(lon);              
  }

  this.handleLatChange = (lat) => {
    this.props.handleLatitude(lat);              
   }
 }
  onFormSubmit = event => {
    let me = this;
    console.log(this);
    event.preventDefault();
    console.log(event.currentTarget.elements["0"].defaultValue);
    let mgrs = Mgrs.parse(event.currentTarget.elements["0"].defaultValue);
    let latlon = mgrs.toUtm().toLatLon();
    // alert("Longitude" + latlon._lon + "Latitude " + latlon._lat);
    this.handleLonChange(latlon._lon); 
    this.handleLatChange(latlon._lat); 
    
  }

  
  render() {
   
    return (
      <div className="App"> 
      <header className="App-header">
      <MDBContainer>
       <MDBRow>
         <MDBCol md="6" >
           <form onSubmit={this.onFormSubmit.bind(this)}>
             <div className="grey-text">
               <MDBInput
                label="Enter your MGSR"
                icon="compass"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
        </header>
      </div>
    );
  }
}
export default App;
