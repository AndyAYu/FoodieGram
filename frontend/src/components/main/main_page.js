import React from 'react';
import Modal from '../modal/modal';
class MainPage extends React.Component {

    render() {
        return (
            <div className="splash-content">
                <Modal />
                <div className="circle"></div>
                <div className="tagline">Connect with friends and share your favorite restaurants in town</div>
            </div>
        );
    }
}

export default MainPage;