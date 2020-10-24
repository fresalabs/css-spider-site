import React from 'react';
import * as R from 'ramda';
import { SafetyCertificateOutlined, ClockCircleTwoTone, CheckCircleOutlined } from '@ant-design/icons';

import styled from 'styled-components';

const FeaturesContainer = styled.div`
  h1 {
    text-align: center;
    font-weight: bold;
    margin-bottom: 30px;
    padding-top: 40px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;

const Feature = styled.div`
  background-color: #f5f5f5;
  text-align: center;
  padding: 30px;
  margin-bottom: 30px;
  margin-left: 20px;
  border-radius: 4px;
  max-width: 16%;
  p {
    text-align: left;
    color: #53627c;
    line-height: 24px;
    letter-spacing: 1px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }
`;

class Features extends React.Component<any, any> {
  render() {
    const features: Array<{ icon: React.ReactNode; heading: string; description: any }> = [
      {
        icon: <SafetyCertificateOutlined style={{ fontSize: 33, color: '#1890ff' }} />,
        heading: 'The most clever browser extension for CSS',
        description:
          'CSS Spider uses the same technology used in Google Chrome with more improvements to help you quickly and precisely get CSS for any element.',
      },
      {
        icon: <ClockCircleTwoTone style={{ fontSize: 33, color: '#1890ff' }} />,
        heading: 'Easy and fastest inspection',
        description: (
          <>
            Its very painful to iterate the DOM over many elements and hunting the CSS on the browsers' Dev
            Tools (aka inspect element). <br /> Now, you can get all the styles on the fly for any element and be more productive.
          </>
        ),
      },
      {
        icon: <CheckCircleOutlined style={{ fontSize: 33, color: '#1890ff' }} />,
        heading: 'Copy and export any element you want',
        description:
          "If you want to copy and export to Codepen, the CSS of any element now, you just click, and see the magic that CSS Spider does for you.",
      },
    ];

    return (
      <FeaturesContainer>
        <h1>Features</h1>
        <StyledDiv>
          {R.map(
            (feature) => (
              <Feature>
                {feature.icon}
                <h2>{feature.heading}</h2>
                <p>{feature.description}</p>
              </Feature>
            ),
            features
          )}
        </StyledDiv>
      </FeaturesContainer>
    );
  }
}

export default Features;
