import styled from 'styled-components';

const ContactWrapper = styled.div`
  background: white;
  letter-spacing: 0.2rem;
  font-family: 'Indie Flower', cursive;
  font-weight: bold;

  svg {
    display: block;
    position: absolute;
    margin-top: 600px;
  }

  .contact-info {
    position: relative;
    text-align: center;
    margin: 0 auto;
    img {
      width: 500px;
    }
    .p {
      margin-top: -100px;
      font-size: 1.5rem;
      max-width: 29rem;
      min-width: 10rem;
      margin: 4rem auto;
      line-height: 3rem;
      .contact-title {
        font-size: 2rem;
        margin: 1.5rem;
      }
    }
  }
  @media screen and (max-width: 991px) {
    min-height: 80vh;
    .contact-info {
      top: -60px;
      margin: 0 5rem;

      .p {
        margin-top: 60px;
        font-size: 1.2rem;
      }
      img {
        width: 500px;
      }
    }
    .contact-svg {
      display: none;
    }
  }
  @media screen and (max-width: 500px) {
    .contact-info {
      img {
        width: 220px;
        margin: 0 auto;
      }
      .question {
        display: none;
      }
      .p {
        font-size: 0.8rem;
        .contact-title {
          font-size: 1.4rem;
          margin: 0.2rem;
        }
      }
    }
  }
`;

export {ContactWrapper};
