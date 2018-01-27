import React, { Component } from 'react';
import axios from 'axios';
const baseUrl = 'https://developers.zomato.com/api/v2.1/'
let config = {
  headers: {
    'Accept': 'application/json',
    'user-key': 'ed26eb5baaf6982b5ae868daa1047d12'
  }
}


export default class Main extends Component {

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    axios.get(baseUrl + '/categories', config)
      .then(res => res.data)
      .then(data => {
        console.log(data)
      });
  }

  render () {
    return (
      <div id="main" className="container-fluid">
        Rendering main
      </div>
    );
  }
}