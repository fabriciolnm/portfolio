import styled from "styled-components";

export const Container = styled.div`
  z-index: -5;
  > .gradient1 {
    position: absolute;
    width: 100px;
    height: 350px;
    left: 250px;
    top: 10px;
    border-radius: 20%;
    z-index: -5;

    background: linear-gradient(90deg, #1a2980 0%, #26d0ce 100%);
    filter: blur(120px);
  }
  > .gradient2 {
    position: absolute;
    width: 230px;
    height: 230px;
    left: -90px;
    top: 1350px;
    border-radius: 50%;
    z-index: -5;

    background: linear-gradient(90deg, #f4c4f3 0%, #fc67fa 100%);
    filter: blur(160px);
  }

  > .gradient3 {
    position: absolute;
    width: 250px;
    height: 250px;
    left: 200px;
    top: 2350px;
    border-radius: 50%;
    z-index: -5;

    background: linear-gradient(90deg, #1a2980 0%, #26d0ce 100%);
    filter: blur(120px);
  }
`;
