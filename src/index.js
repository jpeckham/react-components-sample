import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () =>  {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                Are you sure?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={faker.name.firstName(1)} date={faker.date.recent(1)} avatar={faker.image.avatar()} text={faker.lorem.sentence(12,3)} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={faker.name.firstName(1)} date={faker.date.recent(1)} avatar={faker.image.avatar()} text={faker.lorem.sentence(12,3)} />
            </ApprovalCard>
            
        </div>
    );

};

ReactDOM.render(<App />, document.querySelector('#root'));