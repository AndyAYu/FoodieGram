import React from "react";
// import { Link } from 'react-router-dom';
// const NewsFeed = ({ currentUser})
import PostIndexContainer from '../post/post_index_container';
// import Comment from "../../../../models/Comment";

class NewsFeed extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // debugger
        // this.props.fetchAllUsers();
    }

    render(){
        return(
            <div className="main-feed">
                <aside className="aside-left">
                    <h1>Shortcuts</h1>
                </aside>
                <PostIndexContainer />
               <aside className="aside-right">
                   Friends Bar
               </aside>
            </div>
        )
    }
}

export default NewsFeed;