import React, {Component} from 'react'
import { fetchGreys } from '../../store'
import { connect } from 'react-redux'
import {ColorDisplay} from './index'

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
        <div className="container-fluid">
            <h2>Because sometimes it's black AND white</h2>
            <div className="row">
            {greys && greys.map(grey => {
                return <div className="col-xs-6 col-md-4" key={grey.colorId} >
                        <ColorDisplay color={grey}/>
                    </div>
            })}
            </div>
   
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