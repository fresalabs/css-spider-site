import styled from 'styled-components';

const Button = styled.button`
  margin: 0;
  background: rgba(30, 32, 44, 0.9) !important;
  backdrop-filter: blur(3px);
  color: white;
  border-radius: 50px;
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
  padding: 4px 20px;
  cursor: pointer;
  &:hover {
    background: #000 !important;
  }
  &:focus {
    outline: none;
  }
`;

export default Button;
