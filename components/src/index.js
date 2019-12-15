import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetails'

const App = () =>{
    return (
        <div className="ui container comments">
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);