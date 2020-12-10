import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormCard from './FormCard'

export class ShowForm extends Component {
  render() {
    const { formInfos } = this.props;
    return (
      <div>
        {formInfos.map((answer) => <FormCard key={answer.cpf} formInfo={answer} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  formInfos: state.formReducer.answers,
});

export default connect(mapStateToProps)(ShowForm)
