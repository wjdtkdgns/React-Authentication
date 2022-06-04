const API_KEY = "AIzaSyDtK0WXotgi5QZwlPTK4TVPHENGNrX6Tu4";

export const login = (email, password) => {
  const data = {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
    data
  );
  return response;
};

export const signIn = (email, password) => {
  const data = {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    data
  );
  return response;
};

export const changePassword = (idToken, password) => {
  const data = {
    method: "POST",
    body: JSON.stringify({
      idToken,
      password,
      returnSecureToken: false,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
    data
  );
  return response;
};
