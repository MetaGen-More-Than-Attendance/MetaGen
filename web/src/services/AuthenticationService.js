import axios from "axios";
import { BASE_URL } from "../.env";
export default class AuthenticationService {
  login(loginRequest) {
    axios.post(process.env.BASE_URL + "/login", loginRequest);
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("iat");
    localStorage.removeItem("exp");
    localStorage.removeItem("isAdmin");
  }

  tokenIsValid(token) {
    if (token != null) {
      return true;
    }
    return false;
  }
  tokenIsExpired(token) {
    return axios.get(process.env.BASE_URL + "/api/isExpired?token=" + token);
  }

  getTokenFromLocal() {
    return localStorage.getItem("token");
  }
}
