import React from 'react'
import {changeColor} from '../../store'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {SingleColor} from './index'

class FilterableColors extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value
    });
  }


    render (props) {
        const {colors, color, setColor} = this.props
        const inputValue = this.state.inputValue;
        const filteredColors = colors && colors.filter(color =>
        color.name.match(inputValue));
        return (
        <div>
            <input type="text" placeholder="placeholder" onChange={this.handleChange}></input>
            {filteredColors && filteredColors.map(color => (
              <div key={color.colorId}>
                  <Link to={`/color/${color.colorId}`} onClick={(evt) => {setColor(evt, color)}}>{color.name}</Link>
                </div>)
            )
                }
        </div>
        )
    }
}


const mapState = ({colors, color}) => {
    return {
      colors: colors,
      color: color
    }
  }

const mapDispatch = (dispatch) => {
  return {
    setColor(color) {
      dispatch(changeColor(color))
    }
  }
} 

export default connect(mapState, mapDispatch)(FilterableColors);



