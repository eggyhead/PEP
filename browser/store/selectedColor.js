import axios from 'axios'
// ACTION TYPES

const GET_COLOR = 'GET_COLOR';

// ACTION CREATORS


export function getColor (color) {
  const action = { type: GET_COLOR, color};
  return action;
}


//THUNK CREATORS
export function fetchSingleColor(id) {
  return function(dispatch) {
    axios.get(`/api/colors/${id}`)
    .then(res => dispatch(getColor(res.data)))
    .catch(err => console.log(err))
  }
}

const initialState = {}
// REDUCER

export default function reducer (state = initialState, action) {

  switch (action.type) {

    case GET_COLOR:
      return action.color;

    default:
      return state;
  }

}