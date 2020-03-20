import React from "react";


const SearchBar = ({renderedData, setRenderedData, originalData}) => {
  const searchData = event => {
    if (event.target.value !== ""){
      let filteredPosts = renderedData.filter(character => {
        return character.name.includes(event.target.value)
      })
      setRenderedData(filteredPosts)
    } else {
      setRenderedData(originalData)
    }
  }
  
  return (
      
    <form className="search-form">
        <input
            type="text"
            placeholder="Search"
            onChange={searchData}
        />
    </form>
  );
};

export default SearchBar;