import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import CreatePostFormContainer from '../post/create_post_form_container';
// import './navbar.css'

import SearchBarContainer from '../search_bar/search_bar_container'

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
                    <SearchBarContainer/>
                    <Link to={`/pages/${currentUserIndex}`} className="other-btn"><i className="fas fa-user-circle"></i></Link>
                    <button onClick={this.showPostForm} className="other-btn"><i className="fas fa-edit"></i></button>
                    <Link to={'/messenger'} className="other-btn"><i className="far fa-comments"></i></Link>
                    <button className="logout-btn" onClick={this.logoutUser}>Logout</button>
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