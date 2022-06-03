const API_KEY = "AIzaSyDTwgKgwn0DhN75kXa6MOBudkZ5I4nbjaQ";

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
