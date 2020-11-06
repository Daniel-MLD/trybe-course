import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css'

class Pokemon extends React.Component {
  render() {
    
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (

      <div className={`pokemon ${type.toLowerCase()}`}>

        <div className='pokemon-infos'>
          <p>{name}</p>
          <p>{type}</p>
          <p>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>

        <div className='pokemon-image'>
          <img src={image} alt={`${name} sprite`}></img>
        </div>

      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    })
  }).isRequired
}


Pokemon.defaultProps = {
  pokemon: {
    name: 'unknown',
    type: 'unknown',
    image: 'unknown',
    averageWeight: {
      value: 0,
      measurementUnit: 'unknown',
    }
  }
}

export default Pokemon;
