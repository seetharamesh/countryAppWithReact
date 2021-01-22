import React from 'react';
import './App.css';
import CountryInfo from '../../component/CountryInfo';
import Modal from '../../component/Modal/Modal'

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
    return (<div>
      <Modal show={this.state.show} handleClose={this.hideModal}>
        <h2 className="modalheading">Know Before You Go!</h2>
        <p>Get information about countries via a RESTful API. This API gets information about countries such as name, capital, region, sub-region, currency and flag. Remember to enter the full name of the country you want to get the information about! If you are interested to find more about this API then please visit https://restcountries.eu/rest/v2/
        </p>
      </Modal>
      <h1>Know Before You Go!!<input className="submitbutton0" type='submit' value=' About App! ' onClick={this.showModal}/></h1>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='country'>Country Name 
        </label>
        <input className="textbox" id='countryName' type='text' value={this.state.countryName} onChange={this.handleChange}/><br/>

        <input className="submitbutton1" type='submit' value='Click Here!'/>
        <input className="submitbutton2" type='submit' value='    Reset    ' onClick={() => this.reset()}/>
      </form>
      <CountryInfo cname={cname} capital={capital} reg={region} subreg={subreg} lang={lang} curr={currency} flag={flag}/>
    </div>)
  }
}

export default App;
