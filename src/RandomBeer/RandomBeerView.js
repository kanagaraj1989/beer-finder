import React from 'react'
import PropTypes from 'prop-types'
import './RandomBeer.scss'

const RandomBeerView = props => {
    const displayRandomBeer = (beer, error) =>(
      <div className="card random-beer-body center-content container-fluid">
        {!isError(error) && <div className="card-header beer-name row">{beer.name}</div>}
        {displaySummary(beer, error)}
      </div>
    )
   
    const displaySummary = (beer, error) => (
      <div className="card-body beer-summary row">
        {!isError(error) && <span className="beer-img col-md-1">
          <img src={beer.image} alt="beer" />
        </span>}
        {!isError(error) && <span className="beer-description col-md-6">{beer.description}</span> }
        {isError(error) && displayErrorMessage(error)}
        <span className="beer-buttons col-md-3">
          <div className="beer-buttons-grp">
            <button type="button" className="btn btn-primary another-beer row"
                onClick={(event) => props.anotherRandomBeer()}>
                Another Beer
            </button>
            <button type="button" className="btn btn-primary non-alcoholic row"
                onClick={(event) => props.anotherNonAlcoholicBeer()}>
                Random non alcoholic beer
            </button>
          </div>
        </span>
      </div>
    )

    const displayErrorMessage = (error) => (
      <span className="col-md-7">{error}</span>
    )

    const isError = (error) =>  error !== null
    
    return(
        <div>{displayRandomBeer(props.randomBeer, props.error)}</div>
    )
}

RandomBeerView.propTypes = {
  randomBeer: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string
  }),
  error: PropTypes.string,
  anotherRandomBeer: PropTypes.func.isRequired,
  anotherNonAlcoholicBeer: PropTypes.func.isRequired
}

RandomBeerView.defaultProps = {
  randomBeer: {}
}
export default RandomBeerView