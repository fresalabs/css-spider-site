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
        heading: 'The smartest browser extension for CSS inspection',
        description:
          'No unuseful, duplicated or longhand CSS. CSS Spider uses the same technology used by Google and Github with our own improvements to quickly clean any CSS trash for you. Precise, shorthanded and advanced optimizations.',
      },
      {
        icon: <ClockCircleTwoTone style={{ fontSize: 33, color: '#1890ff' }} />,
        heading: 'Easy and lightspeed inspection',
        description: (
          <>
            Understand how everything works without wasting time hunting through infinite CSS rules on the browsers' Dev
            Tools. <br /> Get all the active styles on the fly and finish your work faster. <br /> Use shortcuts to work
            with it even quickier.
          </>
        ),
      },
      {
        icon: <CheckCircleOutlined style={{ fontSize: 33, color: '#1890ff' }} />,
        heading: 'Copy any element you want',
        description:
          "If you want to copy the CSS of this element right now, it's a pain. With CSS Spider, you just click, and it's yours. Create your perfect page.",
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
