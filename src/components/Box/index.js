import styled from "styled-components";

const Box = styled.div`
  background: #fff;
  border-radius: 8px;

  padding: 16px;

  margin-bottom: 10px;

  .boxLink {
    font-size: 14px;
    color: #2e7bb4;
    text-decoration: none;
    font-weight: 800;
  }

  .title {
    font-size: 32px;
    font-weight: 400;

    margin-bottom: 20px;
  }

  .subTitle {
    font-size: 18px;
    font-weight: 400;

    margin-bottom: 20px;
  }

  .smallTitle {
    font-size: 16px;
    font-weight: 700;
    color: #333333;

    margin-bottom: 20px;
  }

  hr {
    border-color: transparent;
    border-bottom-color: #ecf2fa;

    margin-top: 12px;
    margin-bottom: 8px;
  }

  input {
    width: 100%;

    background-color: #f4f4f4;
    color: #333333;

    border: 0;
    border-radius: 10000px;

    padding: 14px 16px;
    margin-bottom: 14px;

    ::placeholder {
      color: #333333;
      opacity: 1;
    }
  }

  button {
    background-color: #6f92bb;
    color: #ffffff;

    border: 0;
    border-radius: 10000px;

    padding: 8px 12px;
  }
`;

export default Box;
