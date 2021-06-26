import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {lat : null, errmsg : ''};
  }

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({lat : position.coords.latitude});
      },
      (error) => {
        this.setState({errmsg : error.message});
      }
    );
  }

  render(){
      if(this.state.errmsg && !this.state.lat)
        return <div>Error = {this.state.errmsg}</div>
      if(!this.state.errmsg && this.state.lat)
        return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
    return <Spinner text="please allow the location"></Spinner>
  };
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)