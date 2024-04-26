import styled from "styled-components";

export const ApplicationStyled = styled.main`
  padding: 30px;
  box-sizing: border-box;
  h2 {
    text-align: center;
    font-size: 1.5;
    margin-bottom: 1rem;
  }
  .demo-example {
    margin-bottom: 5rem;
    i {
      color: red;
    }
    span {
      display: block;
      margin-top: 20px;
      font-size: 14px;
      font-weight: italic;
      i {
        color: green;
      }
    }
  }
`;
