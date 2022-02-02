import React from "react";

class AvatarBank extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            avatar: [
            
       
        ],
        }
        // this.handleUpdate = this.handleUpdate.bind(this);
    }


render(){
    const avatarImg = this.props.showAvatars ? (
        <div>
            <div>
                <img className="avatarIcon"src='https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-svgrepo-com.svg' alt="" />
                <img src='https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-9-svgrepo-com.svg' alt="" />
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
        </div>
    ) : (null)
    return (
        <div className="profilebackground" onClick={() => this.props.hideAvatars()} width="500" height="500">
            {avatarImg}
        </div>
    );
}}

export default AvatarBank