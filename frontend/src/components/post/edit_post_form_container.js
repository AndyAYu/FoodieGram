import { connect } from 'react-redux';
import { editPost, removePostErrors, getPost } from '../../actions/post_actions';
import EditPostForm from './edit_post_form';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    if (ownProps.match.params.postId) {
    return {
    currentUser: state.entities.users.filter(user => user._id === state.session.user.id),
    userId: state.session.user.id,
    errors: state.errors.post,
    post: state.entities.posts[ownProps.match.params.postId]
    }}
    else {
        return {};
    }
};

const mDTP = (dispatch, ownProps) => ({
    editPost: post => dispatch(editPost(post)),
    // closeEditForm: () => ownProps.closeEditForm(),
    removePostErrors: () => dispatch(removePostErrors()),
    getPost: postId => dispatch(getPost(postId))
});

export default withRouter(connect(mSTP, mDTP)(EditPostForm));