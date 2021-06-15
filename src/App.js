import React, { Component } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import AlertMessage from "./components/AlertMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import Map from "./components/Map";
import CityData from "./components/CityData";
import Weather from "./components/Weather";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";

export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      mycityName : '',
      cityData:{},
      show:false,
      alert:'',
      error:'',
      lat:'',
      lon:''
    }
  }
   updateCityName= (e) =>{
     this.setState({
      mycityName :e.target.value,
     })
    //  console.log(this.state)
   }


   getCityData = async (e) => {
    e.preventDefault();
    await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.aea192bfa4bcd913e5e8bda121e144d2&q=${this.state.mycityName}&format=json`).then(locationRes => {
      this.setState({
        cityData: locationRes.data[0],
        lat: locationRes.data[0].lat,
        lon: locationRes.data[0].lon,
      });
      axios.get(`http://localhost:8080/weather?lon=${this.state.lon}&lat=${this.state.lat}`).then(weatherRes => {
        this.setState({
          weatherData: weatherRes.data,
          show: true,
          alert: false
        })
      });
    });

  }
    
  render() {
    return (
      <div>
        {this.state.alert &&
          <AlertMessage
            error={this.state.error}
          />
        }
        <SearchForm
          getCityData={this.getCityData}
          updateCityNameState={this.updateCityNameState}
        />
        {(this.state.show) &&
          <>
            <Map
              cityData={this.state.cityData}
            />
            <CityData
              cityData={this.state.cityData}
            />
            <Weather
              weather={this.state.weatherData}
            />
          </>
        }
      </div>
    )
  }
}

export default App;
