import React from 'react';

class PostIndexItem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        if (!this.props.post) return null;
        const userId = this.props.post.user;
        const userObj = this.props.users.filter(user => user._id === userId);
        // debugger
        return (
        <li className="post-index-item">
            <h1>{this.props.post.date.slice(0, 10)}</h1>
            <h1>{userObj[0].handle}</h1>
            <h1>{this.props.post.restaurant}</h1>
            <h1>{this.props.post.address}</h1>
            <h1>{this.props.post.body}</h1>
        </li>
        )
    }
}

export default PostIndexItem;