import React, {Component} from 'react'
import PropTypes from 'prop-types'
import SearchBoxView from './SearchBoxView'
import PunkAPIService from '../APIService/PunkAPIService'
import BeerUtility from '../Utility/BeerUtility'
import BeerCardListView from '../BeerCardList/BeerCardListView'

class SearchBoxComponent extends Component {
      constructor(props) {
        super(props)

        this.searchResultElement = null
        this.searchTextboxElement = null
        this.nameTypeElement = null
        this.descriptionTypeElement = null

        this.searchResultRefHandler = this.searchResultRefHandler.bind(this)
        this.searchTextboxRefHandler = this.searchTextboxRefHandler.bind(this)
        this.nameTypeRefHandler = this.nameTypeRefHandler.bind(this)
        this.descriptionTypeRefHandler = this.descriptionTypeRefHandler.bind(this)
        this.clearSearchResult = this.clearSearchResult.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
        this.searchResultClickEvent = this.searchResultClickEvent.bind(this)
        this.searchFormSubmit = this.searchFormSubmit.bind(this)
        this.updateSearchResult = this.updateSearchResult.bind(this)
        this.state = {
            updateSearchForm: true,
            updateBeerListCard: true,
            searchResult: []
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.clearSearchResult)
    }

    clearSearchResult() {
        while (this.searchResultElement.firstChild) {
            this.searchResultElement.removeChild(this.searchResultElement.firstChild)
        }   
    }

    searchResultClickEvent = event => {
        this.searchTextboxElement.value = event.target.innerHTML
        this.searchTextboxElement.setAttribute('data-key',event.target.getAttribute('data-key'))
        this.clearSearchResult()
    }

    searchResultRefHandler = element => this.searchResultElement = element

    searchTextboxRefHandler = element => this.searchTextboxElement = element

    nameTypeRefHandler = element => this.nameTypeElement = element

    descriptionTypeRefHandler = element => this.descriptionTypeElement = element


    changeHandler = (event) => {
        if(event.target.value.length > 1) {
            var beers = []
            if(this.nameTypeElement.checked) {
                beers = BeerUtility.getBeerByName(this.props.beers, event.target.value)
            } else if(this.descriptionTypeElement.checked) {
                beers = BeerUtility.getBeerByDescriptions(this.props.beers, event.target.value)             
            }
            this.updateSearchResult(beers)
        } else {
            this.clearSearchResult();
        }
    }

    searchFormSubmit (event) {
        event.stopPropagation();
        event.preventDefault()
        const beers = PunkAPIService.getBeerByName(this.props.beers, this.searchTextboxElement.getAttribute("data-key"))
        this.setState({searchResult:beers, updateSearchForm: false, updateBeerListCard: true})
    }

    updateSearchResult = beers => {
        this.clearSearchResult()

        for(var index = 0; index < beers.length; index++) {
            var beer = document.createElement("DIV")
            beer.innerHTML = beers[index].name
            beer.setAttribute('data-key',beers[index].name)
            beer.classList.add("auto-complete-item")
            beer.addEventListener('click',this.handleClickEvent)
            this.searchResultElement.appendChild(beer)
        }
    }

    handleClickEvent = event => {
        this.searchTextboxElement.value = event.target.innerHTML
        this.searchTextboxElement.setAttribute('data-key',event.target.getAttribute('data-key'))
        this.clearSearchResult()
    }

    render() {
        const props = Object.assign({}, this.props, {
            searchResultRefHandler : this.searchResultRefHandler,
            searchTextboxRefHandler: this.searchTextboxRefHandler,
            nameTypeRefHandler: this.nameTypeRefHandler,
            descriptionTypeRefHandler: this.descriptionTypeRefHandler,
            changeHandler: this.changeHandler,
            searchFormSubmit: this.searchFormSubmit
        })
        const beerCardProps = Object.assign({}, this.props, {
            searchResult: this.state.searchResult
        })
        return(
            <div>
                <SearchBoxView {...props}/>
                <BeerCardListView {...beerCardProps}/>
            </div>
        )
    }
}

SearchBoxComponent.propTypes = {
    beers: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.string,
            description: PropTypes.string,
            id: PropTypes.number
        })
    )
}

SearchBoxComponent.defaultProps = {
    beers: []
}

export default SearchBoxComponent