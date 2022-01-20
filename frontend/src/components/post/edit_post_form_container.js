import { connect } from 'react-redux';
import { editPost, removePostErrors, getPost } from '../../actions/post_actions';
import EditPostForm from './edit_post_form';

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users.filter(user => user._id === state.session.user.id),
    userId: state.session.user.id,
    errors: state.errors.post,
    post: ownProps.post,
    editPostForm: ownProps.editPostForm
});

const mDTP = (dispatch, ownProps) => {
    return  {editPost: post => dispatch(editPost(post)),
            closeEditForm: () => ownProps.closeEditForm(),
            removePostErrors: () => dispatch(removePostErrors()),
            getPost: postId => dispatch(getPost(postId))
}};

export default connect(mSTP, mDTP)(EditPostForm);