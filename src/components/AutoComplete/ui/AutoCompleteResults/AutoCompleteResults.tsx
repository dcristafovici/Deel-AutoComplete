import React from "react";
import { AutoCompleteResultsStyled } from "./AutoCompleteResults.styled";
import { AutoCompleteResultsProps } from "../../../../entities/AutoComplete";
import { highlightText } from "../../../../shared/utils/highlightText";

const AutoCompleteResults: React.FC<AutoCompleteResultsProps> = ({
  data,
  searchText,
  showResults,
  selectItem,
}) => {
  if (!showResults || searchText.length === 0) {
    return null;
  }
  return (
    <AutoCompleteResultsStyled>
      <ul>
        {data.map(({ label, value }) => (
          <li
            key={value}
            onClick={() => selectItem({ label, value })}
            dangerouslySetInnerHTML={{
              __html: highlightText(label, searchText),
            }}
          />
        ))}
      </ul>
    </AutoCompleteResultsStyled>
  );
};
export default AutoCompleteResults;
