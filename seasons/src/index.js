import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { lat : null, errmsg : ''}

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat : position.coords.latitude})
            },
            (err) => {
                this.setState({errmsg : err.message})
            }
        );
    }

    render(){
        return (
            <div>Latitude : {this.state.lat}
            <br />
            Error : {this.state.errmsg}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);