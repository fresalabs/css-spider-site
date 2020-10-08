import React from 'react';
import About from './About';
import Heading from './Heading';
import Features from './Features';
import PlatForm from './PlatForm';
import FAQ from './FAQ';
import Footer from './Footer';

class Home extends React.Component<{}> {
  render() {
    return (
      <div>
        <Heading />
        <About />
        <Features />
        <PlatForm />
        <FAQ />
        <Footer />
      </div>
    );
  }
}

export default Home;
