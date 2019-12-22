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
        if(this.state.lat && !this.state.errmsg)
            return <div>Latitiude : {this.state.lat}</div>
        if(this.state.errmsg && !this.state.lat)
            return <div>Error: {this.state.errmsg}</div>
        return (
            <div>Loading</div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);