import React from 'react';
import styles from './CountryInfo.module.css';
/*This class will output the country details with the props passed from its parent - App */
class CountryInfo extends React.Component {
    render() {
      const styleslabel = {color:'rgb(179, 20, 20)'}
      console.log("inside countryinfo");
        return (
          <div>
            <div className={styles.cnc}>
                <h3><span style={styleslabel}>Country: </span>{this.props.cname}</h3>
                <h3><span style={styleslabel}>Capital: </span>{this.props.capital}</h3>
                <h3><span style={styleslabel}>Region: </span>{this.props.reg}</h3>
                <h3><span style={styleslabel}>Subregion: </span>{this.props.subreg}</h3>
                <h3><span style={styleslabel}>Language: </span>{this.props.lang}</h3>
                <h3><span style={styleslabel}>Currency: </span>{this.props.curr}</h3>
                {(this.props.flag != "") ? <img src={this.props.flag} alt="new" width="400" height="150"/> : null }
            </div>
            </div>
        )
    }
}

export default CountryInfo;
