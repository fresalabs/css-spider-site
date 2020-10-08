import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  width: 100%;
  min-height: 45vh;
  margin: auto;
  overflow-x: hidden;
`;

class PrimarySearchAppBar extends React.Component<any> {
  render() {
    const { children } = this.props;
    return (
        <ContentContainer>{children}</ContentContainer>
    );
  }
}

export default PrimarySearchAppBar;
