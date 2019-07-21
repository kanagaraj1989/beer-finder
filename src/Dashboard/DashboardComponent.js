import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { RANDOM_PUNK_API } from '../APIConfig/PunkAPI.js'
import  RandomBeerComponent from  '../RandomBeer/RandomBeerComponent'
import SearchBoxComponent from '../SearchBox/SearchBoxComponent'
import PunkAPIService from '../APIService/PunkAPIService'
import  './Dashboard.scss'

class DashboardComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomBeerUrl: 'https://api.punkapi.com/v2/beers/random',
      nonAlcoholicUrl: 'https://api.punkapi.com/v2/beers/random?abv_lt=5.0',
      beers: [],
    }
  }

  componentDidMount()
  {
    PunkAPIService.GetAllBeer('https://api.punkapi.com/v2/beers')
    .then(beers => {
       this.setState({beers})
    })
  }

  render() {
    const props = Object.assign({}, this.props,{
      randomBeerUrl: this.state.randomBeerUrl,
      nonAlcoholicUrl: this.state.nonAlcoholicUrl,
      beers: this.state.beers
    })
    return (
      <div className="dashboard-container center-content container-fluid"> 
        <RandomBeerComponent {...props} />
        <SearchBoxComponent {...props} />
      </div>
    )
  }
}

export default DashboardComponent