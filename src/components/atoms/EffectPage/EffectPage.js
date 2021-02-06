import styled from 'styled-components';

export const EffectPage = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  opacity: 0;
  transition: all 0.3s ease-out 0.5s;
  overflow: hidden;
  /* position:absolute; */

  &:hover {
    opacity: 1;
    top: 0px;
    transition-delay: 0s;
    animation: bounceY 0.9s linear;
  }
`;
