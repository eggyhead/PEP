import React, {Component} from 'react'
import { fetchGreys } from '../../store'
import { connect } from 'react-redux'

/**
 * <div class="card" style="width: 20rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-block">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
 */
class Grey extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(props) {
        this.props.getGreys()
    }
//<div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
    render(props) {
        const {greys} = this.props
        return (
        <div className="container-fluid">
            <div className="row">
            {greys && greys.map(grey => {
                return <div className="col-xs-6 col-md-4" key={grey.colorId} >{grey.name}</div>
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