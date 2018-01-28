import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

 
export const FilterInput = (props) => {
  
}


const mapState = ({colors, singleColor}) => {
  return {
    colors: colors,
    singleColor: singleColor
  }
}

const mapDispatch = (dispatch) => {
  return {

  }
}

export default connect(mapState)(FilterInput);

/**
 * 
import React from 'react';

const FilterInput = (props) => {

  const handleChange = props.handleChange;
  const inputValue = props.inputValue;

  return (
    <form className='form-group' style={{marginTop: '20px'}}>
      <input
        onChange={handleChange}
        value={inputValue}
        className='form-control'
        placeholder="Enter artist name"
      />
    </form>
  )
}

export default FilterInput;
 */
