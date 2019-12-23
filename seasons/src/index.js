import React from 'react'
import ReactDOM from 'react-dom'
import seasonDisplay from './seasonDisplay';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { lat : null, errmsg : ''}
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat : position.coords.latitude}),
            err => this.setState({errmsg : err.message})
        );
    }

    render(){
        if(this.state.lat && !this.state.errmsg)
            return <seasonDisplay lat={this.state.lat} />
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