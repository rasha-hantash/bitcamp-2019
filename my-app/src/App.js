import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import { MDBContainer, MDBRow, MDBCol, MDBInput,MDBNav, MDBNavItem, MDBNavLink} from 'mdbreact';
import Mgrs, { LatLon } from 'geodesy/mgrs.js';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import CurrentLoc from './CurrentLoc';
import 'mdbreact/dist/css/mdb.css'


import styled from 'styled-components';

// const Nav = styled(TopNav)`
//   background-color: offwhite;
//   z-index: 5
// `;

// const Logo = styled(TopNavBrand)`
//   justify-content: center;
//   & img {
//     height: 55px;
//   }
// `;

// const NavList = styled(TopNavList)`
//   text-align: left;
// `;
class App extends Component {
 

 constructor(){
  super();
  
  this.handleLonChange = (lon) => {
   this.props.handleLongitude(lon);              
  }

  this.handleLatChange = (lat) => {
    this.props.handleLatitude(lat);              
   }

   this.onSatellite  = () => {
    this.props.handleMap('satellite');

  }
 }
  onFormSubmit = event => {
    let me = this;
    console.log(this);
    event.preventDefault();
    console.log(event.currentTarget.elements["0"].defaultValue);
    let mgrs = Mgrs.parse(event.currentTarget.elements["0"].defaultValue);
    let latlon = mgrs.toUtm().toLatLon();
    alert("Longitude " + latlon._lon + " Latitude " + latlon._lat);
    this.handleLonChange(latlon._lon); 
    this.handleLatChange(latlon._lat); 
    
  }

  

  
  render() {
   
    return (
      <div className="App"> 
      <header className="App-header">
      <BrowserRouter>
      <MDBNav>
        <MDBNavLink onClick={this.onSatellite} active to="#!">Satellite  </MDBNavLink>
        <MDBNavLink to="#!">  Dark  </MDBNavLink>
        <MDBNavLink to="#!">  Street  </MDBNavLink>
    </MDBNav>
      </BrowserRouter>
      
      <MDBContainer>
       <MDBRow>
         <MDBCol md="6" >
           <form onSubmit={this.onFormSubmit}>
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
