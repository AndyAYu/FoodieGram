import React from "react";
import { withRouter } from 'react-router-dom'

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            address: '',
            restaurant: '',
            errors: {}
        };

    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let post = {
            body: this.state.body,
            address: this.state.address,
            restaurant: this.state.restaurant
        };
        this.props.createPost(post)
    }

    renderErrors(field) {
        return (
            <div className="error">
                {this.state.errors[field]}
            </div>
        );
    }

    render() {
        return (
            <div className="post-form">
                <form onSubmit={this.handleSubmit}>
                    <label>Body
                        <input type="text"
                        value={this.state.body}
                        onChange={this.update('body')}
                        placeholder="Text Body here" className="postBody"
                        />
                        {this.renderErrors("email")}
                    </label>
                </form>
            </div>
        )
    }

}

export default withRouter(PostForm);