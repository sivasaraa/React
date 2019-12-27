import React from 'react'

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            'term' : ''
        }
    }

    onInputchange(event){
        console.log(event.target.value);
    }

    onSubmitform = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);

    }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSubmitform}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({'term':e.target.value}) }/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;