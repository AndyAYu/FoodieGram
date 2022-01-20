import React from 'react';

class EditPostForm extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            body: this.props.post.body,
            restaurant: this.props.post.restaurant,
            address: this.props.post.address,
            user: this.props.userId,
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
            errors: ""
        });
    }

        resetFields(){
            this.setState({
                body: "",
                restaurant: "",
                address: ""
            })

            this.props.removePostErrors();
            this.props.closeEditForm();
        }


        handleSubmit(e) {
            e.preventDefault();
            
            let newPost = {
            body: this.state.body,
            restaurant: this.state.restaurant,
            address: this.state.address,
            user: this.state.user
            }

            this.props.editPost(newPost);

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
            if (!this.props.userId || !this.props.post) return null;
            const klass1 = this.props.editPostForm ? "post-bg" : "hidden";
            const klass2 = this.props.editPostForm ? "post-form" : "hidden";
            return (
                <div className={klass1} onClick={this.resetFields} >
                    <form className={klass2} onSubmit={this.handleSubmit} onClick={e => e.stopPropagation()}>
                    <div className="login-header">Edit your post</div>
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

export default EditPostForm;