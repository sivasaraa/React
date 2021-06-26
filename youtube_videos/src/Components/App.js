import React from 'react';
import youtube from '../Api/youtube.js';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    state = {
        videos : [],
        selectedvideo : null
    }

    componentDidMount(){
        this.onTermSubmit("car");
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search',{
            params : {
                q : term
            }
        });

        this.setState({videos : response.data.items,selectedvideo:response.data.items[0]})
    }

    onVideoSelect = (video) => {
        this.setState({selectedvideo : video});
    }

    render(){
        return (<div className="ui container">
            <SearchBar onTerm={this.onTermSubmit}/>
            <div className="ui grid">
                <div className="row">
                    <div className="eleven wide column">
                    <VideoDetail video={this.state.selectedvideo}/>
                    </div>
                    <div className="five wide column">
                    <VideoList onSelect={this.onVideoSelect} videos={this.state.videos}/>
                    </div>

                </div>
            </div>
        </div>);
    }
}

export default App