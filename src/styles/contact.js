import styled from 'styled-components';

const ContactWrapper = styled.div`
  background: white;
  color: white;
  letter-spacing: 0.2rem;
  font-family: 'Indie Flower', cursive;
  font-weight: bold;

  svg {
    display: block;
    position: absolute;
    margin-top: 300px;
  }

  .contact-info {
    position: relative;
    text-align: center;
    bottom: 0;
    margin: 0 9rem;
    img {
      width: 600px;
    }
    p {
      margin-top: -100px;
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 991px) {
    min-height: 80vh;
    .contact-info {
      top: -60px;
      margin: 0 5rem;
      ul {
        display: none;
      }
      p {
        margin-top: -200px;
      }
    }
    .contact-svg {
      display: none;
    }
  }
`;

export {ContactWrapper};
