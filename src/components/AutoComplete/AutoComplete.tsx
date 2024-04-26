import React, { useEffect, useRef, useState } from "react";
import { AutoCompletetStyled } from "./AutoComplete.styled";
import AutoCompleteSearch from "./ui/AutoCompleteSearch";
import AutoCompleteResults from "./ui/AutoCompleteResults";
import {
  AutoCompleteData,
  AutoCompleteProps,
} from "../../entities/AutoComplete";
import useDebounce from "../../shared/hooks/useDebounce";

const AutoComplete: React.FC<AutoCompleteProps> = ({ data }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [filteredData, setFilteredData] = useState<AutoCompleteData[]>([]);
  const [selectedItem, setSelectedItem] = useState<AutoCompleteData | null>(
    null,
  );
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

      // We simulate the Promise, eliminating the need to use 'catch' in this context.
      try {
        const filteredResults = await filterAsync(data, debouncedSearchText);
        setFilteredData(filteredResults);
        setShowResults(!selectedItem && Boolean(filteredResults.length));
      } finally {
        setIsLoading(false);
      }
    };

    filterData();
  }, [debouncedSearchText, data, selectedItem]);

  const filterAsync = (
    data: AutoCompleteData[],
    searchText: string,
  ): Promise<AutoCompleteData[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const regex = new RegExp(`^${searchText}`, "i");
        const suggestions = data
          .sort()
          .filter((v: AutoCompleteData) => regex.test(v.label));
        resolve(suggestions);
      }, 500);
    });
  };
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
      {showResults && (
        <AutoCompleteResults
          data={filteredData}
          searchText={searchText}
          selectItem={(item) => handleSelectItem(item)}
        />
      )}
    </AutoCompletetStyled>
  );
};

export default AutoComplete;
