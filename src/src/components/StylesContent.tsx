import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import * as _ from 'lodash';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import toStyle from 'css-to-style';
import { IconContext } from 'react-icons';
import { FiExternalLink } from 'react-icons/fi';
import { AiOutlineClose, AiOutlineCopy } from 'react-icons/ai';
import { FaAutoprefixer, FaRulerCombined } from 'react-icons/fa';
import CopyToClipboard from 'react-copy-to-clipboard';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';


import './styles-content.scss';

interface StylesContentProps {
  element: any;
  values: object;
  tag: string;
  tagId: string;
  tagClass: string;
  fontFamily: string;
  fontSize: string;
  onClose: () => void;
}

type StylesContentState = {
  isEditable: boolean;
  stylesHtml: string;
};

const StyledContainer = styled.div`
  position: relative;
`;

const ActionsContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 70px;
  right: 5px;
  top: -15px;
`;

const ActionItem = styled.div`
  cursor: pointer;
`;

const ActionItemTitle = styled.span`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: bold;
  font-size: 16px;
  word-break: break-all;
  display: inline;
  color: #4adc71;
`;

const StylesRootContainer = styled(ContentEditable)`
  margin-top: 15px;
`;

const PopupContent = styled.div`
  margin-top: 10px;
`;

const PopupHeaderTitleContainer = styled.div`
  display: flex;
`;

const ActionItemDescription = styled.div`
  color: #4adc71;
  padding: 0;
  margin: 0;
  font-weight: bold;
`;

const PopupRulerContainer = styled.div`
  margin-top: 5px;
  display: flex;
`;

const PopupRulerContent = styled.div`
  color: white;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;
  padding-left: 10px;
`;

const PopupFontContainer = styled.div`
  display: flex;
`;

const PopupFontContent = styled.div`
  color: white;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;
  padding-left: 10px;
`;

class StylesContent extends React.Component<StylesContentProps, StylesContentState> {
  externalEntity: any;

  constructor(props: StylesContentProps) {
    super(props);
    const stylesHtml = '';
    this.state = {
      isEditable: false,
      stylesHtml,
    };

    this.externalEntity = React.createRef();
  }

  composeTextToCopy = (): string => {
    const values = this.props.values;
    let stringifiedStyles = '';
    R.mapObjIndexed((value: string, key: string) => {
      stringifiedStyles += `\t${key}: ${value};\n`;
    }, values);
    stringifiedStyles = `{\n${stringifiedStyles}}`;
    return stringifiedStyles;
  };

  getHTML = (styles: object) => {
    let stylesHtml = '';
    R.mapObjIndexed((value: string, key: string) => {
      stylesHtml = `${stylesHtml}<div> <span class="key">${key}</span> : <span class="value">${value}</span>;</div>`;
    }, styles);
    return stylesHtml;
  };

  componentDidUpdate(prevProps: Readonly<StylesContentProps>, prevState: Readonly<StylesContentState>, snapshot?: any) {
    if (!_.isEqual(this.props.values, prevProps.values)) {
      this.setState({ stylesHtml: this.getHTML(this.props.values) });
    }
  }

  onLinkClick = () => {
    this.externalEntity.current.submit();
  };


  handleChange = (e: ContentEditableEvent) => {
    const html = e.target.value;
    const styledRootNode = document.createElement('div');
    styledRootNode.innerHTML = html;
    if (toStyle(styledRootNode.innerText)) {
      const styleString = (
        Object.entries(toStyle(styledRootNode.innerText)).map(([k, v]) => `${k.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)}:${v}`).join(';')
      );
      this.props.element.setAttribute('style', styleString)
    }
  };

  render() {
    const { stylesHtml } = this.state;
    return (
      <IconContext.Provider value={{ color: 'white', className: 'global-class-name', size: '1.4em' }}>
        <StyledContainer>
          <ActionsContainer>
            <ActionItem onClick={this.onLinkClick}>
              <FiExternalLink />
              <form ref={this.externalEntity} action="https://codepen.io/pen/define" method="POST" target="_blank">
                <input
                  type="hidden"
                  name="data"
                  value={JSON.stringify({
                    description: 'Copied with css-spider https://cssspider.fresalabs.com',
                    html:
                      '<div class="desc" >Goodbye to "Inspect Element" — Check the CSS of any element you hover over, instantly, and copy its entire rules with a single click.</div>\n\n',
                    css: `div.desc  ${this.composeTextToCopy()}`,
                    js: '/* Copied with css-spider https://cssspider.fresalabs.com */',
                    tags: ['Cssspider', 'fresalabs'],
                  })}
                />
              </form>
            </ActionItem>

            <CopyToClipboard
              text={this.composeTextToCopy()}
              options={{
                format: 'text/plain',
              }}
            >
              <ActionItem>
                <AiOutlineCopy />
              </ActionItem>
            </CopyToClipboard>

            <ActionItem onClick={this.props.onClose}>
              <AiOutlineClose />
            </ActionItem>
          </ActionsContainer>
          <PopupContent>
            <PopupHeaderTitleContainer>
              <ActionItemTitle>{this.props.tag}</ActionItemTitle>
              <ActionItemDescription>{this.props.tagId}</ActionItemDescription>
              <ActionItemDescription>{this.props.tagClass}</ActionItemDescription>
            </PopupHeaderTitleContainer>
            <PopupRulerContainer>
              <FaRulerCombined />
              <PopupRulerContent>
                {R.prop('width' as never, this.props.values)}x{R.prop('height' as never, this.props.values)}
              </PopupRulerContent>
            </PopupRulerContainer>
            <PopupFontContainer>
              <FaAutoprefixer />
              <PopupFontContent>
                {R.head(R.split(',', this.props.fontFamily))} {this.props.fontSize}
              </PopupFontContent>
            </PopupFontContainer>
            <StylesRootContainer
              className="styles-content"
              tagName="pre"
              html={stylesHtml} // innerHTML of the editable div
              disabled={false} // use true to disable edition
              onChange={this.handleChange} // handle innerHTML change
            />
          </PopupContent>
        </StyledContainer>
      </IconContext.Provider>
    );
  }
}

export default StylesContent;
