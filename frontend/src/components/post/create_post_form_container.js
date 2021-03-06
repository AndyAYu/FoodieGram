import { connect } from 'react-redux';
import { createPost, removePostErrors, getAllPosts } from '../../actions/post_actions';
import CreatePostForm from './create_post_form';

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users.filter(user => user._id === state.session.user.id),
    showPost: ownProps.showPost,
    userId: state.session.user.id,
    errors: state.errors.post
});

const mDTP = (dispatch, ownProps) => {
    return  {createPost: post => dispatch(createPost(post)),
            hidePostForm: () => ownProps.hidePostForm(),
            removePostErrors: () => dispatch(removePostErrors()),
            getAllPosts: () => dispatch(getAllPosts())
}};

export default connect(mSTP, mDTP)(CreatePostForm);