import styled from "styled-components";

export const Container = styled.div`
  > #contact {
    > h2 {
      font-size: 18px;
      text-align: center;
      margin-bottom: 20px;
    }

    > .contact_container {
      display: flex;
      justify-content: space-around;
      margin-bottom: 40px;
      width: 350px;
      margin: 40px auto;

      > .contact_option {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_CARD};
        border-radius: 10px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;

        > .contact_card {
          display: flex;
          align-items: center;
          gap: 10px;
          > svg {
            width: 18px;
            height: auto;
          }
        }
      }
    }

    > .form_container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 340px;
      margin: 20px auto;

      > input,
      textarea {
        font-family: 'Poppins', sans-serif;
        background: black;
        color: white;
        padding: 10px;
        resize: none;
        border: 1px solid gray;
      }

      > button {
        background: #043746;
        color: white;
        padding: 8px;
        border-radius: 5px;
        margin: 0 90px;
      }
    }

    > .footer {
      width: 100%;
      height: 190px;
      text-align: center;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_CARD};
      padding: 10px;

      > a {
        color: white;
        > svg {
          width: 40px;
          height: auto;
          margin: 10px;
        }
      }

      > h5 {
        font-size: 10px;
      }
    }
  }
`;
