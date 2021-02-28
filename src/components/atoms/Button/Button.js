import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ theme }) => theme.primary};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background-color: #808080;
  }
`;
