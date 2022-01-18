import { connect } from 'react-redux';
import { receiveAllPosts } from ''
import NewsFeed from './news_feed';

const mSTP = ({ session, entities: {users}}) => {
    return {
        currentUser: users[session.id]
    };
};

const mDTP = dispatch => ({
    receiveAllPosts: () => dispatch(receiveAllPosts())
});

export default connect(mSTP, mDTP)(NewsFeed)