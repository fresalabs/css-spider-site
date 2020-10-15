import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Heading = styled.h3`
  color: #333;
  font-size: 2.5em;
  font-weight: 400;
  margin-bottom: 0;
  text-align: center;
`;

const Description = styled.div`
  color: #666;
  margin: 1.5em auto 2.2em;
  max-width: 600px;
  text-align: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  img {
    max-width: 65px;
    margin-right: 8px;
  }
`;

class PlatForm extends React.Component<any, any> {
  render() {
    return (
      <Container>
        <Heading>Works everywhere. On every website.</Heading>
        <Description>
          Wordpress, Wix, Squarespace, Shopify, React, etc. CSS Spider runs on the browser as an extension so it works on
          any website, any theme and even works offline! Choose your favorite: Chrome, Firefox, and Safari. Internet
          Explorer maybe never.
        </Description>
        <LogoContainer>
          <img
            src="https://d33wubrfki0l68.cloudfront.net/aa7efc39f40fa36a2a8bcd17944a00c640dab9b6/d840e/img/logos/chrome.png"
            alt="Chrome logo"
          />
          <img
            src="https://d33wubrfki0l68.cloudfront.net/6344775540237d8e39df3e0a0b44e69a5f1d6942/05ea9/img/logos/firefox.png"
            alt="Firefox logo"
          />
          <img
            src="https://d33wubrfki0l68.cloudfront.net/dae22dc10f3acb31b716d89e3ec0fdd7d6cabbcb/abd46/img/logos/safari.png"
            alt="Firefox logo"
          />
        </LogoContainer>
      </Container>
    );
  }
}

export default PlatForm;
