import React, {Component} from 'react'
import { RANDOM_PUNK_API 
  , NON_ALCOHOLIC_BEER_PUNK_API
  , ALL_BEERS_PUNK_API} from '../APIConfig/PunkAPI.js'
import  RandomBeerComponent from  '../RandomBeer/RandomBeerComponent'
import SearchBoxComponent from '../SearchBox/SearchBoxComponent'
import PunkAPIService from '../APIService/PunkAPIService'
import  './Dashboard.scss'

class DashboardComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomBeerUrl: RANDOM_PUNK_API,
      nonAlcoholicUrl: NON_ALCOHOLIC_BEER_PUNK_API,
      beers: [],
    }
  }

  componentDidMount()
  {
    PunkAPIService.GetAllBeer(ALL_BEERS_PUNK_API)
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