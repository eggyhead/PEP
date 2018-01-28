import axios from 'axios';

// ACTION TYPES

const GET_CATEGORIES = 'GET_CATEGORIES';

// ACTION CREATORS

export function getCategory (category) {
  const action = { type: GET_CATEGORY, category };
  return action;
}

export function getCategories (categories) {
  const action = { type: GET_CATEGORIES, categories };
  return action;
}

// THUNK CREATORS

export function fetchCategories () {

  return function thunk (dispatch) {
    return axios.get(baseUrl + '/categories', config)
      .then(res => res.data)
      .then(categories => {
        console.log('categories in thunk', categories)
        const action = getCategories(categories);
        dispatch(action);
      });
  };
}


// REDUCER

export default function reducer (state = [], action) {

  switch (action.type) {

    case GET_CATEGORIES:
      return action.categories;

    default:
      return state;
  }

}