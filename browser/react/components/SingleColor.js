import React, {Component} from 'react'
import {fetchSingleColor} from '../../store'
import { connect } from 'react-redux'

class SingleColor extends Component  {
    constructor(props) {
        super(props)
        console.log('props in component', this.props)
    }

    componentDidMount(props) {
        this.props.getSingleColor()
    }

    render(props) {
        const {color} = this.props
        console.log('color', color)
        return (
        <div>
            {color && color.name}
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