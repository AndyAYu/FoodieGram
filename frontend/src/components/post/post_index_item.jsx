import React from 'react';
import EditPostFormContainer from './edit_post_form_container';

class PostIndexItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            editPostForm: false
        }

        this.openEditForm = this.openEditForm.bind(this);
        this.closeEditForm = this.closeEditForm.bind(this);
    }

    openEditForm(){
        this.setState({ editPostForm: true})
    }

    closeEditForm(){
        this.setState({ editPostForm: false})
    }

    render(){
        if (!this.props.post || !this.props.users) return null;
        const userId = this.props.post.user;
        const userObj = this.props.users ? (this.props.users.filter(user => user._id === userId)) : (null)
        
        const edit = this.props.post.user === this.props.currentUser[0]._id ? (
            <div className="post-buttons">
                <button onClick={this.openEditForm} className="post-edit-button">Edit</button>
                <button onClick={()=>this.props.deletePost(this.props.post._id)} className="post-delete-button">Delete</button>
            </div>
        ) : (
            null
        )
  
        return (
        <li className="post-index-item">
            <h1>Posted on {this.props.post.date.slice(0, 10)}</h1>
            {/* <h1>{userObj[0].handle}</h1> */}
            <h1>{this.props.post.restaurant}</h1>
            <h1>{this.props.post.address}</h1>
            <h1>{this.props.post.body}</h1>
           {edit}
           <EditPostFormContainer post={this.props.post} editPostForm={this.state.editPostForm} closeEditForm={this.closeEditForm} />
        </li>
        )
    }
}

export default PostIndexItem;