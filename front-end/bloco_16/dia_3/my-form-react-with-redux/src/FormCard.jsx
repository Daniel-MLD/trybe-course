import React, { Component } from 'react'

export class FormCard extends Component {
  render() {
    const { formInfo } = this.props;
    return (
      <div>
        {Object.entries(formInfo).map(([key, value]) => <p>{`${key}: ${value}`}</p>)}
      </div>
    )
  }
}

export default FormCard
