import React, {Fragment, Component} from 'react'
import './App.css';
import Countryzone from './Countryzone';

class App extends Component{
  constructor(props){  
    super(props);
    this.state = {
          countryzone: [],
          timezone: '',
          zoneName: '',
        }
    this.getZoneTime = this.getZoneTime.bind(this);
    this.getTime = this.getTime.bind(this);
}  

getZoneTime(e) {
    const zone = e.target.value;
    this.setState({zoneName: zone})
  }

  componentDidMount() {
    fetch('http://api.timezonedb.com/v2.1/list-time-zone?key=XWSLLPX5RMIZ&format=json&zone=Europe/*')
    .then(res => res.json())
    .then((data) => {
      this.setState({ countryzone: data.zones })
    })
    .catch(console.log)
    const intervalId = setInterval(this.getTime, 5000);
  }
    
  getTime(){
    if(this.state.zoneName !== ''){
        fetch('http://api.timezonedb.com/v2/get-time-zone?key=XWSLLPX5RMIZ&format=json&by=zone&zone=' + this.state.zoneName.split('/').join('/'))
          .then(res => res.json())
          .then((data) => {
            this.setState({ timezone: data.formatted})
          })
          .catch(console.log)
    }
  }

  render(){
    return(
      <Fragment> 
        <center>        
          <Countryzone countryzone={this.state.countryzone}  zoneName={this.state.zoneName}
            handleChange= {this.getZoneTime} 
          />
          <span className="time-zone">{this.state.timezone}</span>
        </center>
      </Fragment>
  )
}}

export default App;
