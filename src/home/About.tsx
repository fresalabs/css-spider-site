import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Content from '../css-spider/src/content';
import { cssSpiderRootName } from '../css-spider/src/constants';

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15%;
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
`;

const StyledButton = styled.button`
  background-color: #c2fbd7;
  border-radius: 50px;
  border-width: 0;
  box-shadow: rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0;
  color: green;
  cursor: pointer;
  display: inline-block;
  font-size: 1em;
  height: 50px;
  padding: 0 25px;
  transition: all 200ms;
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
          <StyledButton onClick={this.injectSpider}>Try it your self on this page</StyledButton>
        </SecondContainer>
      </FeaturesContainer>
    );
  }
}

export default About;
