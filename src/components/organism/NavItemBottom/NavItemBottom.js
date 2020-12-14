import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
// import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

const StyledMenuWrapper = styled.div`
  background-color: black;
  height: 30px;
  width: 30px;
  color: white;
  align-items: center;
`;

function NavItemBottom() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <StyledMenuWrapper onClick={handleClick}>
        <MenuIcon />
        {/* <i className={click ? 'fas fa-times' : 'fas fa-bars'} />

        <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> */}
      </StyledMenuWrapper>
      {/* /* <CloseOutlinedIcon  onClick={onClick {CloseOutlinedIcon} : {MenuIcon}  */}
    </>
  );
}

export default NavItemBottom;
