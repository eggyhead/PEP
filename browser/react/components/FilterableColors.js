import React from 'react'
import {changeColor} from '../../store'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {SingleColor, ColorDisplay} from './index'

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
        color.name.toLowerCase().match(inputValue.toLowerCase()));
        return (
        <div className="container-fluid">
            <input type="text" placeholder="search by color name" onChange={this.handleChange}></input>
            <div className="row">
              {filteredColors && filteredColors.map(color => (
                <div key={color.colorId} className="col-xs-6 col-md-3">
                <Link to={`/colors/${color.colorId}`}>
                   <ColorDisplay color={color}/> 
                </Link>
                </div>
                )
              )
                }
            </div>
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

