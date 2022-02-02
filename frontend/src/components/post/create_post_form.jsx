import React from 'react';
import FileBase64 from 'react-file-base64';

class CreatePostForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            body: "",
            restaurant: "",
            address: "",
            user: "",
            fileName: "",
            file: {},
            errors: {},
            haveErrors: false
        }
        this.fileRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.resetFields = this.resetFields.bind(this);
        this.updateFile = this.updateFile.bind(this);
    }

    
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value,
            user: this.props.userId,
            handle: this.props.currentUser.handle
        })
    }

    updateFile(e){
        
        if (e.target.files.length > 0){
            this.setState({
                fileName: e.target.files[0].name, 
                file: e.target.files[0]
            });
        }
    }

    resetFields(){
        this.setState({
            body: "",
            restaurant: "",
            address: "",
            fileName: "",
            file: {},
            errors: {}
        })

        this.fileRef.current.value = "";
        const postError = document.querySelector(".file-errors")
        postError.classList.add("hidden");
        this.props.removePostErrors();
        this.props.hidePostForm();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ errors: nextProps.errors, haveErrors: true })
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        if (this.state.file.name === undefined){
           const fileError = document.querySelector(".file-errors")
            fileError.classList.remove("hidden");
        } else if ( this.state.body.length === 0 || this.state.restaurant.length === 0 || this.state.address.length === 0){
            const postErrors = document.querySelector(".post-errors")
            postErrors.classList.remove("hidden");
        }
        else {
            const form = new FormData();
            form.append("body", this.state.body);
            form.append("restaurant", this.state.restaurant);
            form.append("address", this.state.address);
            form.append("user", this.state.user);
            form.append("postImage", this.state.file, this.state.fileName);
    
            this.props.createPost(form).then((res) => {
                if (res.errors) {
                    this.setState({errors: res.errors })
                } else { this.resetFields() }})
        }
        
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
            // debugger
            if (!this.props.userId) return null;
            const klass1 = this.props.showPost ? "post-bg" : "hidden";
            const klass2 = this.props.showPost ? "post-form" : "hidden";
    
            return (
                <div className={klass1} onClick={this.resetFields} >
                    <form className={klass2} onSubmit={this.handleSubmit} encType="multipart/form-data" onClick={e => e.stopPropagation()}>
                    <div className="post-header">Write a new post</div>
                        <div className="form-div">
                            <br />
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
                            <label className="post-label">Upload Image
                            <input type="file"
                                filename="postImage" ref={this.fileRef}
                                onChange={this.updateFile}
                                className="post-image"
                                />
                            </label>
                            <div className="file-errors hidden">
                                Please fill out all fields and upload image
                            </div>
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