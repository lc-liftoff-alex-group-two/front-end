import axios from "axios";
export const giveWiseApi = {
  authenticate,
  basicAuth,
};

function authenticate(email, password) {
  return instance.post(
    "/auth/login",
    { email, password },
    {
      headers: { "Content-type": "application/json" },
    }
  );
}

function basicAuth(user) {
  return `Basic ${user.authdata}`;
}

const instance = axios.create({
  baseURL: "http://localhost:8080",
});
