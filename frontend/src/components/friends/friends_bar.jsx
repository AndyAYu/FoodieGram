import React from 'react';

class FriendsBar extends React.Component{

    render(){
        const {currentUserFriends, allUsers} = this.props;
        // debugger
        return(
            <div className='friends-bar'>
                {allUsers.map(user => {
                    // debugger
                    if(currentUserFriends.includes(user._id)){
                        return(
                            <div className='friend-list-item'>
                                {user.handle.charAt(0).toUpperCase() + user.handle.slice(1)}                            
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}

export default FriendsBar;