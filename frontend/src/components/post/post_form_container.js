import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';


const mapStatetoProps = (state) => {
    return {
        errors: state.errors.post
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        createPost: post => dispatch(createPost(post))
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(PostForm);