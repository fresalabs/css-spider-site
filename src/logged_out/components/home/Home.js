import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";
import ReactPlayer from 'react-player'
import Center from 'react-center';

const getDownloadButtonLink = () => {
  const isFirefox = typeof InstallTrigger !== 'undefined';
  if (isFirefox) {
    return {
      url: '',
      buttonText: 'Add to Firefox'
    }
  }
  const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
  if (isChrome) {
    return {
      url: 'https://chrome.google.com/webstore/detail/css-spider/eneakgbflmejjpkogbdmebjbfcdebjik',
      buttonText: 'Add to Chrome'
    }
  }
  return null;
};

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);

  const downloadButtonData = getDownloadButtonLink();
  return (
    <Fragment>
      <HeadSection />
      <FeatureSection />
      <Center>
      <ReactPlayer height={400} width={400} url='https://youtu.be/j7a-ku_BB3s' />
      </Center>
      { downloadButtonData && <Center>
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.open(downloadButtonData.url)}
        >
          {downloadButtonData.buttonText}
        </Button>
      </Center> }
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;
