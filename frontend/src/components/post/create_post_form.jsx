import React from 'react';

class CreatePostForm extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            body: "",
            restaurant: "",
            address: "",
            user: "",
            errors: {},
            haveErrors: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.resetFields = this.resetFields.bind(this);
    }

    
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value,
            user: this.props.userId,
            handle: this.props.currentUser.handle
        })
    }

    resetFields(){
        this.setState({
            body: "",
            restaurant: "",
            address: "",
            errors: {}
        })
        // debugger
        this.props.removePostErrors();
        this.props.hidePostForm();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ errors: nextProps.errors, haveErrors: true })
    }

    handleSubmit(e) {
        e.preventDefault();
        
        let newPost = {
        body: this.state.body,
        restaurant: this.state.restaurant,
        address: this.state.address,
        handle: this.state.handle,
        user: this.state.user
        }

        this.props.createPost(newPost).then((res) => {
            debugger
            if (res.errors) {
                this.setState({errors: res.errors })
            } else { this.resetFields() }})
    }

    renderErrors(field) {
        // debugger
        if (this.state.errors) {
            return (
                <div className="post-errors">
                    {this.state.errors[field]}
                </div>
            );
        }
        
    }

        render() {
            if (!this.props.userId) return null;
            const klass1 = this.props.showPost ? "post-bg" : "hidden";
            const klass2 = this.props.showPost ? "post-form" : "hidden";
    
            return (
                <div className={klass1} onClick={this.resetFields} >
                    <form className={klass2} onSubmit={this.handleSubmit} onClick={e => e.stopPropagation()}>
                    <div className="post-header">Write a new post</div>
                        <div className="form-div">
                            <label className="rest-label">Restaurant name
                            <input type="text"
                                value={this.state.restaurant}
                                onChange={this.update('restaurant')}
                                placeholder="Ex: Clinton St. Baking Company" className="post-rest"
                            />
                            {this.renderErrors("restaurant")}
                            </label>
                            <br />
                            <label className="post-address-label">Address
                            <input type="text" className="post-address"
                                value={this.state.address}
                                onChange={this.update('address')}
                                placeholder="4 Clinton St, New York, NY 10002"
                            />
                            {this.renderErrors("address")}
                            </label>
                            <br />
                            <label className="post-body-label">Thoughts?
                            <textarea className="post-body"
                                value={this.state.body}
                                onChange={this.update('body')}
                                placeholder="Lovely local spot."
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