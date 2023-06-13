import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {originals,Action,Comedy,trending,RomanceMovies,HorrorMovies,Documentaries} from './urls'
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={trending} title='Trending' />
        <RowPost url={Action} title='Action Movies' isSmall />
        <RowPost url={Comedy} title='Comedy Movies' isSmall />
        <RowPost url={RomanceMovies} title='Romantic Movies' isSmall />
        <RowPost url={HorrorMovies} title='Horror Movies' isSmall />
        <RowPost url={Documentaries} title='Documentaries' isSmall />
        <RowPost url={originals} title='Netflix Originals' isSmall />
    </div>
  );
}

export default App;
