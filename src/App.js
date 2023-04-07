import logo from './logo.svg';
import './App.css';
import Menubar from './components/shared/Menubar';
import ContentSlider from './components/Home/ContentSlider';
import Features from './components/Home/Features';
import Footer from './components/shared/Footer';
import TrustAndReliance from './components/Home/TrustAndReliance';
import WorldJobs from './components/Home/WorldJobs';

function App() {
  return (
    <div >
      <h1>Bdesh Jobs</h1>
    <Menubar></Menubar>
    <ContentSlider></ContentSlider>
    <Features></Features>
    <WorldJobs></WorldJobs>
    <TrustAndReliance></TrustAndReliance>
    <Footer></Footer>
    </div>
  );
}

export default App;
