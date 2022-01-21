import React from 'react';
import PostIndexContainer from '../post/post_index_container';

import FriendsBarContainer from '../friends/friends_bar_container';
import Newsfeed from '../news_feed/news_feed';
// import FriendsBar from '../friends/friends_bar';

class ProfilePage extends React.Component{

    constructor(props){
        super(props)

        this.addFriend = this.addFriend.bind(this);
        this.removeFriend = this.removeFriend.bind(this);
        this.befriended = this.befriended.bind(this);
    }

    componentDidMount(){
        this.props.fetchAllUsers();
        // this.props.fetchAllPosts();
    }

    addFriend(){
        // debugger
        this.props.addFriend(this.props.users[this.props.match.params.userId]._id);
    }

    removeFriend(){
        // debugger
        this.props.removeFriend(this.props.users[this.props.match.params.userId]._id)
    }

    befriended(){
        const {users, currentUser} = this.props;
        let index;
        index = users.findIndex(user => user._id === currentUser);
        // debugger
        if (index === Number(this.props.match.params.userId)) return <div>You can't be your own friend</div>

        if (users[index].friends.includes(users[this.props.match.params.userId]._id)) 
            { return <button className='profile-remove-friend' onClick={() => this.removeFriend()}>Remove Friend</button>}
        else 
            { return <button className='profile-add-friend' onClick={() => this.addFriend()}>Add Friend</button>   }     
    
        
    }
    render(){
        const {loggedIn, users} = this.props;
        const user = users[this.props.match.params.userId]
        // debugger
        if (!user) return null;
        return(
            <div className='profile-page-container'>
                <div className='profile-info-container'>
                    <div className='profile-picture'>
                        <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/637057ab-e96d-4cef-8e18-fe67f4bfb343/de7am4n-8729f211-870d-4475-b8b7-fe525854e8f8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYzNzA1N2FiLWU5NmQtNGNlZi04ZTE4LWZlNjdmNGJmYjM0M1wvZGU3YW00bi04NzI5ZjIxMS04NzBkLTQ0NzUtYjhiNy1mZTUyNTg1NGU4ZjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ukD5SFWZwoj_ZoPDuieCTdFaiN0vOehbQ9-mq3z-ycQ'></img>
                     
                     
                        {/* <div>Shortcuts</div> */}
                        <div className='profile-name'> {user.handle.charAt(0).toUpperCase() + user.handle.slice(1)}</div>
                        <div className="about-me">About me goes here</div>
                        {this.befriended()}
                        {/* <div>Shortcuts</div> */}
                    </div>
                    {/* <div className='profile-posts'> */}
                        {/* <PostIndexContainer />   */}
                        {/* <div></div>
                        <div>Create Post form component</div>
                        <div>Posts container component</div> */}


                    {/* </div> */}
                    {/* <div className='profile-posts'> */}
                        <PostIndexContainer />
                    {/* </div> */}
                    {loggedIn ? <FriendsBarContainer/> : <div></div>}
                </div>
            </div>
        )
    }
}

export default ProfilePage;