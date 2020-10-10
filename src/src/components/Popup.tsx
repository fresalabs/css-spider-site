import React from 'react';
import styled from 'styled-components';
import GetCursorPosition from 'cursor-position';
import * as _ from 'lodash';

type PopupProps = {
  children: React.ReactNode;
  target: any;
};

type PopupState = {
  position: object;
  currentTarget: any;
};

const PopupRoot = styled.div`
  position: fixed;
  min-width: 400px;
  max-width: 400px;
  margin-top: 10px;
  margin-left: 20px;
`;

const PopupContainer = styled.div`
  color: white;
  background: rgba(15, 17, 29, 0.95);
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
    this.state = {
      position: {},
      currentTarget: null,
    };
  }
  componentDidMount() {
    document.addEventListener('mousemove', this.setPosition);
  }

  setPosition = () => {
    const { x, y } = GetCursorPosition({ absolute: true });
    const { currentTarget } = this.state;
    if (!_.isEqual(currentTarget, this.props.target)) {
      this.setState({ currentTarget: this.props.target, position: { top: y, left: x } });
    }
  };

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.setPosition);
  }

  render() {
    return (
      <PopupRoot style={this.state.position}>
        <PopupContainer>{this.props.children}</PopupContainer>
      </PopupRoot>
    );
  }
}

export default Popup;
