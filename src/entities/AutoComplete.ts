export interface AutoCompleteData {
  value: string | number;
  label: string;
}

export interface AutoCompleteProps {
  data: AutoCompleteData[];
  fetchFunction?: (name: string) => Promise<AutoCompleteData[]>;
  selectedItem: AutoCompleteData | null;
  setSelectedItem: (item: AutoCompleteData | null) => void;
}

export interface AutoCompleteSearchProps {
  searchText: string;
  setSearchText: (value: string) => void;
  selectedItem: AutoCompleteData | null;
  removeSelectedItem: () => void;
  setShowResults: (status: boolean) => void;
  isLoading: boolean;
}

export interface AutoCompleteResultsProps {
  searchText: string;
  data: AutoCompleteData[];
  showResults: boolean;
  selectItem: (item: AutoCompleteData) => void;
}

export interface AutoCompleteSearchStyledProps {
  $selected: boolean;
}
