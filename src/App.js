import './App.css';
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Card from './components/Card';
import Movielist from './components/Movielist';
import CummunityPage from './components/CummunityPage';
import Footer from './components/Footer';
import MovielistWeek from './components/MovieListWeek';
import { useState } from 'react';

function App() {
  const[toggle,setToggle]=useState(true);

    function handleToday(){
        setToggle(true);
    }
    function handleWeek(){
        setToggle(false);
    }
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Card title={"Trending"} handleToday={handleToday} handleWeek={handleWeek} toggle={toggle}>
        {toggle ?
        <Movielist/> :
        <MovielistWeek/>}
      </Card>
      {/* <Card title={"Latest Trailers"} items={["Streaming","On Tv","For Rent","In Theaters"]}><Movielist/></Card>     */}
      <CummunityPage/> 
      <Footer/>   
    </div>
  );
}

export default App;
