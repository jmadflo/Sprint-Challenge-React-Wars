import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import SearchBar from './components/SearchBar'
import PostsContainer from './components/PostsContainer'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [renderedData, setRenderedData] = useState([])
  const originalData = []

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then(response => {
        console.log(response)
        setRenderedData(response.data.results)
        originalData = response.data.results
      })
      .catch(error => console.log(error))
  }, [])
  
  console.log(renderedData)

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <SearchBar originalData={originalData} renderedData={renderedData} setRenderedData={setRenderedData}/>
      <PostsContainer data={renderedData}/>
    </div>
  );
}

export default App;
