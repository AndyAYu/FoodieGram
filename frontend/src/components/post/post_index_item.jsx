import React from 'react';
import EditPostFormContainer from './edit_post_form_container';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPen, faIceCream } from '@fortawesome/free-solid-svg-icons';

class PostIndexItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            editPostForm: false,
            likers: false
        }

        this.likeRef = React.createRef();
        this.hidePopup = this.hidePopup.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        if (this.state.likers === false) {
            this.setState({ likers: true })
        } else {
            this.setState({ likers: false })
        }
    }

    hidePopup(e){
        e.preventDefault();
        this.setState({ likers: false })     
    }

    render(){
        if (!this.props.post || !this.props.users) return null;
        
        const edit = this.props.currentUser[0] && this.props.post.user._id === this.props.currentUser[0]._id ? (
            <div className="post-buttons">
                <Link to={`/edit_post/${this.props.post._id}`} className="delete-post"><FontAwesomeIcon icon={faPen}/></Link> 
                <button className="delete-post" onClick={()=>this.props.deletePost(this.props.post._id)}><FontAwesomeIcon icon={faTrashAlt}/></button>
            </div>
        ) : (
            null
        )

        let likesNum;
        let klass2; 
        if (this.props.likes === undefined) return null;

        if (this.props.likes.length === 0 ){
            likesNum = null;
            klass2 = "hidden";
        }
        else {
            klass2 = "like-num-btn";
            likesNum = (<span className="like-num">{this.props.likes.length}</span>)
        }
    
        const likeButtons = !this.props.likes.includes(this.props.currentUser[0]._id) ? 
        (<button className="heart" 
        onClick={()=> this.props.addLike({"userId": this.props.currentUser[0]._id, "postId": this.props.post._id})}>
            <FontAwesomeIcon icon={faIceCream}/></button>) : 
        (<button className="empty-heart" 
        onClick={()=> this.props.removeLike({"userId": this.props.currentUser[0]._id, "postId": this.props.post._id})}>
            <FontAwesomeIcon icon={faIceCream}/></button>)

        let userObj = {};
        // debugger
        this.props.users.map(user => userObj[user._id] = user.handle);
        const likers = this.props.likes.map((liker, idx) => <div className="liker" key={idx}>{userObj[liker]}</div>);
        const klass = this.state.likers ? "liker-bg" : "hidden";

        return (
        <li className="post-index-item">
            <div className="post-heading">Posted on {this.props.post.date.slice(0, 10)} by {this.props.post.user.handle}
                <img className="postAvatarImg" width="25" height="25"src={this.props.post.user.avatar} alt=""/>
            </div>{edit} 
            
            <div className="rest-name">{this.props.post.restaurant}</div>
            <div className="rest-address">{this.props.post.address}</div>
            <img className="post-image"src={`${this.props.post.postImg}`}/>
            <div className="like-row">{likeButtons}<button className={klass2} onClick={this.toggle}>{likesNum}</button></div>
            <div className={klass} onClick={this.hidePopup}>
                <div className="likers" ref={this.likeRef} onClick={(e) => e.stopPropagation()}>Liked by {likers}</div>
            </div>
            <div className="post-body">{this.props.post.body}</div>
           <EditPostFormContainer post={this.props.post} editPostForm={this.state.editPostForm} closeEditForm={this.closeEditForm} />
        </li>
        )
    }
}

export default PostIndexItem;