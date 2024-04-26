import React from "react";
import { AutoCompleteResultsStyled } from "./AutoCompleteResults.styled";
import { AutoCompleteResultsProps } from "../../../../entities/AutoComplete";
import { highlightText } from "../../../../shared/utils/highlightText";

const AutoCompleteResults: React.FC<AutoCompleteResultsProps> = ({
  data,
  searchText,
  selectItem,
}) => {
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
