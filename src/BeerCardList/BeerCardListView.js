import React from 'react'
import PropTypes from 'prop-types'
import SingleBeerCardView from '../SingleBeerCard/SingleBeerCardView'
const BeerCardListView = props => {

  const displaySingleBeerCard = beers => (
    beers.map(beer => <SingleBeerCardView key={beer.id} beer={beer}/>)
  )
  
  return(
    displaySingleBeerCard(props.searchResult)
  )

}

BeerCardListView.propTypes = {
  searchResult: PropTypes.arrayOf(
    PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        description: PropTypes.string,
        id: PropTypes.number
    })
  )
}

BeerCardListView.defaultProps = {
  searchResult: []
}

export default BeerCardListView