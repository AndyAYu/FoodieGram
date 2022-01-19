import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import CreatePostForm from './create_post_form';

const mSTP = state => ({
    currentUser: state.entities.users.filter(user => user._id === state.session.user.id)
});

const mDTP = dispatch => ({
    createPost: post => dispatch(createPost)
});

export default connect(mSTP, mDTP)(CreatePostForm);