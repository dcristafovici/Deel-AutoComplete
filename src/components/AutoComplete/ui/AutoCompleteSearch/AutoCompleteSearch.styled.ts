import styled from "styled-components";
import { AutoCompleteSearchStyledProps } from "../../../../entities/AutoComplete";

export const AutoCompleteSearchStyled = styled.div<AutoCompleteSearchStyledProps>`
  position: relative;
  input {
    width: 100%;
    height: 40px;
    outline: none;
    font-size: 16px;
    border: 1px solid ${(props) => (props.$selected ? "green" : "#f2f2f2")};
    border-radius: 5px;
    padding-left: 10px;
    box-sizing: border-box;
    &::placeholder {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
      font-size: 16px;
    }
  }
  .remove-result {
    position: absolute;
    width: 20px;
    height: 20px;
    right: 10px;
    margin-top: -10px;
    top: 50%;
    cursor: pointer;
    &:hover {
      svg {
        opacity: 0.7;
      }
    }
    svg {
      width: 100%;
      opacity: 0.3;
      transition: all 0.3s ease-in-out;
      height: 100%;
    }
  }
`;
