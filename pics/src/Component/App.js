import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'

class App extends React.Component{

    onSearchSubmit(term){
        axios.get('https://api.unsplash.com/search/photos',{
            params: {
                query:term
            },
            headers:{
                Authorization:'Client-ID 42b4d66456b35aacbb72dc282664ed9fcebd545e102e82c0af6d946daabbddb7'
            }
        }).then((response) => {
            console.log(response.data.results);
        })
    }

    render(){
        return (<div className="ui container" style={{'marginTop':'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>);
    }
}

export default App;