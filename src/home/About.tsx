import React from 'react';

import styled from 'styled-components';

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 15%;
`;

const FirstContainer = styled.div`
  margin: 10px;
  p {
    font-size: 1.5em;
    font-weight: 600;
  }

  span {
    font-size: 1.2em;
    font-weight: 400;
  }
`;

class About extends React.Component<any, any> {
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
        <FirstContainer>
          <p>The fastest and easiest way to check, copy and edit CSS</p>
          <span>
            Goodbye to "Inspect Element" — Check the CSS of any element you hover over, instantly, and copy its entire
            rules with a single click.
          </span>
        </FirstContainer>
      </FeaturesContainer>
    );
  }
}

export default About;
