import React from 'react';
import styles from './CountryInfo.module.css';
import { Form,Container } from "react-bootstrap";
/*This class will output the country details with the props passed from its parent - App */
class CountryInfo extends React.Component {
    render() {
      const styleslabel = {color:'rgb(179, 20, 20)'}
      console.log("inside countryinfo");
        return (
          <div>
              <Form>
                <div className="row">
                <div className="col-lg-3 center-block">
                    <h4><Form.Label  className="formLabel">Country:</Form.Label>{this.props.cname}</h4>
                    <h4><Form.Label  className="formLabel">Capital:</Form.Label>{this.props.capital}</h4>
                    <h4><Form.Label  className="formLabel">Region:</Form.Label>{this.props.reg}</h4>
                    <h4><Form.Label  className="formLabel">Subregion:</Form.Label>{this.props.subreg}</h4>
                    <h4><Form.Label  className="formLabel">Language:</Form.Label>{this.props.lang}</h4>
                    <h4><Form.Label  className="formLabel">Currency:</Form.Label>{this.props.curr}</h4>
                   {(this.props.flag != "") ? <img src={this.props.flag} alt="new"  width="200" height="75"/> : null }
              </div>
            </div>
              </Form>
            </div>
        )
    }
}

export default CountryInfo;
