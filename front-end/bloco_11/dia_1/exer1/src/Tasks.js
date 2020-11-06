import React from 'react';
import './Tasks.css'

class Tasks extends React.Component {
  render() {
    console.log(this.props);
    return (
      <li className='list'>{this.props.value}</li>
    );
  }
}

export default Tasks;
