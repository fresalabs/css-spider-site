import React from 'react';
import './content.css';
import DomInspector from './domInspector';
import ActionsBar from './components/ActionsBar';
import Popup from './components/Popup';
import StylesContent from './components/StylesContent';

type ContentProps = {};

interface ContentState {
  styles: any;
  position: any;
  tag: string;
  tagId: string;
  tagClass: string;
  fontFamily: string;
  fontSize: string;
  hidePopup: boolean;
}

class Content extends React.Component<ContentProps, ContentState> {
  inspector: DomInspector;
  constructor(props: ContentProps) {
    super(props);
    this.state = {
      styles: {},
      position: {},
      tag: '',
      tagId: '',
      tagClass: '',
      fontFamily: '',
      fontSize: '',
      hidePopup: false,
    };
    this.inspector = new DomInspector({
      onMove: this.onCursorMove,
      exclude: ['#css-spider-root'],
    });
    // enable by default
    this.inspector.enable();
  }

  onCursorMove = (
    styles: object,
    position: object,
    tag: string,
    tagId: string,
    tagClass: string,
    fontFamily: string,
    fontSize: string
  ) => {
    this.setState({
      styles,
      position,
      tag,
      tagId,
      tagClass,
      fontFamily,
      fontSize,
      hidePopup: false,
    });
  };

  onPopupClose = () => {
    this.setState({
      hidePopup: true,
      fontFamily: "",
      fontSize: "",
      position: undefined,
      styles: undefined,
      tag: "",
      tagClass: "",
      tagId: ""
    });
  };

  render() {
    return (
      <div className={'css-spider-container'}>
        <ActionsBar inspector={this.inspector} />
        {!this.state.hidePopup && (
          <Popup target={this.inspector.target}>
            <StylesContent
              element={this.inspector.target}
              values={this.state.styles}
              tag={this.state.tag}
              tagId={this.state.tagId}
              tagClass={this.state.tagClass}
              fontFamily={this.state.fontFamily}
              fontSize={this.state.fontSize}
              onClose={this.onPopupClose}
            />
          </Popup>
        )}
      </div>
    );
  }
}

export default Content;

