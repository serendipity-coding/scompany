/* Importing the axios library. */
import axios from 'axios';

/* Creating an axios instance with a baseURL. */
const api = axios.create({
  baseURL: 'http://localhost:3001/api/v1'
});

/**
 * It returns a promise that resolves to the response of the GET request to the /talents endpoint
 * @returns A promise.
 */
export const getCompanyLinkedIn = (companyName) => {
  return api.get(`/companies/${companyName}`);
};

/* Exporting the functions. */
const apis = {
  getCompanyLinkedIn
};

export default apis;
