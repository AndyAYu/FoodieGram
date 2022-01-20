import React from 'react';
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
        const {currentUserFriends, allUsers} = this.props;
        // debugger
        return(
            <div className='friends-bar'>
                {allUsers.map((user,i) => {
                    // debugger
                    if(currentUserFriends.includes(user._id)){
                        return(
                            <div className='friend-list-item'>
                                {user.handle.charAt(0).toUpperCase() + user.handle.slice(1)}
                                <button className='friend-page-button' onClick={() => this.handlePage(i)}>Page</button>
                                <button className='friend-page-messenger' onClick={() => this.handleMessenger()}>Messenger</button>                      
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}

export default withRouter(FriendsBar);