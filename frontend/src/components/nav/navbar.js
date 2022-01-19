import React from 'react';
import { Link } from 'react-router-dom'
// import './navbar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }


    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        // const {currentUser, allUsers} = this.props;
        // let currentUserId;
    
        if (this.props.loggedIn) {          
                
            return (
                <div>
                    <Link to={'/posts'}>All Posts</Link>
                    <Link to={`/pages/${1}`}>Profile</Link>
                    <Link to={'/new_post'}>Write a Post</Link>
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div>
                     <span><button className="login-btn" onClick={() => this.props.openModal('Login')}>Login</button></span>
                    <span><button className="signup-btn" onClick={() => this.props.openModal('Sign Up')}>Create Account</button></span>
                </div>
            );
        }
    }

    render() {
        // debugger
        return (
            <nav className="navbar">
                <h1 className="logo"><Link to ='/'>FoodieGram</Link></h1>
                {this.getLinks()}
            </nav>
        );
    }
}

export default NavBar;