import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import CreatePostFormContainer from '../post/create_post_form_container';
// import './navbar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            showPost: false
        }

        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
        this.showPostForm = this.showPostForm.bind(this);
        this.hidePostForm = this.hidePostForm.bind(this);
    }

    showPostForm(){
        this.setState({
            showPost: true
        })
    }

    hidePostForm(){
        this.setState({
            showPost: false
        })
    }

    logoutUser(e) {
        // debugger
        e.preventDefault();
        this.props.logout();
        // this.props.history.push('/')
    }


    getLinks() {
        const {currentUserIndex} = this.props;
        // let currentUserId;
    
        if (this.props.loggedIn) {          
                
            return (
                <div>
                    <Link to={'/posts'}>All Posts</Link>
                    <Link to={`/pages/${currentUserIndex}`}>Profile</Link>
                    <button onClick={this.showPostForm}>Write a Post</button>
                    <Link to={'/messenger'}>Live Chat</Link>
                    <button onClick={this.logoutUser}>Logout</button>
                    <CreatePostFormContainer showPost={this.state.showPost} hidePostForm={this.hidePostForm} />
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

export default withRouter(NavBar);