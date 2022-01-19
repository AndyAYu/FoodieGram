import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            handle: '',
            password: '',
            password2: '',
            errors: {},
            signedIn: this.props.signedIn,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ errors: nextProps.errors })
    }

    componentWillUnmount() {
        this.props.closeModal();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            handle: this.state.handle,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user, this.props.history)
        console.log(this.state.signedIn)
        if(this.state.signedIn){
            this.props.login(user)
        } 
          
    }

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
            <div className="signup-form-container">
                <div className="signup-header">Sign Up</div>
                <form className="auth-form" onSubmit={this.handleSubmit}>
                    <div className="form-div">
                        <br />
                        <label className="signup-email-label">Email
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email" className="signup-email"
                        />{this.renderErrors("email")}
                        </label>
                        <br />
                        <label className="signup-handle-label">Handle
                        <input type="text"
                            value={this.state.handle}
                            onChange={this.update('handle')}
                            placeholder="Handle" className="signup-handle"
                        />{this.renderErrors("email")}
                        </label>
                        <br />
                        <label className="signup-password-label">Password
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password" className="signup-password"
                        />{this.renderErrors("email")}
                        </label>
                        <br />
                        <label className="signup-password2-label">Confirm password
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password" className="signup-password2"
                        />{this.renderErrors("email")}
                        </label>
                        <br />
                        <input className="submit-form-btn" type="submit" value="Submit" />
                        <button className="demo-form-btn">Demo Login</button>
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);