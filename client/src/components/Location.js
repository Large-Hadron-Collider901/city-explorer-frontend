import React from "react";
import { Image } from 'react-bootstrap';
import './App.css';
class Location extends React.Component {
    newSearch = () => {
        window.location.reload();
    }
    
    render() {
        return(
            <div id="location">
            <br />
            <br />
        <h2 className="location-title">{this.props.location.display_name}</h2>
        <h2>Latitude: {this.props.location.lat}</h2>
        <h2>Longitude: {this.props.location.lon}</h2>
        <br />
        <br />
        <Image id="image" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_API_KEY}&center=${this.props.location.lat},${this.props.location.lon}&zoom=13`}alt="city map" title="Return search map"  fluid/>
        <button  onClick={this.newSearch} className="new-search">Search again!</button>
            </div>

        )
    }
}


export default Location