import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  color: white;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;
  margin-bottom: 16px;
  font-size: 1.25rem;
`;

const Description = styled.div`
  color: rgb(143, 146, 150);
  font-size: 1rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.5;
`;

const StyledLink  = styled.a`
  margin: 0 4px;
`;

class AboutTheCompany extends React.Component {
  render() {
    return (
      <div>
        <Header>About the Company</Header>
        <Description>
          Product belongs to
          <StyledLink href="http://fresalabs.com/" target="_blank">
            FresaLabs
          </StyledLink>
          software for everyone.
        </Description>
      </div>
    );
  }
}

export default AboutTheCompany;
