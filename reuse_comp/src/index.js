import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApproveCard from './ApproveCard';

const App = () => {
    return (<div className="ui container comments">
        <ApproveCard>
            <CommentDetail author="Sam" timeAgo="Today at 6.00 PM" comment="Nice blog post" avatar={faker.image.avatar()}/>
        </ApproveCard>
        <ApproveCard>
            <CommentDetail author="Alex" timeAgo="Yesterday at 4.45 PM" comment="I like it" avatar={faker.image.avatar()}/>
        </ApproveCard>
        <ApproveCard>
            <CommentDetail author="Morgan" timeAgo="Today at 11.23 AM" comment="Not bad" avatar={faker.image.avatar()}/>
        </ApproveCard>
    </div>);
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);