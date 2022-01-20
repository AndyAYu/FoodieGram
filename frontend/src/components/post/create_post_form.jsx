import React from 'react';

class CreatePostForm extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            body: "",
            restaurant: "",
            address: "",
            user: "",
            errors: {}
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.resetFields = this.resetFields.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ errors: nextProps.errors })
    }
    
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value,
            user: this.props.userId,
            errors: ""
        });
    }

        resetFields(){
            debugger
            this.setState({
                body: "",
                restaurant: "",
                address: "",
                errors: ""
            })

            this.props.removePostErrors();
            this.props.hidePostForm();
        }


        handleSubmit(e) {
            e.preventDefault();
            
            let newPost = {
            body: this.state.body,
            restaurant: this.state.restaurant,
            address: this.state.address,
            user: this.state.user
            }

            this.props.createPost(newPost);

            if (!this.state.errors){
                this.resetFields();
            }
        }


        renderErrors(field) {
            // debugger
            return (
                <div>
                    {this.state.errors[field]}
                </div>
            );
        }

        render() {
            if (!this.props.userId) return null;
            const klass1 = this.props.showPost ? "post-bg" : "hidden";
            const klass2 = this.props.showPost ? "post-form" : "hidden";
            console.log(this.state);
            return (
                <div className={klass1} onClick={this.resetFields} >
                    <form className={klass2} onSubmit={this.handleSubmit} onClick={e => e.stopPropagation()}>
                    <div className="login-header">Write a new post</div>
                        <div className="form-div">
                            <label className="rest-label">Restaurant name
                            <input type="text"
                                value={this.state.restaurant}
                                onChange={this.update('restaurant')}
                                placeholder="Restaurant name" className="post-rest"
                            />
                            {this.renderErrors("restaurant")}
                            </label>
                            <br />
                            <label className="post-address-label">Address
                            <input type="text" className="post-address"
                                value={this.state.address}
                                onChange={this.update('address')}
                                placeholder="Address"
                            />
                            {this.renderErrors("address")}
                            </label>
                            <br />
                            <label className="post-body-label">Thoughts on this place?
                            <input type="text" className="post-body"
                                value={this.state.body}
                                onChange={this.update('body')}
                                placeholder="Comment"
                            />
                            {this.renderErrors("body")}
                            </label>
                            <br />
                            <div className="button-row">
                                <input className="submit-form-btn" type="submit" value="Create Post" />
                            </div>
                        </div>
                    </form>
                </div>
            );
        }

}

export default CreatePostForm;