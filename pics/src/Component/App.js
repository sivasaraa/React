import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'

class App extends React.Component{
    state = {
        images : []
    };
    onSearchSubmit = (term) =>{
        axios.get('https://api.unsplash.com/search/photos',{
            params: {
                query:term
            },
            headers:{
                Authorization:'Client-ID 42b4d66456b35aacbb72dc282664ed9fcebd545e102e82c0af6d946daabbddb7'
            }
        }).then((response) => {
            this.setState({images: response.data.results});
        })
    }

    render(){
        return (<div className="ui container" style={{'marginTop':'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found:{this.state.images.length} images
            </div>);
    }
}

export default App;