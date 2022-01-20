import { connect } from 'react-redux';
import { fetchAllUsers } from '../../actions/user_actions';
import NewsFeed from './news_feed';
//{ session, entities: {users}}

const mSTP = (state) => {
    // debugger
    return {
        currentUser: users[session.id],
        users: Object.values(state.entities.users)
    };
};

const mDTP = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(mSTP, mDTP)(NewsFeed);