import React from 'react';
import Modal from '../modal/modal';
class MainPage extends React.Component {

    render() {
        return (
            <div>
                <Modal />
                <div className="circle"></div>
                <div>FoodieGram</div>
                <footer>
                    <h1>I am footer</h1>
                </footer>
            </div>
        );
    }
}

export default MainPage;