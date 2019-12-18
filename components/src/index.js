import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetails'
import ApprovalCard from './ApprovalCard'

const App = () =>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
            <CommentDetail author="Sam" timeAgo="Today at 6.00PM" content="Nice blog post" 
            avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="John" timeAgo="Today at 4.30PM" content="I like the post" 
            avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="Jane" timeAgo="Yesterday at 8.00PM" content="I like the writing" 
            avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);