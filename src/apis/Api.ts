import HTTPClient from "./HTTPClient";

class Api extends HTTPClient {
  public example = async () => "Example call";
}

const api = new Api(process.env.VITE_API_URL as string, true);

export default api;
