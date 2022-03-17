import React from 'react';
import Card from 'react-bootstrap/Card';
import '../App.css';
class WeatherDay extends React.Component {

  render() {

    return (
      <div className="container">
        <div className="child">
        <Card style={{ width: '500px', border: 'double blue 10px', color: 'white', backgroundColor: 'rgb(19, 0, 65)', borderRadius: '30px'}}>
          {/* <Card.Title style={{ textAlign: 'center'}}> <h1>{`${this.props.weatherData.data.city_name}`}  {`${this.props.weatherData.data.state_code}`}  </h1></Card.Title> */}
          <Card.Body style={{ textAlign: 'center'}}>
            <Card.Subtitle><h2>{`${this.props.day.datetime}`}</h2></Card.Subtitle> 
            {/* <Card.Text><h1>{`${this.props.day.date}`}</h1></Card.Text> */}
            <Card.Text><h3>{`${this.props.day.weather.description}`} </h3></Card.Text>
            <Card.Text>Low Temp : {`${this.props.day.low_temp} °F`}</Card.Text>
            <Card.Text>High Temp : {`${this.props.day.high_temp} °F`}</Card.Text>
          </Card.Body>
        </Card>
        </div>
      </div>
    );
  }
}
export default WeatherDay;