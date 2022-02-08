import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout, login, signup } from './actions/session_actions';
import { addLike, removeLike, removePost, receiveEditedPost, getPost } from './actions/post_actions';
import { createPost} from './util/post_api_util';



document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/';
    }
  } else {
    store = configureStore({});
  }

  window.removePost = removePost;
  window.receiveEditedPost = receiveEditedPost;
  window.createPost = createPost;
  window.dispatch = store.dispatch;
  window.getPost = getPost;
  window.addLike = addLike;
  window.removeLike = removeLike;
  window.store = store;
  window.getState = store.getState();
  
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});