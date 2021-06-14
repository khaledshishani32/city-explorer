import React, { Component } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import AlertMessage from "./components/AlertMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import Map from "./components/Map";
import CityData from "./components/CityData";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      cityData: {},
      displayData: false,
      alert: false,
      error: "",
    };
  }

  updateCityName = (e) => {
    this.setState({
      cityName: e.target.value,
    });
    console.log(this.state);
  };

  getCityData = async (e) => {
    e.preventDefault();
    try {
      const axiosResp = await axios.get(
        `https://us1.locationiq.com/v1/search.php?key=pk.aea192bfa4bcd913e5e8bda121e144d2&q=${this.state.cityName}&format=json`
      );

      this.setState({
        cityData: axiosResp.data[0],
        displayData: true,
        alert: false,
      });
    } catch (error) {
      this.setState({
        error: error.message,
        alert: true,
      });
    }
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        {this.state.alert && <AlertMessage error={this.state.error} />}
        <Container>
          <Row>
            <Col>
              <SearchForm
                updateCityName={this.state.updateCityName}
                getCityData={this.state.getCityData}
              />
              {this.state.displayData && (
                <>
                  <Map cityData={this.state.cityData} />
                  <CityData cityData={this.state.cityData} />
                </>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
