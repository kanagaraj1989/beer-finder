import React from 'react'
import PropTypes from 'prop-types'
import './SingleBeerCard.scss'
const SingleBeerCardView = (props) => {

    return(
        <div className="card single-beer-card center-content container-fluid">
            <div className="row card-body">
            <span className="col-md-2">
              <img src={props.beer.image} alt="beer" />
            </span>
            <span className="col-md-4">
                <div className="beer-name">
                    {props.beer.name}
                </div>
                <div className="beer-description">
                    {props.beer.description}
                </div>
            </span>
            </div>
        </div>
    )
}

SingleBeerCardView.propTypes = {
    beer: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      description: PropTypes.string
    })
  }
  
  SingleBeerCardView.defaultProps = {
    beer: {}
  }
export default SingleBeerCardView