import { AutoCompleteData } from "../../../entities/AutoComplete";

export const filterBySearchText = (
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
