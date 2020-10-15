import React from 'react';
import styled from 'styled-components';
import CSSSpiderIcon from '../icons/logo.png';

const HeadingContainer = styled.h3`
  color: #800080;
  font-family: CerebriSans-Bold, -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
  font-size: 2em;
  font-weight: 600;
  margin-top: 2em;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const IconContainer = styled.div`
  height: 50px;
  margin-right: 10px;
  img {
    width: 40px;
    height: 40px;
  }
`;

class Heading extends React.Component<any, any> {
  render() {
    return (
      <HeadingContainer>
        <IconContainer>
          <img src={CSSSpiderIcon} alt="logo"/>
        </IconContainer>
        <div>CSS Spider</div>
      </HeadingContainer>
    );
  }
}

export default Heading;
