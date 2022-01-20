import { connect } from 'react-redux';
import PostIndex from './post_index';
import { getAllPosts, editPost, deletePost } from '../../actions/post_actions';
import { fetchAllUsers } from '../../actions/user_actions';

const mSTP = state => {
    return{
    posts: Object.values(state.entities.posts),
    currentUser: state.entities.users.filter(user => user._id === state.session.user.id),
    users: state.entities.users
}};

const mDTP = dispatch => ({
    getAllPosts: data => dispatch(getAllPosts(data)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    editPost: post => dispatch(editPost(post)),
    deletePost: postId => dispatch(deletePost(postId))
});

export default connect(mSTP, mDTP)(PostIndex);