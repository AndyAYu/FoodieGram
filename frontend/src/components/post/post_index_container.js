import { connect } from 'react-redux';
import PostIndex from './post_index';
import { getAllPosts, deletePost, addLike, removeLike } from '../../actions/post_actions';
import { fetchAllUsers } from '../../actions/user_actions';

const mSTP = state => {
    return{
    posts: Object.values(state.entities.posts),
    currentUser: state.entities.users.filter(user => user._id === state.session.user.id),
    users: state.entities.users,
    likes: state.entities.likes
}};

const mDTP = dispatch => ({
    getAllPosts: data => dispatch(getAllPosts(data)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    deletePost: postId => dispatch(deletePost(postId)),
    addLike: post => dispatch(addLike(post)),
    removeLike: post => dispatch(removeLike(post))
});

export default connect(mSTP, mDTP)(PostIndex);