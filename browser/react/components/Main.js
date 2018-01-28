import React, {Component} from 'react';
import {connect} from 'react-redux'
import {withRouter, Switch, Route} from 'react-router-dom'
import {fetchColors, fetchSingleColor} from '../../store'
// import {ColorPicker} from './ColorPicker.js'
// import {FilterableColors} from './AllColors.js'
// import {SingleColor} from './SingleColor.js'
// import {Grey} from './Grey.js'
import {FilterableColors, SingleColor} from './index'
//, ColorPicker, SingleColor, Grey}
class Main extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(props) {
    this.props.loadInitialData() 
  }

  render(props) {
      return (
        <div id="main" className="container-fluid">
          <Switch>
            <Route exact path="/" component={FilterableColors} />
            <Route path="/color/:colorId" component={SingleColor} />
          </Switch>
        </div>
      )
  } 

}


const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(fetchColors())
    }
  }
}
export default withRouter(connect(null, mapDispatch)(Main))

/**
 *           <Route path="/colorInfo" component={ColorPicker}/>
          <Route path="/singleColor/:colorId" component={SingleColor}/>
          <Route path = "/grey" component={Grey} />
 */