import styled from 'styled-components';

const SideWrapper = styled.div`
  display: block;
  .arrowup {
    position: fixed;
    bottom: 10px;
    right: 10px;
    margin: 20px;
    padding-top: 5px;
    width: 60px;
    height: 60px;
    transition: all 300ms linear;
    font-size: 30px;
    font-weight: bold;
    color: white;
    z-index: 100;
    border: transparent;
    text-align: center;
    pointer-events: none;
    opacity: 0;
    cursor: pointer;
    &:hover {
      transform: scale(0.95) rotate(10deg);
    }
  }
  .arrowup.active {
    opacity: 1;
    pointer-events: auto;
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
`;
export {SideWrapper};
