import React from 'react'
import SVGInline from "react-svg-inline"
import mySvg from './tiger.isvg'
class App extends React.Component {

  render () {

    return (
      <div>
        <SVGInline width={"510"} height={"510"} svg={ mySvg } />
      </div>
    )
  }

}

export { App }