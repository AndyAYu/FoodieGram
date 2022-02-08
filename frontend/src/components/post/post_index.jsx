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

        let specificPosts;
        if (this.props.currentUser[0] === undefined) {
            specificPosts = [];
        } else if (this.props.match.params.userId) {
           specificPosts = this.props.posts.filter(post => post.user._id === this.props.users[this.props.match.params.userId]._id) 
        } else {
            specificPosts = this.props.posts.filter(post => this.props.currentUser[0].friends.includes(post.user._id) || this.props.currentUser[0]._id === post.user._id);
        }
        // debugger
        const eachPost = specificPosts.sort((post1, post2) => {
            return new Date(post2.updatedAt) - new Date(post1.updatedAt);
        })
       
        let postItem;

        if (eachPost.length > 0){
            postItem = eachPost.map((post, idx) => <PostIndexItem post={post} key={idx} users={this.props.users} currentUser={this.props.currentUser} 
            likes={this.props.likes[post._id]} addLike={this.props.addLike} removeLike={this.props.removeLike}
            deletePost={this.props.deletePost} editPost={this.props.editPost} idx={idx}/>)
        }
         else if (eachPost.length === 0 && this.props.match.params.userId) {
            postItem = (<div className="no-post">There are no posts yet...</div>)
         } else {
             postItem = (<div>Your feed is empty. Start finding foodies to see what's going on!</div>)
         }

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