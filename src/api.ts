import axios from "axios";
import type { AxiosResponse } from "axios";

import { Property } from "./types";
import { PROPERTIES } from "./mocks/properties";
import { FAVORITES } from "./mocks/favorites";

const client = axios.create({
  baseURL: "/",
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
});

client.interceptors.response.use(
  ({ data }: AxiosResponse): Promise<AxiosResponse["data"]> =>
    Promise.resolve(data),
  (error) => {
    // TODO: handle error
  }
);

const Api = {
  // getProperties: (): Promise<Array<Property>> => client.get("/properties"),
  // getFavorites: (): Promise<Array<number>> => client.get("/favorites"),

  getProperties: (): Promise<Array<Property>> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(PROPERTIES);
      }, 1000);
    });
  },
  getFavorites: (): Promise<Array<number>> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(FAVORITES);
      }, 1000);
    });
  },
};

export default Api;
