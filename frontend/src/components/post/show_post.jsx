import React from 'react';
import { withRouter } from 'react-router-dom';

class ShowPost extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getPost();
    }

    render(){
        if (!this.props.post) return null;
        if (!this.props.users) return null;

        return (
            <div className="post-index">
                Your changes have been saved
                <button onClick={()=> this.props.history.push("/feed")}>Back to main page</button>
                <div>{this.props.post.date.slice(0, 10)}</div>
                <div>{this.props.post.restaurant}</div>
                <div>{this.props.post.address}</div>
                <div>{this.props.post.body}</div>
            </div>
        )
    }
}

export default withRouter(ShowPost);