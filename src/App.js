import './App.css';
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Card from './components/Card';
import Movielist from './components/Movielist';
import CummunityPage from './components/CummunityPage';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const[toggle,setToggle]=useState(true);
  const [popular,setPopular] =useState(true);

    function handleToday(){
        setToggle(true);
    }
    function handleWeek(){
        setToggle(false);
    }
    function handleMovie(){
      setPopular(true);
  }
  function handleTv(){
      setPopular(false);
  }
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Card title={"Trending"} handleToday={handleToday} handleWeek={handleWeek} toggle={toggle}
      items={["Today","This Week"]}
      >
        {toggle ?
        <Movielist insert="trending/all/day"/> :
        <Movielist insert="trending/all/week" />}
      </Card>
      {/* <Card title={"Latest Trailers"} items={["Streaming","On Tv","For Rent","In Theaters"]}><Movielist/></Card>     */}
      <Card title={"Top Rated"} handleToday={handleMovie} handleWeek={handleTv} toggle={popular}
      items={["Movies","TV"]}
      >
      {popular?
        <Movielist insert="movie/top_rated"/>:
        <Movielist insert="tv/top_rated"/>
      }
      </Card>
      <CummunityPage/> 
      <Footer/>   
    </div>
  );
}

export default App;
