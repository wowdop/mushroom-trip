import styled from 'styled-components'

export const Hugo = styled.div`
  width: 250px;
  height: 100px;
  border: 5px groove green;
  background-color: #c00;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-left-radius: 25%;
  border-bottom-right-radius: 25%;

  transition: 250ms;
  transform: scale(0.7);

  position: relative;
  position: fixed;
  z-index: 111;
  left: ${({ left = 0 }) => `${left / 16}rem`};

  background-image: radial-gradient(circle, white 10%, transparent 10%),
    radial-gradient(circle, white 10%, transparent 10%),
    radial-gradient(circle, white 10%, transparent 10%),
    radial-gradient(circle, white 10%, transparent 10%),
    radial-gradient(circle, white 10%, transparent 10%);

  background-position: -82px 125px, -43px 80px, 0px 150px, 30px 190px,
    84px 188px;

  &::before,
  &::after {
    content: '';
    border-radius: 50%;
    position: absolute;
  }

  &::after {
    background-color: blue;
    width: 30px;
    height: 230px;
    inset: 99px 0 0 110px;
    border-radius: 15%;
  }

  &::before {
    background-color: indianred;
    width: 109px;
    height: 27px;
    inset: 310px 0 0 70px;
    box-shadow: -2px 3px 0px 0px rgb(0 0 0 / 50%);
  }
`
