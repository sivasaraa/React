import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'

class App extends React.Component{

    onSearchSubmit(term){
        console.log(term)
    }

    render(){
        return (<div className="ui container" style={{'margin-top':'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>);
    }
}

export default App;