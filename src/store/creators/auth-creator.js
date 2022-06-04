import { authActions } from "../slice/auth-slice";
import {
  login,
  changePassword,
  signIn,
} from "../../components/util/AuthService";

export const LoginHandler = (email, password, navigate) => {
  return async (dispatch) => {
    login(email, password)
      .then((response) => {
        if (!response.ok) {
          throw new Error("fail to login");
        } else {
          return response.json();
        }
      })
      .then((response) => {
        dispatch(
          authActions.login({
            idToken: response.idToken,
          })
        );
        navigate("/profile", { replace: true });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

export const SignInHandler = (email, password) => {
  return async (dispatch) => {
    signIn(email, password)
      .then((response) => {
        if (!response.ok) {
          throw new Error("fail to sign in");
        } else {
          return response.json();
        }
      })
      .then((response) => {
        dispatch(
          authActions.signIn({
            idToken: response.idToken,
          })
        );
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

export const ChangePasswordHandler = (idToken, password, navigate) => {
  return async (dispatch) => {
    changePassword(idToken, password)
      .then((response) => response.json())
      .then((response) => {
        dispatch(authActions.changePassword({ idToken: response.idToken }));
        navigate(-1, { replace: true });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};
