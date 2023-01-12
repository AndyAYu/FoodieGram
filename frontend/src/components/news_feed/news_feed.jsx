import React from "react";
// import { Link } from 'react-router-dom';
// const NewsFeed = ({ currentUser})
import PostIndexContainer from '../post/post_index_container';
// import FriendsBarContainer from '../friends/friends_bar_container'
// import Comment from "../../../../models/Comment";

class NewsFeed extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <div className="main-feed">
                <div className="pi-container">
                    <div className="food-feed">Foodie Feed</div>
                <PostIndexContainer />
                </div>
            </div>
        )
    }
}

export default NewsFeed;