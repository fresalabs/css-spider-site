import React from 'react';
import styled from 'styled-components';
import { Radio, RadioGroup } from 'react-radio-group';
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  PauseOutlined,
  CaretRightOutlined,
  CloseOutlined,
  MoreOutlined,
} from '@ant-design/icons';
import Button from './Button';
import { Options, defaultCSSSpiderOptions } from './constants';
import DomInspector from '../domInspector';

const ActionsContainer = styled.div<{ isPositionedTop: boolean }>`
  display: block;
  top: ${(props) => (props.isPositionedTop ? '6px' : 'initial')};
  bottom: ${(props) => (props.isPositionedTop ? 'initial' : '6px')};
  right: 6px;
  position: fixed;
  cursor: default;
  & > button {
    margin-right: 8px;
  }
`;

const OptionsDropDownContainer = styled.div<{ isPositionedTop: boolean; showOptions: boolean }>`
  display: ${(props) => (props.showOptions ? 'inline-block' : 'none')};
  position: absolute;
  right: 171.297px;
  top: ${(props) => (props.isPositionedTop ? '30px' : 'initial')};
  bottom: ${(props) => (props.isPositionedTop ? 'initial' : '30px')};
  animation: fadeIn 200ms;
  margin: 1em 0;
  outline: 0 !important;
`;

const DropDownContent = styled.div`
  width: 200px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.4);
  background: rgba(30, 32, 44, 0.9) !important;
  border-radius: 8px;
  padding: 8px;
  font-size: 14px !important;
  list-style: none;
  line-height: 18px;
  color: #fff !important;
  box-sizing: initial !important;
  text-align: left;
  margin: 0 !important;
  overflow: auto;
  max-height: 80vh;
  backdrop-filter: blur(3px);
  p {
    margin-top: 10px;
    padding: 0 8px 0;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
  }
`;

const RadioContainer = styled.div`
  margin-left: 2px;
  padding: 6px 8px;
  span {
    margin-left: 8px;
  }
  input {
    cursor: pointer;
  }
`;

interface ActionsBarProps {
  inspector: DomInspector;
}

interface ActionsBarState {
  isPositionedTop: boolean;
  isPaused: boolean;
  options: Options;
  showOptions: boolean;
  destroy: boolean;
}

class ActionsBar extends React.Component<ActionsBarProps, ActionsBarState> {
  constructor(props: ActionsBarProps) {
    super(props);
    this.state = {
      isPositionedTop: true,
      isPaused: false,
      options: defaultCSSSpiderOptions,
      showOptions: false,
      destroy: false,
    };
  }

  handleMove = () => {
    const { isPositionedTop } = this.state;
    this.setState({ isPositionedTop: !isPositionedTop });
  };

  handlePause = () => {
    const { isPaused } = this.state;
    this.setState({ isPaused: !isPaused }, () => {
      this.state.isPaused ? this.props.inspector.disable() : this.props.inspector.enable();
    });
  };

  handleOptionsChange = (value: string, category: string) => {
    const { options } = this.state;
    const modifiedOptions = options.map((currentValue) => {
      return currentValue.category == category ? { ...currentValue, chosenKey: value } : currentValue;
    });
    this.setState({ options: modifiedOptions });
  };

  getOptions = () => {
    const { showOptions, isPositionedTop, options } = this.state;
    return (
      <OptionsDropDownContainer isPositionedTop={isPositionedTop} showOptions={showOptions}>
        <DropDownContent>
          {options.map((currentValue) => {
            return (
              <RadioGroup
                name={currentValue.category}
                key={currentValue.category}
                selectedValue={currentValue.chosenKey}
                onChange={(value) => this.handleOptionsChange(value, currentValue.category)}
              >
                <p>{currentValue.category}</p>
                {currentValue.choices.map((choice) => {
                  return (
                    <RadioContainer key={choice.key}>
                      <Radio value={choice.value} />
                      <span>{choice.label}</span>
                    </RadioContainer>
                  );
                })}
              </RadioGroup>
            );
          })}
        </DropDownContent>
      </OptionsDropDownContainer>
    );
  };

  handleOptionsClick = () => {
    const { showOptions } = this.state;
    this.setState({ showOptions: !showOptions });
  };

  onCloseCSSSpider = () => {
    this.props.inspector.destroy();
    this.setState({ destroy: true });
  };

  render() {
    const { isPositionedTop, isPaused, destroy } = this.state;
    return !destroy ? (
      <ActionsContainer isPositionedTop={isPositionedTop}>
        <Button onClick={this.handlePause}>
          {isPaused ? (
            <React.Fragment>
              Continue
              <CaretRightOutlined />
            </React.Fragment>
          ) : (
            <React.Fragment>
              Pause
              <PauseOutlined />
            </React.Fragment>
          )}
        </Button>
        <Button onClick={this.handleMove}>Move {isPositionedTop ? <ArrowDownOutlined /> : <ArrowUpOutlined />}</Button>
        <Button onClick={this.handleOptionsClick}>
          Options <MoreOutlined />
        </Button>
        {this.getOptions()}
        <Button onClick={this.onCloseCSSSpider}>
          Close CSS Spider <CloseOutlined />
        </Button>
      </ActionsContainer>
    ) : (
      <React.Fragment />
    );
  }
}

export default ActionsBar;
