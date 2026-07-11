import axios from "axios";

const api = axios.create({
  baseURL: "https://disease.sh/v3/covid-19",
});

// Worldwide Statistics
export const getWorldwideData = async () => {
  const response = await api.get("/all");
  return response.data;
};

// Historical Cases (for Line Chart)
export const getHistoricalData = async () => {
  const response = await api.get("/historical/all?lastdays=all");
  return response.data;
};

// Country-wise Data (for Maps)
export const getCountriesData = async () => {
  const response = await api.get("/countries");
  return response.data;
};