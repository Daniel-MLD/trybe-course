import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formAction } from './redux/Actions'

export class Form extends Component {
  constructor() {
    super()
  
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      houseType: '',
      resume: '',
      job: '',
      description: '',
    }
    this.handleInputEvent = this.handleInputEvent.bind(this);
    this.handleSummit = this.handleSummit.bind(this);
  }
  
  handleInputEvent({ target: { name, value }}) {
    this.setState({
      [name]: value,
    });
  }

  handleSummit(event) {
    const { formAction } = this.props
    event.preventDefault();
    formAction(this.state);
  }

  render() {
    const {
      name,
      email,
      cpf,
      address,
      city,
      state,
      houseType,
      resume,
      job,
      description
    } = this.state;
    return (
      <div>
        <form>
          <fieldset>
            <label htmlFor="name">
              Nome:
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={this.handleInputEvent}
              />
            </label>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={this.handleInputEvent}
              />
            </label>
            <label htmlFor="cpf">
              CPF:
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={cpf}
                onChange={this.handleInputEvent}
              />
            </label>
            <label htmlFor="address">
              Endereço:
              <input
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={this.handleInputEvent}
              />
            </label>
            <label htmlFor="city">
              Cidade:
              <input
                type="text"
                id="city"
                name="city"
                value={city}
                onChange={this.handleInputEvent}
              />
            </label>
            <label htmlFor="state">
              Estado:
              <input
                type="text"
                id="state"
                name="state"
                value={state}
                onChange={this.handleInputEvent}
              />
            </label>
            <label htmlFor="houseType">
              Tipo:
              <input
                type="text"
                id="houseType"
                name="houseType"
                value={houseType}
                onChange={this.handleInputEvent}
              />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="resume">
              Resumo:
              <input
                type="text"
                id="resume"
                name="resume"
                value={resume}
                onChange={this.handleInputEvent}
              />
            </label>
            <label htmlFor="job">
              Cargo:
              <input
                type="text"
                id="job"
                name="job"
                value={job}
                onChange={this.handleInputEvent}
              />
            </label>
            <label htmlFor="description">
              Descrição:
              <input
                type="text"
                id="description"
                name="description"
                value={description}
                onChange={this.handleInputEvent}
              />
            </label>
          </fieldset>
          <button type="submit" onClick={(event) => this.handleSummit(event)}>Enviar</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  formAction,
}

export default connect(null, mapDispatchToProps)(Form)
