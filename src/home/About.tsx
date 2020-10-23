import React from 'react';
import ReactDOM from 'react-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import styled from 'styled-components';
import Content from '../css-spider/src/content';
import { cssSpiderRootName } from '../css-spider/src/constants';
import CSSSpiderIcon from '../icons/logo.png';

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 25%;
`;

const FirstContainer = styled.div`
  flex-basis: 60%;
  margin: 10px 40px;
  p {
    font-size: 1.5em;
    font-weight: 600;
  }

  span {
    font-size: 1.2em;
    font-weight: 400;
  }
`;

const SecondContainer = styled.div`
  flex-basis: 40%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
]`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #c2fbd7;
  border-radius: 50px;
  border-width: 0;
  box-shadow: none;
  color: green;
  cursor: pointer;
  font-size: 16px;
  height: 40px;
  padding: 0 25px;
  animation: 3s pulse infinite;
  @keyframes pulse {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.2);
    }
  }
  transition: all 200ms;
  img {
    width: 24px;
    height: 24px;
    background-color: #c2fbd7;
    border-radius: 20px;
    margin-right: 4px;
  }
`;

class About extends React.Component<any, any> {
  injectSpider = () => {
    if (!document.getElementById(cssSpiderRootName)) {
      const app = document.createElement('div');
      app.id = 'css-spider-root';
      document.body.appendChild(app);
      ReactDOM.render(<Content />, app);
    } else {
      ReactDOM.render(<Content />, document.getElementById(cssSpiderRootName));
    }
  };

  render() {
    return (
      <FeaturesContainer>
        <FirstContainer>
          <p>The fastest and easiest way to check, copy and edit CSS</p>
          <span>
            Goodbye to "Inspect Element" — Check the CSS of any element you hover over, instantly, and copy its entire
            rules with a single click.
          </span>
        </FirstContainer>
        <SecondContainer>
          <StyledButton onClick={this.injectSpider}>
            <img src={CSSSpiderIcon} alt="logo" />
            Try it your self on this page
          </StyledButton>
          <StyledButton onClick={() => window.open('https://gum.co/CpAKX', '_blank')}>
            <FavoriteIcon />
            Buy me a Coffee?
          </StyledButton>
          <StyledButton
            onClick={() =>
              window.open(
                'https://chrome.google.com/webstore/detail/css-spider/eneakgbflmejjpkogbdmebjbfcdebjik?hl=en&authuser=1',
                '_blank'
              )
            }
          >
            <AddShoppingCartIcon />
            <div>Download</div>
          </StyledButton>
        </SecondContainer>
      </FeaturesContainer>
    );
  }
}

export default About;
