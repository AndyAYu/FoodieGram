import { deleteModel } from 'mongoose';
import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // Once the user has been authenticated, redirect to the Tweets
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/tweets');
        }

        // Set or clear errors
        this.setState({ errors: nextProps.errors })
    }

    componentWillUnmount(){
        this.props.closeModal();
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
        
    }

    handleDemoSubmit(e){
        e.preventDefault();

        this.props.login({
            email: "demo@gmail.com",
            password: "password"
        })
    }

    // Render the session errors if there are any
    renderErrors(field) {
        // debugger
        return (
            <div className="error">
                {/* {Object.keys(this.state.errors).map((error, i) => (
                    <li className="errors-li" key={`error-${i}`}> */}
                        {this.state.errors[field]}
                    {/* </li> */}
            </div>
        );
    }

    render() {
        return (
            <div className="auth-form-container">
                <div className="login-header">Login</div>
                <form className="auth-form" onSubmit={this.handleSubmit}>
                    <div className="form-div">
                        <label className="login-email-label">Email
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email" className="login-email"
                        />{this.renderErrors("email")}
                        </label>
                        <br />
                        <label className="login-password-label">Password
                        <input type="password" className="login-password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />{this.renderErrors("password")}
                         </label>
                        <br />
                        <div className="button-row">
                            <input className="submit-form-btn" type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
                <button onClick={this.handleDemoSubmit} className="demo-form-btn">Demo Login</button>
                    {/* <div className="no-account"><p>Don't have an account?</p>
                    <button className="signup-bottom">Signup</button></div> */}
            </div>
        );
    }
}

export default withRouter(LoginForm);