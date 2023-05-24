import './App.css';
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Card from './components/Card';
import Movielist from './components/Movielist';
import CummunityPage from './components/CummunityPage';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Card title={"Trending"} items={["Today","This Week"]}><Movielist/></Card>
      <Card title={"Latest Trailers"} items={["Streaming","On Tv","For Rent","In Theaters"]}><Movielist/></Card>    
      <CummunityPage/> 
      <Footer/>   
    </div>
  );
}

export default App;
