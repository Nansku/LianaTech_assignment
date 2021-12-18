import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Infobar from './components/Infobar';
import ParallaxEffect from './components/ParallaxEffect';
import CompanyInfo from './components/CompanyInfo';
import CompanyNumbers from './components/CompanyNumbers';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Infobar />
      <Navbar />
      <div className="mb-auto justify-self-start">
        <ParallaxEffect />
        <CompanyInfo />
        <CompanyNumbers />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}

export default App;
