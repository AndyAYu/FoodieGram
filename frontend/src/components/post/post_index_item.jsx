import React from 'react';
import EditPostFormContainer from './edit_post_form_container';
import { Link } from 'react-router-dom';

class PostIndexItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            editPostForm: false
        }

    }

    render(){
        if (!this.props.post || !this.props.users) return null;
        // const userId = this.props.post.user;
        
        const edit = this.props.currentUser[0] && this.props.post.user._id === this.props.currentUser[0]._id ? (
            <div className="post-buttons">
                <Link to={`/edit_post/${this.props.post._id}`} className="delete-post"><i className="fas fa-marker"></i></Link> 
                <button className="delete-post" onClick={()=>this.props.deletePost(this.props.post._id)}><i className="fas fa-trash-alt"></i></button>
            </div>
        ) : (
            null
        )
            
        return (
        <li className="post-index-item">
            <div>Posted on {this.props.post.date.slice(0, 10)} by {this.props.post.user.handle}</div>
            <div className="rest-name">{this.props.post.restaurant}</div>
            <div className="rest-address">{this.props.post.address}</div>
            {/* <div className={`post-photo-${this.props.idx}`}></div> */}
            <div className="post-body">{this.props.post.body}</div>
           {edit}
           <EditPostFormContainer post={this.props.post} editPostForm={this.state.editPostForm} closeEditForm={this.closeEditForm} />
        </li>
        )
    }
}

export default PostIndexItem;