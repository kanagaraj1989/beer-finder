import React from 'react'
import PropTypes from 'prop-types'
import './SearchBox.scss'

const SearchBoxView = props => {
  const displaySearchBox = () =>(
    <section className="jumbotron-fluid search-box-section">
      <nav class="navbar navbar-light bg-light"> Search your drink
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
              checked
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

export default SearchBoxView