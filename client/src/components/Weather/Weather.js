

import React from 'react';

import CardDeck from 'react-bootstrap/CardDeck';

import WeatherDay from './WeatherDay';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../App.css';

class Weather extends React.Component {

  render() {


    if (this.props.forecast.length === 0) {
      return ('')
    }
    return (

    
      <div id="weather">
       
        <h1 id="forecast-title" style={{width: '500px', color: 'white', backgroundColor: 'rgb(19, 0, 65)', borderRadius: '30px'}}>🌧️ {`${this.props.weatherData.data.city_name}`}  {`${this.props.weatherData.data.state_code}`}   🌞
        <br />
       
        5 Day Forecast
        </h1>
      
        <CardDeck>
          {this.props.forecast.map((day, index) => (
            <WeatherDay weatherData={this.props.weatherData} key={index} day={day} />
            ))}
            </CardDeck>
      </div>
    );
  }
}


export default Weather;