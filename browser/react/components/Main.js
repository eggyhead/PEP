import React, {Component} from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {fetchCategories} from '../../store'
// import {GoogleApiWrapper} from 'google-maps-react'
// import MapContainer from './MapContainer'

class Main extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(props) {
    this.props.loadInitialData() 
  }

  render(props) {
    console.log(this.props.categories, ' categories')
    const categories = this.props.categories
      return (
        <div id="main" className="container-fluid">
          
        </div>
      )
  } 

}


const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(fetchCategories())
    }
  }
}
export default withRouter(connect(null, mapDispatch)(Main))

