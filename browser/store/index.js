import {
    createStore,
    applyMiddleware,
    combineReducers
  } from 'redux';
  import loggingMiddleware from 'redux-logger';
  import thunkMiddleware from 'redux-thunk';
  import { composeWithDevTools } from 'redux-devtools-extension';
  
  /**
   * Each module exports its own sub-reducer by default.
   * We're giving them the same name as the field we want on state,
   * so that we can cleverly use the shorthand notation in the object we
   * send to combineReducers
   */
  import colors from './colors'
  import color from './selectedColor'
  
  const reducer = combineReducers({
    colors, color
  });
  
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(
      thunkMiddleware,
      loggingMiddleware
    ))
  );
  
  export default store;
  
  // export action creators
export * from './colors'
export * from './selectedColor'