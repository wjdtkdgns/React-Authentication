import { authActions } from "../slice/auth-slice";
import { login, changePassword } from "../../components/util/AuthService";

export const LoginHandler = (email, password, navigate) => {
  return async (dispatch) => {
    try {
      login(email, password)
        .then((response) => response.json())
        .then((response) => {
          dispatch(
            authActions.login({
              idToken: response.idToken,
            })
          );
          navigate("/profile", { replace: true });
        });
    } catch (err) {
      alert(err.message);
    }
  };
};

export const ChangePasswordHandler = (idToken, password, navigate) => {
  return async (dispatch) => {
    try {
      changePassword(idToken, password)
        .then((response) => response.json())
        .then((response) => {
          dispatch(authActions.changePassword({ idToken: response.idToken }));
          navigate(-1, { replace: true });
        });
    } catch (err) {
      alert(err.message);
    }
  };
};
