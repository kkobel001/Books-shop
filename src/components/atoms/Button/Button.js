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
    background-color: #000000;
  }

  /* display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  padding: 0;
  background-color: green;
  width: 220px;
  height: 47px;
  border: none;
  text-transform: uppercase;
  font-size: 16px;

  :hover,
  active {
    background-color: lightgreen;
    color: white;
    border-color: white;
  } */
`;

/* ${({ secondary }) =>
    secondary &&
    css`
      background-color: hsl(0, 0%, 90%);
      width: 105px;
      height: 30px;
      font-size: 10px;
    `} */
