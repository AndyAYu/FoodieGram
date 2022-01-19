import React from 'react';
import NavBar from '../nav/navbar'


class ProfilePage extends React.Component{

    componentDidMount(){
        this.props.fetchAllUsers();
        // this.props.fetchAllPosts();
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
                        <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/637057ab-e96d-4cef-8e18-fe67f4bfb343/de7am4n-8729f211-870d-4475-b8b7-fe525854e8f8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYzNzA1N2FiLWU5NmQtNGNlZi04ZTE4LWZlNjdmNGJmYjM0M1wvZGU3YW00bi04NzI5ZjIxMS04NzBkLTQ0NzUtYjhiNy1mZTUyNTg1NGU4ZjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ukD5SFWZwoj_ZoPDuieCTdFaiN0vOehbQ9-mq3z-ycQ'></img>
                        <div className='profile-name'> {user.handle}</div>
                        <div>About me goes here</div>
                        {<button className='profile-add-friend'>Add Friend</button>}
                        <div>Shortcuts</div>
                    </div>
                    <div className='profile-posts'>
                        <div>All posts  </div>
                        <div></div>
                        <div>Create Post form component</div>
                        <div>Posts container component</div>


                    </div>
                    {loggedIn ? <div className='friends-bar'>Friends Bar component goes here</div> : <div></div>}
                </div>
            </div>
        )
    }
}

export default ProfilePage;