import React from 'react';
import './App.css';
import CountryInfo from '../../component/CountryInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from "react-bootstrap";

class App extends React.Component {
  state = {
    baseURL: 'https://restcountries.eu/rest/v2/name/',
    country: [],
    searchURL: '',
    countryName: '',
    show: false
  }
  //this method will store the user entered country name value in the texbox id:countryName
  //countryName: this.state.countryName
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
//this method handles the submit event and gets data from API using searchURL. It also consoles apporpriate promise
//errors if it encounters any errors.
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      searchURL: this.state.baseURL + this.state.countryName + '?fullText=true'
    }, () => {
      fetch(this.state.searchURL).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      }).then((json) => {
        console.log(json)
        console.log("inside then");
        this.setState({country: json, countryName: this.state.countryName});
      }).catch((error) => {
        console.log(error)
      });
    }) //end of state
  } //end of handlesubmit

  //the showModal and hideModal methods are called to show and hide modals
  showModal = () => {
    this.setState({show: true})
  };

  hideModal = () => {
    this.setState({show: false})
  };

  //the reset() reset the userinput and data displayed
  reset() {
    console.log("reset");
    this.setState({countryName: '', country: []});
  }

  //the render function first renders the modal component on a button click. The App.js is where we will display our modal.
  //We set the state of the modal to show or hide.

  render() {
    const cname = (this.state.country.map(cname => (cname.name)));
    const capital = (this.state.country.map(capital => (capital.capital)));
    const region = (this.state.country.map(reg => (reg.region)));
    const subreg = (this.state.country.map(subreg => (subreg.subregion)));
    const lang = this.state.country.map((country) => country.languages[0].name);
    const currency = this.state.country.map((country) => country.currencies[0].name);
    const flag = this.state.country.map((country) => country.flag);

    console.log("inside render");
    console.log(cname);
    return (
      <div>
      <h1>Know Before You Go!!
        <Button variant="info" onClick={this.showModal}>About App</Button>
      </h1>
      <Modal show={this.state.show} handleClose={this.hideModal} backdrop="static" keyboard={false} >
        <Modal.Header>
        <Modal.Title>Know Before You Go!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Get information about countries via a RESTful API.
          This API gets information about countries such as name, capital, region, sub-region, currency and flag.
          Remember to enter the full name of the country you want to get the information about!
          If you are interested to find more about this API then please visit https://restcountries.eu/rest/v2/
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Form  onSubmit={this.handleSubmit}>
        <div><Form.Label htmlFor='country'>Country Name</Form.Label>
          <input id='countryName' type='text' value={this.state.countryName} onChange={this.handleChange}/>
          <input className="btn btn-primary" type='submit' value="Click Here"/>
          <input className="btn btn-danger" type='submit' value="Reset" onClick={() => this.reset()}/>
          </div>
      </Form>
      <CountryInfo cname={cname} capital={capital} reg={region} subreg={subreg} lang={lang} curr={currency} flag={flag}/>
    </div>)
  }
}

export default App;
