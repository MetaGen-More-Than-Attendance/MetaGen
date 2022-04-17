import axios from "axios";
import { BASE_URL } from "../.env";
export default class AuthenticationService {
  login(loginRequest) {
    axios.post(process.env.BASE_URL, loginRequest);
  }

  logout() {
    localStorage.removeItem("token");
  }

  tokenIsValid(token) {
    return axios.get(process.env.BASE_URL + "/api/valid?token=" + token);
  }
  tokenIsExpired(token) {
    return axios.get(process.env.BASE_URL + "/api/isExpired?token=" + token);
  }
}
