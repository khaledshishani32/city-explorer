import React, { Component } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import AlertMessage from "./components/AlertMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import Map from "./components/Map";
import CityData from "./components/CityData";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";

export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      mycityName : '',
      cityData:{},
      weatherData:{},
      show:false,
      alert:'',
      error:''
    }
  }
   updateCityName= (e) =>{
     this.setState({
      mycityName :e.target.value,
     })
    //  console.log(this.state)
   }
   getCityData=async (e)=>{
     e.preventDefault();
     try{ const axiosData= await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.aea192bfa4bcd913e5e8bda121e144d2&q=${this.state.mycityName}&format=json`);

     const weatherApi= await axios.get(`${process.env.REACT_APP_URL}/weather`);

     this.setState({
      cityData:axiosData.data[0],
      weatherData:weatherApi.data,
      display:true,
      alert:false
     })
    }
    catch (error){
      this.setState({
        error:error.message,
        alert:true
      })
    }
    //  console.log(axiosData);
   };
  render() {
    return (
      <div >
        {this.state.alert && <AlertMessage error={this.state.error} />}
        <SearchForm
          getCityData={this.getCityData}
          updateCityName={this.updateCityName}
        />
        {this.state.display && (
          <>
            <Map cityData={this.state.cityData} />
            <CityData cityData={this.state.cityData}
             weatherData={this.state.weatherData}
            />
          </>
        )}
      </div>
    );
  }
}

export default App;
