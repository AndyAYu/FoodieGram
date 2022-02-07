import React from "react";

class AvatarBank extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profileAvatar: this.props.profileAvatar,
            avatarBank: [
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-svgrepo-com.svg',
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-9-svgrepo-com.svg',
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-8-svgrepo-com.svg',
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-7-svgrepo-com.svg',
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-6-svgrepo-com.svg',
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-5-svgrepo-com.svg',
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-4-svgrepo-com.svg',
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-2-svgrepo-com.svg',
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-16-svgrepo-com.svg',
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-15-svgrepo-com.svg',
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-14-svgrepo-com.svg',
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-13-svgrepo-com.svg',
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-12-svgrepo-com.svg',
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-11-svgrepo-com.svg',
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-10-svgrepo-com.svg',

            ],
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
        debugger
        e.preventDefault();
        this.props.handleAvatarChange(e)

        let user = {
            avatar: this.state.profileAvatar
        }
        console.log('clicked')
        this.props.editAvatar(user)
    }
    
    render(){
    const { users } = this.props
    const usersAvatar = users.avatar
    const avatarImg = this.props.showAvatars ? (
        <div>
            <form className="avatarBank" onSubmit={this.handleSubmit}>
            <div>
                    {/* <input type="image"
                        value='https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-svgrepo-com.svg'
                    src="" 
                    alt="submitform"/>
                    <button type="submit"> 
                        <img src='https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-9-svgrepo-com.svg' 
                        onClick={(e) => this.update('profileAvatar', e.currentTarget.src)} 
                        alt="submitform"/>
                    </button> */}
                    <button  type="submit" className="avatarBank">
                        {this.state.avatarBank.map(avatar => <div key={avatar}><img  
                        src={avatar} 
                        // onClick={(e) => this.update('profileAvatar', e.currentTarget.src)}
                        onClick={(e) => this.handleSubmit(e)}
                        alt="submitform" /></div>)}
                    </button>
                {/* <img src='https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-8-svgrepo-com.svg' alt="" />
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
                <img src='https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-10-svgrepo-com.svg' alt="" />, */}
            </div>
            </form>
        </div>
    ) : (null)
    return (
        <div className="profilebackground" onClick={() => this.props.hideAvatars()} width="500" height="500">
            <div>
            {avatarImg}
            </div>
        </div>
    );
}}

export default AvatarBank