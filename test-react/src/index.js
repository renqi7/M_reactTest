import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import ComponentApp from './comments/commentApp';
// import ComponentApp from './hight_comments/commentApp';
// import CommentApp from './new_comments/commentApp';
import CommentApp from './hook_comments/commentApp';
// import TodoList from './new_comments/newTodoList/todoList';

import './index.css';

// react-redux
import { Provider } from 'react-redux'
import store from './new_comments/store/store'

ReactDOM.render(
  <Provider store={store}>
 
  <CommentApp/>
   </Provider>
  ,
  document.getElementById('root')
);
