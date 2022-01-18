import React from 'react';
import NavBar from '../nav/navbar'


class ProfilePage extends React.Component{

    componentDidMount(){
        this.props.fetchAllUsers();
        // this.props.fetchUser(this.props.match.params.userId)
        // this.props.fetchPosts();
    }
    render(){
        // debugger
        const {loggedIn} = this.props;
        return(
            <div className='profile-page-container'>
                {/* <div className='nav-bar-container'>
                    <NavBar/>
                </div> */}
                <div className='profile-info-container'>
                    <div className='profile-picture'>
                        <img></img>
                        <div>About me goes here</div>
                    </div>
                    <div className='profile-posts'>
                        User posts go here
                    </div>
                    {loggedIn ? <div>Friends Bar component goes here</div> : null}
                </div>
            </div>
        )
    }
}

export default ProfilePage;