import axios from 'axios';

// ACTION TYPES

const GET_GREYS = 'GET_GREYS';
// ACTION CREATORS


export function getGreys (greys) {
  const action = { type: GET_GREYS, greys };
  return action;
}


// THUNK CREATORS

export function fetchGreys() {
  return function(dispatch) {
    axios.get('/api/colors/greys')
    .then(res => res.data)
    .then(greys => dispatch(getGreys(greys)))
    .catch(err => console.log(err))
  }
}

// REDUCER

export default function reducer (state = [], action) {

  switch (action.type) {

    case GET_GREYS:
      return action.greys;

    default:
      return state;
  }

}