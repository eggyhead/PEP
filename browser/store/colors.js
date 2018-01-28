import axios from 'axios';

// ACTION TYPES

const GET_COLORS = 'GET_COLORS';
const GET_SINGLE_COLOR = 'GET_SINGLE_COLOR';
// ACTION CREATORS


export function getColors (colors) {
  const action = { type: GET_COLORS, colors };
  return action;
}

export function getSingleColor(color) {
  const action = {type: GET_SINGLE_COLOR, color};
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

export function fetchSingleColor(id) {
  return function(dispatch) {
    axios.get(`/api/colors/${id}`)
    .then(res => dispatch(getSingleColor(res.data)))
    .catch(err => console.log(err))
  }
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

    case GET_SINGLE_COLOR:
      return action.color;

    default:
      return state;
  }

}