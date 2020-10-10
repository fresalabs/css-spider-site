import React from 'react';
import styled from "styled-components";

type PopupProps = {
  children: React.ReactNode;
  position: object;
};
type PopupState = {};

const PopupRoot = styled.div`
  position: fixed;
  min-width: 400px;
  max-width: 400px;
  margin-top: 10px;
  margin-left: 20px;
`;

const PopupContainer = styled.div`
  color: white;
  background: rgba(15, 17, 29, .95);
  backdrop-filter: blur(5px);
  height: initial;
  margin-top: 28px;
  padding: 20px;
  font-size: 14px;
  line-height: 24px;
  min-width: 250px !important;
  position: absolute;
  text-align: left;
  top: 0;
  left: 0;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 8px 0px, rgba(0, 0, 0, 0.24) 0px 4px 8px 0px;
  box-sizing: border-box;
`;

class Popup extends React.Component<PopupProps, PopupState> {
  constructor(props: PopupProps) {
    super(props);
  }
  render() {
    return (
      <PopupRoot
        style={this.props.position}
      >
        <PopupContainer>
          {this.props.children}
        </PopupContainer>
      </PopupRoot>
    )
  }
}

export default Popup;
