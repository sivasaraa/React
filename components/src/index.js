import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetails'

const App = () =>{
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" />
            <CommentDetail author="John" />
            <CommentDetail author="Jane" />
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);