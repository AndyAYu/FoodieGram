import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import AboutUsContainer from '../components/about_us/about_us'
import ProfilePageContainer from './profile_pages/profile_page_container'
import Feed from './feed/feed';
import MessengerContainer from './messenger/messenger_container';
import SearchResultContainer from './search_result/search_result_container'
// import EditPostFormContainer from './post/edit_post_form_container';
// import ShowPostContainer from './post/show_post_container';


const App = () => (
    <div>
        <header>
            <NavBarContainer />
        </header>
        <div className="main-content">
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <ProtectedRoute path='/pages/:userId' component={ProfilePageContainer} />
            <ProtectedRoute exact path="/feed" component={Feed}></ProtectedRoute>
            {/* <ProtectedRoute exact path="/edit_post/:postId" component={EditPostFormContainer}></ProtectedRoute> */}
            {/* <ProtectedRoute exact path="/posts/:postId" component={ShowPostContainer}></ProtectedRoute> */}
            <ProtectedRoute exact path="/messenger" component={MessengerContainer}></ProtectedRoute>
            <ProtectedRoute exact path ="/search" component={SearchResultContainer}></ProtectedRoute>
        </Switch>
        </div>
        <footer className="splash-only regular">
            <AboutUsContainer/>
        </footer>
    </div>
);

export default App;