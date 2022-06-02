import { authActions } from "../slice/auth-slice";

const API_KEY = "AIzaSyDTwgKgwn0DhN75kXa6MOBudkZ5I4nbjaQ";

export const LoginHandler = (props) => {
  return async (dispatch) => {
    const permittionRequest = async (input) => {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: input.enteredEmail,
            password: input.enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("not changed");
      }

      const data = await response.json();

      return data;
    };

    try {
      const changedData = await permittionRequest({
        enteredEmail: props.enteredEmail,
        enteredPassword: props.enteredPassword,
      });
      dispatch(
        authActions.login({
          idToken: changedData.idToken,
        })
      );
    } catch (err) {
      alert(err.message);
    }
  };
};

export const ChangePasswordHandler = (props) => {
  return async (dispatch) => {
    const sendChange = async (props) => {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({
            idToken: props.idToken,
            password: props.newPassword,
            returnSecureToken: false,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("not changed");
      }

      const data = await response.json();

      console.log(data);
      return data;
    };

    try {
      const changedData = await sendChange({
        idToken: props.idToken,
        newPassword: props.newPassword,
      });
      dispatch(authActions.changePassword({ idToken: changedData.idToken }));
    } catch (err) {
      alert(err.message);
    }
  };
};
