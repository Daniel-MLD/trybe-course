import React from 'react';

class tasks extends React.Component {
  render() {
    return (
      <li className='list'>{this.props.value}</li>
    );
  }
}

export default tasks;
