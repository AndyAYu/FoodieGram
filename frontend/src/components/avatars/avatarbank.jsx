import React from "react";

class AvatarBank extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            avatar: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    update(field, src) {
        debugger
        this.setState({
            [field]: src
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        let user = {
            avatar: this.state.avatar
        }
        console.log('clicked')
        this.props.editAvatar(user)
    }

    handleAvatarSubmit(e) {
        e.preventDefault();

        this.props.editAvatar({
            avatar: ""
        })
    }

    
    render(){
    const imageClick = () => {
        console.log(`clicked`);
    }
    const { users } = this.props
    const usersAvatar = users.avatar
    const avatarImg = this.props.showAvatars ? (
        <div>
            <form className="avatarBank" onSubmit={this.handleSubmit}>
            <div>
                    <input type="image"
                        value='https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-svgrepo-com.svg'
                    src="https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-svgrepo-com.svg" 
                    alt="submitform"/>
                    <button type="submit"> 
                        <img src='https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-9-svgrepo-com.svg' 
                        onClick={(e) => this.update('avatar', e.currentTarget.src)} 
                            value='https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-9-svgrepo-com.svg'
                        alt="submitform"/>
                    </button>
                <img src='https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-8-svgrepo-com.svg' alt="" />
                <img src='https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-7-svgrepo-com.svg' alt="" />
                <img src='https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-6-svgrepo-com.svg' alt="" />
            </div>
            <div>
                <img src='https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-5-svgrepo-com.svg' alt=''/>,
                <img src='https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-4-svgrepo-com.svg' alt=''/>,
                <img src='https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-2-svgrepo-com.svg' alt=''/>,
                <img src='https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-16-svgrepo-com.svg' alt=''/>,
                <img src='https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-15-svgrepo-com.svg' alt=''/>,
            </div>
            <div>
                <img src='https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-14-svgrepo-com.svg' alt="" />,
                <img src='https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-13-svgrepo-com.svg' alt="" />,
                <img src='https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-12-svgrepo-com.svg' alt="" />,
                <img src='https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-11-svgrepo-com.svg' alt="" />,
                <img src='https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-10-svgrepo-com.svg' alt="" />,
            </div>
            </form>
        </div>
    ) : (null)
    return (
        <div className="profilebackground" onClick={() => this.props.hideAvatars()} width="500" height="500">
            {avatarImg}
        </div>
    );
}}

export default AvatarBank