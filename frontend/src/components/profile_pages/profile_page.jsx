import React from 'react';
import NavBar from '../nav/navbar'


class ProfilePage extends React.Component{

    componentDidMount(){
        this.props.fetchAllUsers();
    }
    render(){
        const {loggedIn, users} = this.props;
        const user = users[this.props.match.params.userId]
        debugger
        if (!user) return null;
        return(
            <div className='profile-page-container'>
                <div className='profile-info-container'>
                    <div className='profile-picture'>
                        <img></img>
                        {user.handle}
                        <div>About me goes here</div>
                    </div>
                    <div className='profile-posts'>
                        User posts go here
                    </div>
                    {loggedIn ? <div>Friends Bar component goes here</div> : <div></div>}
                </div>
            </div>
        )
    }
}

export default ProfilePage;