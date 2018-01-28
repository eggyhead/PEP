import axios from 'axios';

// ACTION TYPES

const GET_COLORS = 'GET_COLORS';
// ACTION CREATORS


export function getColors (colors) {
  const action = { type: GET_COLORS, colors };
  return action;
}


// THUNK CREATORS

export function fetchColors () {

  return function thunk (dispatch) {
    return axios.get('/api/colors')
      .then(res => res.data)
      .then(colors => {
        const action = getColors(colors);
        dispatch(action);
      })
      .catch(err => console.log(err))
  };
}


export function getGreys() {
  return axios.get('/api/greys')
  .then(res => res.data)
  .then(greys => dispatch(getColors(greys)))
  .catch(err => console.log(err))
}

// REDUCER

export default function reducer (state = [], action) {

  switch (action.type) {

    case GET_COLORS:
      return action.colors;

    default:
      return state;
  }

}