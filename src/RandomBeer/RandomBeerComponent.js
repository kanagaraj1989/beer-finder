import React, {Component} from 'react'
import PropTypes from 'prop-types'
import RandomBeerView from './RandomBeerView'
import PunkAPIService from '../APIService/PunkAPIService'

class RandomBeerComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        randomBeer: {},
        error: null
      }
      this.getNonAlcoholicBeer = this.getNonAlcoholicBeer.bind(this)
      this.getRandomBeer = this.getRandomBeer.bind(this)
      this.makePunkAPICall = this.makePunkAPICall.bind(this)
    }

    componentDidMount() {
      this.getRandomBeer()
    }

    getRandomBeer = () => this.makePunkAPICall(this.props.randomBeerUrl)
  
    getNonAlcoholicBeer = () => this.makePunkAPICall(this.props.nonAlcoholicUrl)
    
    makePunkAPICall(url) {
      PunkAPIService.getRandomBeer(url)
      .then(response => {
        this.setState({randomBeer: response.randomBeer, error: response.error})
      })
    }

    render(){
      const props = Object.assign({},this.props,{
        randomBeer: this.state.randomBeer,
        error: this.state.error,
        anotherRandomBeer: this.getRandomBeer,
        anotherNonAlcoholicBeer: this.getNonAlcoholicBeer
      })

      return(
        <div>
          <nav class="navbar beer-finder">
            <ul class="navbar-nav">
              <li>
                Beer Finder
              </li>
            </ul>
          </nav>
          <RandomBeerView {...props}/>
        </div>
      )
    }
}

export default RandomBeerComponent