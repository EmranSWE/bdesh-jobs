import './App.css';
import Menubar from './components/shared/Menubar';
import ContentSlider from './components/Home/ContentSlider';
import Features from './components/Home/Features';
import Footer from './components/shared/Footer';
import TrustAndReliance from './components/Home/TrustAndReliance';
import CountryJobs from './components/Home/CountryJobs';

function App() {
  return (
    <div >
      <h1>Bdesh Jobs</h1>
    <Menubar></Menubar>
    <ContentSlider></ContentSlider>
    <Features></Features>
   <CountryJobs></CountryJobs>
    <TrustAndReliance></TrustAndReliance>
    <Footer></Footer>
    </div>
  );
}

export default App;
