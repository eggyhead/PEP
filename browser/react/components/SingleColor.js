import React, {Component} from 'react'
import {fetchSingleColor} from '../../store'
import { connect } from 'react-redux'
import {ColorDisplay} from './index'
class SingleColor extends Component  {
    constructor(props) {
        super(props)
    }

    componentDidMount(props) {
        this.props.getSingleColor()
    }

    render(props) {
        const {color} = this.props
        return (
        <div className="singleColorContainer">
            <h2>Single Color</h2>
            <div>
            <ColorDisplay color={color}/>
            </div>
        </div>
        )
    }
    
}


const mapState = ({color}) => {
    return {
      color: color
    }
  }

const mapDispatch = (dispatch, ownProps) => {
    const colorId = ownProps.match.params.colorId
  return {
    getSingleColor() {
      dispatch(fetchSingleColor(colorId))
    }
  }
} 

export default connect(mapState, mapDispatch)(SingleColor);