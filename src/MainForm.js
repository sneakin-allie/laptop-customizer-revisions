import React from 'react'
import Specs from './Specs'

class MainForm extends React.Component {
    render() {
      return (
        <div>
          <Specs selected={this.props.selected} updateFeature={this.props.updateFeature}/>
        </div>
      )  
    }  
}

export default MainForm