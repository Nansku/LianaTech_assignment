import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Container from 'react-bootstrap/Container'
import Navbar from './components/Navbar';
import Infobar from './components/Infobar';
import ParallaxEffect from './components/ParallaxEffect';
import CompanyInfo from './components/CompanyInfo';
import CompanyNumbers from './components/CompanyNumbers';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import References from './components/References';
import RSSfeed from './components/RSS';

function App() {
  return (
    <Container fluid className="h-screen justify-between p-0">
      <Infobar />
      <Navbar />
      <div className="mb-auto justify-self-start">
        <ParallaxEffect />
        <CompanyInfo />
        <CompanyNumbers />
        <RSSfeed />
        <References />
        <Newsletter />
        <Footer />
      </div>
    </Container>
  );
}

export default App;
