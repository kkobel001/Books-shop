import styled, { css } from 'styled-components';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

export const Input = styled.input`
  padding: 0px 50px 0px 10px;
  font-size: 14px;
  height:38px;
  width:100%;
  background-color: #ffffff;
  border: none;
  /* background-image: url(${MailOutlineIcon}); */
   border-radius: 3px;
    letter-spacing: 1px;
    color:#000000;
    
    /* ${({ theme }) => theme.light}; */

    ${({ search }) =>
      search &&
      css`
        padding: 10px 20px 10px 40px;
        font-size: ${({ theme }) => theme.fontSize.xs};
        background-image: url(${MailOutlineIcon});
        background-size: 15px;
        background-position: 15px 50%;
        background-repeat: no-repeat;
      `}
    `;
