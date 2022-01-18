import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import Modal from './modal/modal';
import ProfilePageContainer from './profile_pages/profile_page_container'


const App = () => (
    <div>
        <NavBarContainer />
        <Modal />
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <Route path='/pages/:userId' component={ProfilePageContainer} />
        </Switch>
    </div>
);

export default App;