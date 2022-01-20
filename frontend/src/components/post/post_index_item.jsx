import React from 'react';

class PostIndexItem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        if (!this.props.post) return null;
        const userId = this.props.post.user;
        const userObj = this.props.users.filter(user => user._id === userId);
        debugger
        const edit = this.props.currentUser._id === this.props.post.user ? (
            <div className="post-buttons">
                <button className="post-edit-button">Edit</button>
                <button className="post-delete-button">Delete</button>
            </div>
        ) : (
            null
        )
      
        return (
        <li className="post-index-item">
            <h1>{this.props.post.date.slice(0, 10)}</h1>
            <h1>{userObj[0].handle}</h1>
            <h1>{this.props.post.restaurant}</h1>
            <h1>{this.props.post.address}</h1>
            <h1>{this.props.post.body}</h1>
            {edit}
        </li>
        )
    }
}

export default PostIndexItem;