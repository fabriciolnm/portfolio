import styled from "styled-components";

export const Container = styled.div`
  > .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 10px auto;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_CARD};
    border-radius: 20px;

    width: 240px;
    height: auto;
    @media (min-width: 768px){
          width: 380px;
          height: auto;
          margin: 30px;
        }

    > img {
      width: 90%;
      object-fit: cover;
      border-radius: 20px;
      overflow: hidden;
      margin-top: 15px;
    }

    > img:hover {
      transform: scale(1.02);
      transition: 0.5s;
    }

    > h2 {
      font-size: 16px;
    }

    > .btnsection {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      

      > a:hover {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_CARD};
      }

      > .btn1, .btn2 {
        display: flex;
        padding: 10px;
        height: 40px;
        border: 1px solid gray;
        border-radius: 8px;
        color: white;
        justify-content: center;
        margin-bottom: 10px;
      }

    }
  }
`;
