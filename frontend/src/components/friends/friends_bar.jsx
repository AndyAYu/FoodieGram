import React from 'react';
// import { useStore } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faComments } from '@fortawesome/free-solid-svg-icons'

class FriendsBar extends React.Component{

    constructor(props){
        super(props)
      
        // this.handleMessenger = this.handleMessenger.bind(this);
        this.handlePage = this.handlePage.bind(this);
    }

    handlePage(num){
        this.props.history.push(`/pages/${num}`)
    }

    // handleMessenger(){
    //     this.props.history.push(`/messenger`)
    // }
    render(){
        const {currentUserFriends, allUsers, currentUserId} = this.props;
        // debugger
        return(
            <div className='friends-bar'>
                <div className='friends-bar-title'>My Friends</div>
                {allUsers.map((user,i) => {
                    // debugger
                    if(currentUserFriends.includes(user._id) && user._id !== currentUserId){
                        // debugger
                    return(
                        <div className='friend-list-item' key={i}>
                            <div className='friend-info'>
                                <img className='friend-profile-photo' alt=''src={user.avatar}></img>
                                <button className='friend-name' onClick={() => this.handlePage(i)}>{user.handle.charAt(0).toUpperCase() + user.handle.slice(1)}</button>
                                {/* <button className='friend-page-messenger' onClick={() => this.handleMessenger()}><FontAwesomeIcon icon={faComments}/></button> */}
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