import React, {Component} from 'react';
import {connect} from 'react-redux'
import {withRouter, Switch, Route} from 'react-router-dom'
import {fetchColors} from '../../store'
import {FilterableColors, SingleColor, Grey} from './index'

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
            <Route path="/grey" component={Grey} />
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