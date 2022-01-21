import React from 'react';
import FileBase64 from 'react-file-base64';

class CreatePostForm extends React.Component {
    constructor(props){
        super(props);
        debugger
        this.state = {
            body: "",
            restaurant: "",
            address: "",
            user: "",
            postImage: [],
            errors: {},
            haveErrors: false
        }
        this.getpostImage = this.getpostImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.resetFields = this.resetFields.bind(this);
        debugger
    }

    
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value,
            user: this.props.userId
        });
    }

    resetFields(){
        this.setState({
            body: "",
            restaurant: "",
            address: "",
            postImage: [],
            errors: {}
        })
        // debugger
        this.props.removePostErrors();
        this.props.hidePostForm();
    }

    getpostImage(postImage) {
        debugger
        this.setState({ postImage: postImage })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ errors: nextProps.errors, haveErrors: true })
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        let newPost = {
        body: this.state.body,
        restaurant: this.state.restaurant,
        address: this.state.address,
        user: this.state.user,
        postImage: this.state.postImage
        }

        if (!this.state.body || !this.state.restaurant || !this.state.address) {
           const postErrors = document.getElementById("post-errors")
            postErrors.classList.remove('hidden')
        } 

        this.props.createPost(newPost).then(()=> this.resetFields());
    }

    renderErrors(field) {
        // debugger
        return (
            <div className="post-errors hidden">
                {this.state.errors[field]}
            </div>
        );
    }
        render() {
            debugger
            if (!this.props.userId) return null;
            const klass1 = this.props.showPost ? "post-bg" : "hidden";
            const klass2 = this.props.showPost ? "post-form" : "hidden";
     
            return (
                <div className={klass1} onClick={this.resetFields} >
                    <form className={klass2} onSubmit={this.handleSubmit} onClick={e => e.stopPropagation()}>
                    <div className="login-header">Write a new post</div>
                        <div className="form-div">
                            <label className="post-label">Upload Image
                            <input type="text"
                                value={this.state.postImage}
                                onChange={this.update('postImage')}
                                className="post-image"
                                />
                                <FileBase64
                                    multiple={false}
                                    onDone={this.getpostImage} />
                            </label>
                            <br />
                            <label className="rest-label">Restaurant name
                            <input type="text"
                                value={this.state.restaurant}
                                onChange={this.update('restaurant')}
                                placeholder="Restaurant name" className="post-rest"
                            />
                            {this.renderErrors("")}
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