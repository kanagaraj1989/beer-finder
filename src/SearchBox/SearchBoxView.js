import React from 'react'
import PropTypes from 'prop-types'
import './SearchBox.scss'

const SearchBoxView = props => {
  const displaySearchBox = () =>(
    <section className="jumbotron-fluid search-box-section">
      <nav className="navbar navbar-light bg-light"> 
        <span className="search-header-text">Search your drink</span>
        <form onSubmit={props.searchFormSubmit} autoComplete="off" className="search-form">
          <span className="search-text-spn col-md-2">
            <input
              className="search-box" 
              type="textbox" 
              name="search-name-desc" 
              placeholder="Search"
              ref = {props.searchTextboxRefHandler}
              onChange={(e) =>props.changeHandler(e)}
            />
          </span>
          <span className="radio-btn-spn col-md-4">
            <input 
              type="radio" 
              name="searchtype" 
              className="name-radio"
              value="sname"
              ref = {props.nameTypeRefHandler} 
              defaultChecked
            /> by name 

          <input 
            type="radio" 
            name="searchtype" 
            className ="desc-radio"
            value="description"
            ref = {props.descriptionTypeRefHandler}
          /> by description 
        </span>
        <input className="search-submit-btn btn btn-primary" type="submit" value="Search"/>
        <div 
          id="search-result-container" 
          ref={props.searchResultRefHandler}>
        </div>
      </form>
    </nav>  
    </section>   
  )
  return(
    displaySearchBox()
  )
}

SearchBoxView.propTypes = {
  searchFormSubmit: PropTypes.func.isRequired,
  searchTextboxRefHandler: PropTypes.func.isRequired,
  nameTypeRefHandler: PropTypes.func.isRequired,
  searchResultRefHandler: PropTypes.func.isRequired,
  descriptionTypeRefHandler: PropTypes.func.isRequired
}
export default SearchBoxView