import React from 'react';
import { withRouter } from 'react-router-dom';

class EditPostForm extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            body: this.props.post.body,
            restaurant: this.props.post.restaurant,
            address: this.props.post.address,
            user: this.props.userId,
            postImg: this.props.post.postImg,
            file: {},
            errors: {}
        }

        this.fileRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.resetFields = this.resetFields.bind(this);
        this.updateFile = this.updateFile.bind(this);
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

    updateFile(e){
        if (e.target.files.length > 0){
            this.setState({
                postImg: e.target.files[0].name, 
                file: e.target.files[0]
            });
        }
    }

    resetFields(){
        this.setState({
            body: "",
            restaurant: "",
            address: "",
            postImg: "",
            file: {}
        })
        this.props.removePostErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        
        // let editedPost = {
        // _id: this.props.match.params.postId,
        // body: this.state.body,
        // restaurant: this.state.restaurant,
        // address: this.state.address,
        // user: this.state.user
        // }

        if (this.state.body.length === 0 || this.state.restaurant.length === 0 || this.state.address.length === 0){
            const fileError = document.querySelector(".edit-file-errors")
             fileError.classList.remove("hidden");
         } else {
             const form = new FormData();
             form.append("_id", this.props.match.params.postId);
             form.append("body", this.state.body);
             form.append("restaurant", this.state.restaurant);
             form.append("address", this.state.address);
             form.append("user", this.state.user);

             if(this.state.file.name !== undefined){
                 form.append("postImage", this.state.file, this.state.postImg);
             }
         
             this.props.editPost(form).then((res) => {
                if (res.errors) {
                    this.setState({errors: res.errors })
                } else { 
                    this.props.history.push(`/feed`)
                }
            })
         }        
    }


    renderErrors(field) {
        return (
            <div>
                {this.state.errors[field]}
            </div>
        );
    }

        render() {
            if (!this.props.userId || !this.props.post) return null;
    
            return (
                <div className="edit-form-div">
                    <form onSubmit={this.handleSubmit} 
                    encType="multipart/form-data">
                    <div className="edit-form">
                        <div className="login-header">Edit your post</div>
                            <div className="edit-image"><img src={`${this.props.post.postImg}`} alt=''/></div>
                            <label className="edit-rest-label">Restaurant name
                            <input type="text"
                                value={this.state.restaurant}
                                onChange={this.update('restaurant')}
                                placeholder="Restaurant name" className="edit-rest"
                            />
                            {this.renderErrors("restaurant")}
                            </label>
                            <br />
                            <label className="edit-address-label">Address
                            <input type="text" className="edit-address"
                                value={this.state.address}
                                onChange={this.update('address')}
                                placeholder="Address"
                            />
                            {this.renderErrors("address")}
                            </label>
                            <br />
                            <label className="edit-body-label">Thoughts?
                            <input type="text" className="edit-body"
                                value={this.state.body}
                                onChange={this.update('body')}
                                placeholder="Comment"
                            />
                            {this.renderErrors("body")}
                            </label>
                            <br />
                            <label className="edit-label">Change Image
                            <input type="file"
                                filename="postImage" ref={this.fileRef}
                                onChange={this.updateFile}
                                className="edit-image"
                                />
                            </label>
                            <div className="edit-file-errors hidden">
                                Please fill out all fields and upload an image
                            </div>
                            <div className="button-row">
                                <input className="submit-form-btn" type="submit" value="Edit Post" />
                            </div>
                        </div>
                    </form>
                </div>
            );
        }

}

export default withRouter(EditPostForm);