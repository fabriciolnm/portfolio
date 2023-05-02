import styled from "styled-components";

export const Container = styled.div`
  > .home {
    // NAVBAR //
    > nav {
      padding: 5px;
      position: fixed;
      transform: translateX(-50%);
      bottom: 20px;

      display: flex;
      left: 45%;
      z-index: 5;

      background: rgba(50, 50, 50, 0.3);
      border-radius: 50px;
      backdrop-filter: blur(5px);

      > a {
        background: transparent;
        padding: 15px;
        border-radius: 50%;
        display: flex;
        color: gray;

        > svg {
          width: 20px;
          height: auto;
          color: white;
        }
      }

      > a:hover {
        transform: scale(1.2);
      }
    }

    // END OF NAVBAR //

    // HERO //

    > .hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100vh;
      width: 100%;

      gap: 5px;

      padding: 20px;

      

      margin: 10px auto;

      > .links {
        align-self: start;

        > a {
          color: white;
          > svg {
            width: 30px;
            height: auto;
            margin-right: 20px;
          }
          > svg:hover {
            transform: scale(1.1);
          }
        }
      }

      > h1 {
        font-size: 18px;
        font-weight: 600;
        @media (min-width: 768px){
          font-size: 22px;
        }
      }

      > h2 {
        font-size: 32px;
        font-weight: 600;
        @media (min-width: 768px){
          font-size: 36px;
        }
      }

      > h3 {
        font-size: 20px;
        font-weight: 600;
        @media (min-width: 768px){
          font-size: 24px;
        }
      }

      > h4 {
        position: absolute;
        font-size: 50px;
        font-weight: 600;
        top: 390px;
        color: rgba(255, 255, 255, 0.03);
        @media (min-width: 768px){
          font-size: 64px;
        }
      }

      > h5 {
        padding: 70px 20px 0;
        text-align: center;
        @media (min-width: 768px){
          font-size: 18px;
        }
      }

      > .image {
        margin-top: 80px;
        margin-bottom: 50px;
        display: flex;
        z-index: 5;
        height: auto;

        justify-content: center;

        > img {
          width: 100px;
          height: auto;
          z-index: 5;
          @media (min-width: 768px){
            width: 140px;
        }
        }
      }
    }
  }
  // END OF HOME //
  
  // BIO //
  > .bio {
    margin-top: 50px;
    height: 100vh;
  }
  // END OF BIO //

  // PROJECTS //
  > .projects {
    height: 120vh;
    padding-top: 10px;
    > .cards{
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
    }
    > h2 {
      font-size: 18px;
      text-align: center;
      margin-bottom: 20px;
    }
    
  }
  // END OF PROJECTS //

  // CONTACT //
  > .contact {
  }
  // END OF CONTACT //
`;
