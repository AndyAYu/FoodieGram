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
        const userId = this.props.post.user;
        const userObj = this.props.users ? (this.props.users.filter(user => user._id === userId)) : (null)
        
        const edit = this.props.currentUser[0] && this.props.post.user === this.props.currentUser[0]._id ? (
            <div className="post-buttons">
                <Link to={`/edit_post/${this.props.post._id}`} className="delete-post">Edit</Link> 
                <button className="delete-post" onClick={()=>this.props.deletePost(this.props.post._id)}>Delete</button>
            </div>
        ) : (
            null
        )
            
        return (
        <li className="post-index-item">
            <div>Posted on {this.props.post.date.slice(0, 10)} by {userObj[0].handle}</div>
            <div className="rest-name">{this.props.post.restaurant}</div>
            <div className="rest-address">{this.props.post.address}</div>
            <div className={`post-photo-${this.props.idx}`}></div>
            <div className="post-body">{this.props.post.body}</div>
           {edit}
           <EditPostFormContainer post={this.props.post} editPostForm={this.state.editPostForm} closeEditForm={this.closeEditForm} />
        </li>
        )
    }
}

export default PostIndexItem;