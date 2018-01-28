import React, {Component} from 'react'
import { fetchGreys } from '../../store'
import { connect } from 'react-redux'

class Grey extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(props) {
        this.props.getGreys()
    }

    render(props) {
        const {greys} = this.props
        return (
        <div>
            {greys && greys.map(grey => <div key={grey.colorId}>{grey.name}</div>)}
        </div>
        )
    }
    
}


const mapState = ({greys}) => {
    return {
      greys: greys
    }
  }

const mapDispatch = (dispatch) => {
  return {
    getGreys() {
      dispatch(fetchGreys())
    }
  }
} 

export default connect(mapState, mapDispatch)(Grey);