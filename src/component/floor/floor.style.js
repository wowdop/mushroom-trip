import styled from 'styled-components'

export const Floor = styled.div`
  width: 100%;
  height: 450px;
  background-image: repeating-linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.2) 2px,
      transparent 2.5px
    ),
    repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.2) 2px, transparent 2.5px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 1px, transparent 0),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 1px, transparent 0),
    linear-gradient(to right, rgba(255, 255, 255, 0.5) 1px, transparent 0),
    linear-gradient(to right, rgba(255, 255, 255, 0.5) 1px, transparent 0),
    radial-gradient(circle, rgba(205, 133, 63, 1) 19%, rgba(121, 50, 0, 1) 100%),
    linear-gradient(to right, rgba(255, 255, 255, 0.5) 2px, transparent 0);
  background-size: auto, auto, 50px 50px, 50px 50px, 50px 50px, 50px 50px,
    80px 80px, 50px 50px;
  background-position: 0 0, 0 0, 0 0, 0 10px, 0 0, 10px 0, 0 10px, 5px 0;
  transform: perspective(331px) rotateX(54deg) scale(1);
  box-shadow: 0px 20px 100px #555;
`
