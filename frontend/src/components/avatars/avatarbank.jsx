import React from "react";

class AvatarBank extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileAvatar: this.props.avatar,
            avatarBank1: [
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-svgrepo-com.svg',
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-9-svgrepo-com.svg',
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-8-svgrepo-com.svg',
               
            ],
            avatarBank2:[
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-5-svgrepo-com.svg',
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-4-svgrepo-com.svg',
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-2-svgrepo-com.svg',      
            ],
            avatarBank3:[ 
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-14-svgrepo-com.svg',
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-13-svgrepo-com.svg',
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-12-svgrepo-com.svg',
            ],
            avatarBank4:[
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-7-svgrepo-com.svg',
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-6-svgrepo-com.svg',
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-10-svgrepo-com.svg',
            ],
            avatarBank5:[
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-16-svgrepo-com.svg',
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-15-svgrepo-com.svg',
                'https://foodiegram-dev.s3.amazonaws.com/FoodieGram-avatars/account-avatar-profile-user-11-svgrepo-com.svg',
            ],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAvatarChange = this.handleAvatarChange.bind(this);
        // this.changeState = this.changeState.bind(this);
    }
    update(field, src) {
        // debugger
        this.setState({
            [field]: src
        })
    }

    
    handleAvatarChange(e) {
        let {avatar} = this.props
        avatar = e.currentTarget.src
        // this.setState({
        //     avatar:e.currentTarget.src
        // })
    }
    // changeState(e){
    //     debugger
    //     this.props.avatar = e.currentTarget.src
    // }
    handleSubmit(e) {
        e.preventDefault();
        this.handleAvatarChange(e)
        let user = {
            id: this.props.userId,
            avatar: e.currentTarget.src 
        }
        // console.log(user)
        // debugger
        // this.state.change+=1;
        // this.setState({change: this.state.change+=1})
        // this.forceUpdate();
        // this.changeState(e);
        this.props.editAvatar(user)
    }

    
    render(){
    // debugger
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
                    <div className="avatarBankBox">
                        <button  type="submit" className="avatarBankButtons">
                            {this.state.avatarBank1.map(a => <div key={a}><img  
                            src={a} 
                            // onClick={(e) => this.update('profileAvatar', e.currentTarget.src)}
                            onClick={(e) => this.handleSubmit(e)}
                            alt="submitform" /></div>)}
                        </button>

                        <button  type="submit" className="avatarBankButtons">
                            {this.state.avatarBank2.map(a => <div key={a}><img  
                            src={a} 
                            // onClick={(e) => this.update('profileAvatar', e.currentTarget.src)}
                            onClick={(e) => this.handleSubmit(e)}
                            alt="submitform" /></div>)}
                        </button>
                        <button  type="submit" className="avatarBankButtons">
                            {this.state.avatarBank3.map(a => <div key={a}><img  
                            src={a} 
                            // onClick={(e) => this.update('profileAvatar', e.currentTarget.src)}
                            onClick={(e) => this.handleSubmit(e)}
                            alt="submitform" /></div>)}
                        </button>
                        <button  type="submit" className="avatarBankButtons">
                            {this.state.avatarBank4.map(a => <div key={a}><img  
                            src={a} 
                            // onClick={(e) => this.update('profileAvatar', e.currentTarget.src)}
                            onClick={(e) => this.handleSubmit(e)}
                            alt="submitform" /></div>)}
                        </button>
                        <button  type="submit" className="avatarBankButtons">
                            {this.state.avatarBank5.map(a => <div key={a}><img  
                            src={a} 
                            // onClick={(e) => this.update('profileAvatar', e.currentTarget.src)}
                            onClick={(e) => this.handleSubmit(e)}
                            alt="submitform" /></div>)}
                        </button>
                    </div>
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
            <div className="avatarBank">
            {avatarImg}
            </div>
        </div>
    );
}}

export default AvatarBank