import React from 'react';
import styled from 'styled-components';

const FAQContainer = styled.div`
  margin: 100px 0;
  h3 {
    text-align: center;

    font-size: 2.5em;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  & > div {
    margin-right: 20px;
    display: block;
  }
  details {
    margin: 20px;
    width: 600px;
    summary {
      font-size: 1.1em;
      font-weight: 600;
    }
    p {
      color: #666;
      max-width: 600px;
      margin: 1.5em 0 2.2em;
      font-weight: 450;
      line-height: 20px;
    }
  }
`;

class FAQ extends React.Component<any, any> {
  render() {
    return (
      <FAQContainer>
        <h3>FAQ</h3>
        <StyledDiv>
          <div>
            <details>
              <summary>Can I edit the CSS?</summary>
              <p>
                Yes! Press the space bar, click on the CSS code inside the window and try to change it. You'll see all
                the changes in real-time!
              </p>
            </details>
          </div>
            <div>
              <details>
                <summary>How can I pause the Spider?</summary>
                <p>Click on the button "Pause" or simply press the Shift key.</p>
              </details>
            </div>
        </StyledDiv>
      </FAQContainer>
    );
  }
}

export default FAQ;
