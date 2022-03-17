import React from 'react';
import axios from 'axios'
import './index.css'
import Search from './components/Search'
import Location from './components/Location'
import Header from './components/Header'
import Error from './components/Error'
import Weather from './components/Weather/Weather.js'
import Container from 'react-bootstrap/Container';


// import Error from './components/Error'
class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      searchCompleted: false,
      searchQuery: '',
      location: {},
      cityName: '',
      latitude: '',
      longitude: '',
      weatherData: {},
     forecast: [],
    
    };
  }
  showSearch = () => {
    this.setState({ searchCompleted: false });
  }

    handleSearch = async (searchQuery) => {
      try {
        let res = await axios.get(`http://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_API_KEY}&q=city:${[searchQuery]}&format=json`);
        // console.log(res.data[0])
        console.log('display name', res.data[0].display_name);
        console.log('latitude', res.data[0].lat);
        console.log('longitude', res.data[0].lon);
        this.setState({
          searchCompleted: true,
          searchQuery: searchQuery,
          location: res.data[0],
          cityName: res.data[0].display_name,
          latitude: res.data[0].lat,
          longitude: res.data[0].lon,
        });
      } catch (err) {
        // console.log(err);
        this.setState({
        errors: `${err}`,
        searchCompleted: false,
        });
      }
    
this.fetchWeather();

    }
  fetchWeather = async () => {
    
    try {
      
      const dailyForecast = await axios.get(process.env.REACT_APP_WEATHER_ENDPOINT,
      {
        params: {
        
          lat: this.state.latitude,
          lon: this.state.longitude,
        }

        
      });
    
      this.setState({
        
    // forecast: forecast,
  weatherData: dailyForecast,
   forecast: dailyForecast.data.data,


      });
    
    } catch (err) {
      this.setState({
        errors: `${err}`,
        searchCompleted: false,
        });
      }
    }

      // get weather api handler
      // weatherData = res.data.data[0]
      
      // `https://api.weatherbit.io/v2.0/current?key=${REACT_APP_WEATHER_API_KEY}&units=I&lat=${res.data[0].lat}&lon={res.data[0].lon}`

    render() {
      
      // console.log(this.state);
      return (
        <div id="wrapper">
        <div id="page-wrap">
          <Header />  
          {
            this.state.searchCompleted && this.state.errors.length === 0 ?
          <Location handleShowSearch={this.showSearch} location={this.state.location} /> :
          this.state.errors.length !== 0 ?
          <Error handleSearch={this.handleSearch} errors={this.state.errors} error={this.state.error} />  :

    
          <Search handleSearch={this.handleSearch} location={this.state.location} /> 
      
          }
         <Container>
          <Weather handleShowSearch={this.showSearch} forecast={this.state.forecast} weatherData={this.state.weatherData}/>
          </Container>
           <Container>
           </Container>
          </div>
       </div>
      )
           }
           
          }
  

    export default App