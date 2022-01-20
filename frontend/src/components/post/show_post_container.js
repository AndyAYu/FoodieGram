import { connect } from 'react-redux';
import { editPost, removePostErrors, getPost } from '../../actions/post_actions';
import ShowPost from './show_post';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    if (ownProps.match.params.postId) {
    return {
    currentUser: state.entities.users.filter(user => user._id === state.session.user.id),
    userId: state.session.user.id,
    postId: ownProps.match.params.postId,
    post: state.entities.posts[0]
    }}
    else {
        return {};
    }
};

const mDTP = (dispatch) => ({
    getPost: postId => dispatch(getPost(postId))
});

export default withRouter(connect(mSTP, mDTP)(ShowPost));