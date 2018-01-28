import React from 'react'
import { connect } from 'react-redux'
import { onChangeColor } from '../../store'

import { SketchPicker } from 'react-color'

export const ColorPicker = ({ color, onChangeColor }) => {
    console.log('color', color)
    console.log('onChangeColor', onChangeColor)
  return (
    <div>
      <SketchPicker
        color={ color }
        onChangeComplete={ onChangeColor }
      />
    </div>
  )
}

const mapStateToProps = state => ({
  color: state.color
})

const mapDispatchToProps = dispatch => ({
  onChangeColor: dispatch(onChangeColor)
})

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker)