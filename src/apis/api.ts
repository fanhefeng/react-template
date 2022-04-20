import axios from "axios";

const fetch = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Cache-Control": "no-store"
  }
});

export default { fetch };
