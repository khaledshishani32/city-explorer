import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

export class App extends Component {
  
 constructor(props){
   super(props);
   this.state={
     cityName : '',
     cityData : {},
     displayData: false
   }
 }


  updateCityName= (e) =>{
    this.setState({
      cityName :e.target.value 
      
    })
    console.log(this.state)
  }

  getCityData = async (e)=>{
    e.preventDefault();
    const axiosResp = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.aea192bfa4bcd913e5e8bda121e144d2&q=${this.state.cityName}&format=json`);

    this.setState({
      cityData : axiosResp.data[0],
      displayData : true
    })



  }
  render() {
    return (
      <div>
        <Form onSubmit={this.getCityData}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>City Name : </Form.Label>
            <Form.Control onChange={this.updateCityName} type="text" placeholder="Enter City Name !" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        { this.state.displayData &&
         <div>
         <p>
           {this.state.cityData.display_name}
         </p>

         <p>
           {this.state.cityData.lat}
         </p>
         <p>
           {this.state.cityData.lon}
         </p>

      
         </div>
        }
      </div>
    );
  }
}

export default App;
