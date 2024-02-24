import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "143816480e3848daa6a442bcf4554473", 
    }
})