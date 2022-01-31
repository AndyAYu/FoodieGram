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
        if (!this.props.posts) return null;
        if (!this.props.users) return null;

        const specificPosts = this.props.match.params.userId ? this.props.posts.filter(post => this.props.currentUser[0].friends.includes(post.user)) :
        (this.props.posts); 
    
        const eachPost = specificPosts.sort((post1, post2) => {
            return new Date(post2.updatedAt) - new Date(post1.updatedAt);
        })
        // debugger
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