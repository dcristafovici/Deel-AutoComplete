import axios, { AxiosResponse } from "axios";
import { CountryInterface } from "../entities/Country";

const baseURL = "https://restcountries.com/v3.1";
const CountryEndpoints = {
  getAll: (): string => `${baseURL}/all/fields=name,language`,
  getAllByName: (name: string) =>
    `${baseURL}/name/${name}?fields=name,language`,
};

export class CountryService {
  static readonly getCountries = (): Promise<CountryInterface[]> => {
    return axios.request({
      url: CountryEndpoints.getAll(),
      method: "GET",
    });
  };

  static readonly getCountriesByName = (
    name: string,
  ): Promise<AxiosResponse<CountryInterface[]>> => {
    return axios.request({
      url: CountryEndpoints.getAllByName(name),
      method: "GET",
    });
  };
}
