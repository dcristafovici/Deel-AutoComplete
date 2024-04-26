import AutoComplete from "../components/AutoComplete";
import { autoCompleteMockData } from "../shared/Mock";
import { ApplicationStyled } from "./App.styled";
import { AutoCompleteData } from "../entities/AutoComplete";
import { CountryService } from "../Service/CountryService";
import { useState } from "react";

const App = () => {
  const [selectedLocalItem, setSelectedLocalItem] =
    useState<AutoCompleteData | null>(null);
  const [selectedExternalItem, setSelectedExternalItem] =
    useState<AutoCompleteData | null>(null);

  const handleCountriesFromAPI = async (
    name: string,
  ): Promise<AutoCompleteData[]> => {
    const { data = [] } = await CountryService.getCountriesByName(name);

    return data.map(({ name: { common } }) => ({
      label: common,
      value: common,
    }));
  };
  return (
    <ApplicationStyled>
      <div className="demo-example">
        <h2>
          AutoComplete component in React TypeScript with <i>local data.</i>
          {selectedLocalItem && (
            <span>
              Selected local item: <i>{selectedLocalItem.label}</i>
            </span>
          )}
        </h2>
        <AutoComplete
          data={autoCompleteMockData}
          selectedItem={selectedLocalItem}
          setSelectedItem={(value) => setSelectedLocalItem(value)}
        />
      </div>

      <div className="demo-example">
        <h2>
          AutoComplete component in React TypeScript with <i> API data.</i>
          <p>
            * Please note that for async autocomplete the filtering occurs on
            the backend, which means that at times the filters may not display
            accurately, but they reflect the data as received from the backend.
          </p>
          {selectedExternalItem && (
            <span>
              Selected External Item: <i>{selectedExternalItem.label}</i>
            </span>
          )}
        </h2>
        <AutoComplete
          data={autoCompleteMockData}
          fetchFunction={(searchText) => handleCountriesFromAPI(searchText)}
          selectedItem={selectedExternalItem}
          setSelectedItem={(value) => setSelectedExternalItem(value)}
        />
      </div>
    </ApplicationStyled>
  );
};

export default App;
