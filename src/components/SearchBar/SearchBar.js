import React from 'react'
import './SearchBar.scss'
const SearchBar = ({
  searchKey,
  setSearchKey,
}) => {
  return (
    <div className="searchBar-wrap">
      <form className="search-form">
        <input
          className="search-input"
          type="text"
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder="Search By Category"
          value={searchKey}
        />
      </form>
    </div>
  )
}

export default SearchBar
