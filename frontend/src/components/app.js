import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import ProfilePageContainer from './profile_pages/profile_page_container'
import Feed from './feed/feed';


const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <Route path='/pages/:userId' component={ProfilePageContainer} />
            <ProtectedRoute exact path="/feed" component={Feed}></ProtectedRoute>
        </Switch>
        <footer>
            <h1>I am footer</h1>
        </footer>
    </div>
);

export default App;