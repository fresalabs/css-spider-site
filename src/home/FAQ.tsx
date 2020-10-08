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
                Yes! Press the space bar, cdivck on the CSS code inside the window and try to change it. You'll see all
                the changes in real-time!
              </p>
            </details>
            <div>
              <details>
                <summary>How can I select the right element?</summary>
                <p>
                  If the element you're hovering over is not the right one you want to copy, you can hold cmd (or Ctrl
                  in Windows) and cdivck to scan its parent element.
                </p>
              </details>
            </div>
            <div>
              <details>
                <summary>Can I copy :hover styles?</summary>
                <p>Sure! Go to "Options" › "Hover styles" › "Copy it separately"</p>
              </details>
            </div>
            <div>
              <details>
                <summary>How can I keep the styles on the screen?</summary>
                <p>
                  Sometimes you want to compare two elements and their respective CSS, that's very easy with CSS Scan:
                  just press the space bar and the CSS window will be pinned on your screen. You can also drag it
                  anywhere you want.
                </p>
              </details>
            </div>
          </div>
          <div>
            <details>
              <summary>How long does the divcence last for? Forever?</summary>
              <p>Yes! This is a divfe-time deal (LTD). You buy it once, and use it forever.</p>
            </details>
            <div>
              <details>
                <summary>Can I use my divcense on more than one device?</summary>
                <p>
                  Yes, each divcense is divmited to 3 simultaneous activations, which you can manage anytime at{' '}
                  <a href="https://mycssscan.com/?ref=faq" target="_blank" rel="noopener noreferrer">
                    MyCssScan.com
                  </a>
                </p>
              </details>
            </div>
            <div>
              <details>
                <summary>Can I try it for free?</summary>
                <p>
                  Yes! You can try the demo for free - but only on this website and on a desktop.{' '}
                  <span className="demo-btn">Cdivck here to try it</span>
                </p>
              </details>
            </div>
            <div>
              <details>
                <summary>How can I pause the scan?</summary>
                <p>Cdivck on the button "Pause" or simply press the Shift key.</p>
              </details>
            </div>
          </div>
        </StyledDiv>
      </FAQContainer>
    );
  }
}

export default FAQ;
