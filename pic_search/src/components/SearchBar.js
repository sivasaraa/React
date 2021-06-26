import React from 'react';

class SearchBar extends React.Component{
    state = {term : ''};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    onInputChange = (event) => {
        this.setState({term : event.target.value});
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <label>Image Search</label>
                    <input className= "field" type="text" value={this.state.term} 
                    onChange={this.onInputChange}/>
                </form>
            </div>
        );
    }
}

export default SearchBar