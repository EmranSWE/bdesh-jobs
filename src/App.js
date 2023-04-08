import './App.css';
import Menubar from './components/shared/Menubar';
import ContentSlider from './components/Home/ContentSlider';
import Features from './components/Home/Features';
import Footer from './components/shared/Footer';
import TrustAndReliance from './components/Home/TrustAndReliance';
import CountryJobs from './components/Home/CountryJobs';
import Profession from './components/Home/Profession';

function App() {
  return (
    <div >
      {/* Menubar */}
      <Menubar></Menubar>
      {/* Header content and Slider */}
      <ContentSlider></ContentSlider>
      <Features></Features>
      <Profession></Profession>
      <CountryJobs></CountryJobs>
      <TrustAndReliance></TrustAndReliance>
      <Footer></Footer>
    </div>
  );
}

export default App;
