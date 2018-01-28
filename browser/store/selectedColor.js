// ACTION TYPES

const CHANGE_COLOR = 'CHANGE_COLOR';

// ACTION CREATORS


export function onChangeColor (color) {
  const action = { type: CHANGE_COLOR, color};
  return action;
}


const initialState = {}
// REDUCER

export default function reducer (state = initialState, action) {

  switch (action.type) {

    case CHANGE_COLOR:
      return action.color;

    default:
      return state;
  }

}