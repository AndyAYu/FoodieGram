import React from 'react';
import NavBar from '../nav/navbar'


class ProfilePage extends React.Component{

    render(){
        const {loggedIn} = this.props;
        return(
            <div className='profile-page-container'>
                <div className='nav-bar-container'>
                    <NavBar/>
                </div>
                <div className='profile-info-container'>
                    <div className='profile-picture'>
                        About me goes here
                    </div>
                    <div className='profile-posts'>
                        User posts go here
                    </div>
                    {loggedIn ? "Friends Bar goes here" : null}
                </div>
            </div>
        )
    }
}

export default ProfilePage;