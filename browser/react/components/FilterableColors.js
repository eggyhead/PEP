import React from 'react'
import {fetchSingleColor} from '../../store'
import { connect } from 'react-redux'

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
    console.log('value ', value)
    this.setState({
      inputValue: value
    });
  }

    render (props) {
        const {colors, color} = this.props
        console.log('singleColor', color && color)
        const inputValue = this.state.inputValue;
        const filteredColors = colors && colors.filter(color =>
        color.name.match(inputValue));

        return (
        <div>
            <input type="text" placeholder="placeholder" onChange={this.handleChange}></input>
            {filteredColors && filteredColors.map(color => <div key={color.colorId}>{color.name}</div>)}
        </div>
        )
    }
}


const mapState = ({colors, color}) => {
    console.log('in map state')
    return {
      colors: colors,
      color: color
    }
  }

const mapDispatch = (dispatch) => {
  return {
    getSingleColor() {
      dispatch(fetchSingleColor())
    }
  }
} 

export default connect(mapState)(FilterableColors);

//   const mapDispatch = (dispatch) => {
//     return {
        
//     }
//   }

