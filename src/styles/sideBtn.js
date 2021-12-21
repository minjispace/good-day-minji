import styled from 'styled-components';

const SideWrapper = styled.div`
  display: block;
  .arrowup {
    position: fixed;
    top: 1%;
    left: 95%;
    margin: 20px;
    padding-top: 5px;
    width: 60px;
    height: 60px;
    transition: all 600ms linear;
    font-size: 30px;
    font-weight: bold;
    color: white;
    z-index: 100;
    border: transparent;
    text-align: center;
    pointer-events: none;
    cursor: pointer;
    &:hover {
      transform: scale(0.95) rotate(10deg);
    }
  }
  .arrowup.active {
    pointer-events: auto;
    top: 88%;
    left: 95%;
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
`;
export {SideWrapper};
