import HTTPClient from "./HTTPClient";

class Api extends HTTPClient {
  public example = async () => "Example call";
}

const API_URL = process.env.VITE_API_URL;

if (!API_URL) throw new Error("Error: no VITE_API_URL provided");

const api = new Api(API_URL, true);

export default api;
