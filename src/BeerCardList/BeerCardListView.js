import React, {Component} from 'react'
import PropTypes from 'prop-types'
import SingleBeerCardView from '../SingleBeerCard/SingleBeerCardView'
const BeerCardListView = props => {

  const displaySingleBeerCard = beers => (
    beers.map(beer => <SingleBeerCardView beer={beer}/>)
  )
  
  return(
    displaySingleBeerCard(props.searchResult)
  )

}

export default BeerCardListView