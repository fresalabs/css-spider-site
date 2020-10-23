import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h1 {
    font-weight: 700;
    font-size: 2.5em;
  }
  iframe {
    width: 860px;
    height: 515px;
    margin: 3em auto;
    border-radius: 15px;
  }
`;

class Youtube extends React.Component<any, any> {
  render() {
    return (
      <StyledDiv>
        <h1>Say Good bye to "Inspect Element"</h1>
        <iframe
          src="https://www.youtube.com/embed/j7a-ku_BB3s"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </StyledDiv>
    );
  }
}

export default Youtube;
