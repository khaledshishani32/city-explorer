import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
export class SearchForm extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.getCityData}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>City Name : </Form.Label>
            <Form.Control
              onChange={this.props.updateCityName}
              type="text"
              placeholder="Enter City Name !"
            />
          </Form.Group>
 
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default SearchForm;
