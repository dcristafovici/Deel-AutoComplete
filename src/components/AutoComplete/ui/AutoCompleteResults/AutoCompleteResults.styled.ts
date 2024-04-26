import styled from "styled-components";

export const AutoCompleteResultsStyled = styled.div`
  background-color: #fff;
  ul {
    max-height: 250px;
    overflow-y: scroll;
    li {
      font-size: 14px;
      padding-left: 10px;
      padding-top: 5px;
      padding-bottom: 5px;
      box-sizing: border-box;
      display: block;
      line-height: normal;
      align-items: center;
      line-height: 2;
      cursor: pointer;
      transition: all 0.1s ease-in-out;
      i {
        color: red;
      }
      &:hover {
        background-color: #f8f8f8;
      }
    }
  }
`;
