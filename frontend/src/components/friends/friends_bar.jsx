import React from 'react';
import { useStore } from 'react-redux';
import { withRouter, Link, Redirect } from 'react-router-dom';

class FriendsBar extends React.Component{

    constructor(props){
        super(props)
      
        this.handleMessenger = this.handleMessenger.bind(this);
        this.handlePage = this.handlePage.bind(this);
    }

    handlePage(num){
        this.props.history.push(`/pages/${num}`)
    }

    handleMessenger(){
        this.props.history.push(`/messenger`)
    }
    render(){
        const {currentUserFriends, allUsers, currentUserId} = this.props;
        // debugger
        return(
            <div className='friends-bar'>
                <div className='friends-bar-title'>My Friends:</div>
                {allUsers.map((user,i) => {
                    // debugger
                    if(currentUserFriends.includes(user._id) && user._id !== currentUserId){
                        // debugger
                        return(
                            <div className='friend-list-item'>
                                <div className='friend-info'>
                                    <img className='friend-profile-photo' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/637057ab-e96d-4cef-8e18-fe67f4bfb343/de7am4n-8729f211-870d-4475-b8b7-fe525854e8f8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYzNzA1N2FiLWU5NmQtNGNlZi04ZTE4LWZlNjdmNGJmYjM0M1wvZGU3YW00bi04NzI5ZjIxMS04NzBkLTQ0NzUtYjhiNy1mZTUyNTg1NGU4ZjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ukD5SFWZwoj_ZoPDuieCTdFaiN0vOehbQ9-mq3z-ycQ'></img>
                                    <div className='friend-name'>{user.handle.charAt(0).toUpperCase() + user.handle.slice(1)}</div>
                                
                                </div>
                                <div className="friend-buttons">
                                    <button className='friend-page-button' onClick={() => this.handlePage(i)}>Page</button>
                                    <button className='friend-page-messenger' onClick={() => this.handleMessenger()}>Messenger</button>
                                </div>                 
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}

export default withRouter(FriendsBar);