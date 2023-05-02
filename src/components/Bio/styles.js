import styled from "styled-components";

export const Container = styled.div`
  > .bio {
    > h2 {
      font-size: 20px;
      text-align: center;
      margin-top: 50px;
    }

    > .biocard {
      border-radius: 20px;
      border: 1px solid white;
      padding: 60px 20px;
      margin: 20px auto;
      width: 340px;

      @media (min-width: 767px) {
          width: 500px;
      }


      > h3 {
        font-size: 16px;

        text-align: center;
      }

      > ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 30px;
        margin-top: 40px;
        margin-left: 20px;

        > li {
          display: flex;
          align-items: center;
          > svg {
            width: 20px;
            height: 20px;
            margin: 10px;
          }
        }
        > li:hover {
          transform: scale(1.05);
        }
      }
    }
  }
`;
