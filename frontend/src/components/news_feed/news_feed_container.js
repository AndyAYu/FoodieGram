import { connect } from 'react-redux';

import NewsFeed from './news_feed';

const mSTP = ({ session, entities: {users}}) => {
    return {
        currentUser: users[session.id]
    };
};

const mDTP = dispatch => ({
    
})