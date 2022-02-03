import React from 'react';
import PostIndexItem from './post_index_item';
import { withRouter } from 'react-router-dom';

class PostIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllUsers();
        this.props.getAllPosts();
    }

    render(){
        if (!this.props.posts || !this.props.users) return null;

        const specificPosts = this.props.match.params.userId ? this.props.posts.filter(post => post.user._id === this.props.users[this.props.match.params.userId]._id) :
        this.props.posts.filter(post => this.props.currentUser[0].friends.includes(post.user._id) || this.props.currentUser[0]._id === post.user._id); 

        const eachPost = specificPosts.sort((post1, post2) => {
            return new Date(post2.updatedAt) - new Date(post1.updatedAt);
        })
       
        const postItem = eachPost.map((post, idx) => <PostIndexItem post={post} key={idx} 
        users={this.props.users} 
        currentUser={this.props.currentUser} 
        deletePost={this.props.deletePost} editPost={this.props.editPost} idx={idx}/>)
        return (
            <div className="post-index">
                <ul>
                    {postItem}
                </ul>
            </div>
        )
    }
}

export default withRouter(PostIndex);