import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import AboutTheCompany from './AboutTheCompany';
import WaveBorder from './WaveBorder';

const StyledButton = styled.button`
  margin-top: 16px;
  width: 100%;
  background: black !important;
  border-radius: 4px;
  color: white;
  border: 2px solid white;
  text-align: center;
  padding: 4px;
  cursor: pointer;
`;

const StyledCol = styled(Col)`
  padding: 40px;
`;

const Container = styled.div`
  background: black;
`;

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <WaveBorder upperColor="#FFFFFF" lowerColor="#000000" animationNegativeDelay={4} />
        <Row>
          <StyledCol span={12}>
            <a href="mailto:admin@fresalabs.com">
              <StyledButton>Email us!</StyledButton>
            </a>
          </StyledCol>
          <StyledCol span={12}>
            <AboutTheCompany />
          </StyledCol>
        </Row>
      </Container>
    );
  }
}

export default Footer;
