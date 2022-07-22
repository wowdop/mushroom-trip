import styled from 'styled-components'

export const Door = styled.div`
  width: 150px;
  height: 300px;
  position: absolute;
  // z-index: 1;
  left: 0;
  background-color: rgba(54, 202, 197, 0.8);
  background-image: repeating-linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1) 3px,
      transparent 3px,
      transparent 60px
    ),
    repeating-linear-gradient(
      60deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1) 1px,
      transparent 3px,
      transparent 60px
    ),
    linear-gradient(
      60deg,
      rgba(139, 139, 139, 0.6) 25%,
      transparent 25%,
      transparent 75%,
      rgba(139, 139, 139, 0.6) 75%,
      rgba(139, 139, 139, 0.6)
    ),
    linear-gradient(
      120deg,
      rgba(139, 139, 139, 0.6) 25%,
      transparent 25%,
      transparent 75%,
      rgba(139, 139, 139, 0.6) 75%,
      rgba(139, 139, 139, 0.6)
    );
  background-size: 70px 120px;

  :after {
    position: absolute;
    z-index: 3;
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 8px;
    background-color: red;
  }
`
