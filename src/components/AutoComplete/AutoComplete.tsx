import React, { useEffect, useRef, useState } from "react";
import { AutoCompletetStyled } from "./AutoComplete.styled";
import AutoCompleteSearch from "./ui/AutoCompleteSearch";
import AutoCompleteResults from "./ui/AutoCompleteResults";
import {
  AutoCompleteData,
  AutoCompleteProps,
} from "../../entities/AutoComplete";
import useDebounce from "../../shared/hooks/useDebounce";
import { filterBySearchText } from "./utils/filterBySearchText";

const AutoComplete: React.FC<AutoCompleteProps> = ({
  data,
  fetchFunction,
  selectedItem,
  setSelectedItem,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [filteredData, setFilteredData] = useState<AutoCompleteData[]>([]);

  const autoCompleteRef = useRef<HTMLDivElement>(null);
  const debouncedSearchText = useDebounce(searchText, 500);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        autoCompleteRef.current &&
        !autoCompleteRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const filterData = async () => {
      if (debouncedSearchText.length === 0) {
        setFilteredData([]);
        setShowResults(false);
        return;
      }

      setIsLoading(true);

      try {
        const filteredResults = fetchFunction
          ? await fetchFunction(debouncedSearchText)
          : await filterBySearchText(data, debouncedSearchText);
        setFilteredData(filteredResults);
        setShowResults(Boolean(filteredResults.length));
      } catch (err) {
        setShowResults(false);
        setFilteredData([]);
      } finally {
        setIsLoading(false);
      }
    };

    !selectedItem && filterData();
  }, [debouncedSearchText, data, selectedItem]);

  const handleSelectItem = (item: AutoCompleteData) => {
    setSearchText(item.label);
    setSelectedItem(item);
    setShowResults(false);
  };

  const handleRemoveSelectedItem = () => {
    setSelectedItem(null);
    setSearchText("");
    setShowResults(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      setShowResults(false);
    }
    if (event.key === "Backspace" || event.key === "Delete") {
      if (selectedItem) {
        setSelectedItem(null);
      }
    }
  };

  return (
    <AutoCompletetStyled ref={autoCompleteRef} onKeyDown={handleKeyDown}>
      <AutoCompleteSearch
        searchText={searchText}
        setSearchText={(value) => setSearchText(value)}
        selectedItem={selectedItem}
        removeSelectedItem={() => handleRemoveSelectedItem()}
        setShowResults={(value) => setShowResults(value)}
        isLoading={isLoading}
      />
      <AutoCompleteResults
        data={filteredData}
        showResults={showResults}
        searchText={searchText}
        selectItem={(item) => handleSelectItem(item)}
      />
    </AutoCompletetStyled>
  );
};

export default AutoComplete;
