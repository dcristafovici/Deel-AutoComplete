import React, { ChangeEvent } from "react";
import { AutoCompleteSearchStyled } from "./AutoCompleteSearch.styled";
import { AutoCompleteSearchProps } from "../../../../entities/AutoComplete";
import CloseIcon from "../../../../shared/Icons/CloseIcon";
import SpinnerIcon from "../../../../shared/Icons/SpinnerIcon";

const AutoCompleteSearch: React.FC<AutoCompleteSearchProps> = ({
  searchText,
  setSearchText,
  selectedItem,
  removeSelectedItem,
  isLoading,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSearchText(value);
  };

  return (
    <AutoCompleteSearchStyled $selected={Boolean(selectedItem)}>
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={handleChange}
      />
      {selectedItem && (
        <div className="remove-result" onClick={removeSelectedItem}>
          <CloseIcon />
        </div>
      )}
      {isLoading && (
        <div className="loading-result" onClick={removeSelectedItem}>
          <SpinnerIcon />
        </div>
      )}
    </AutoCompleteSearchStyled>
  );
};

export default AutoCompleteSearch;
