import styled from "styled-components";
import { Fragment, useRef, useState } from "react";
import { LoginHandler, SignInHandler } from "../../store/creators/auth-creator";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    const inputEmail = emailInputRef.current.value;
    const inputPassword = passwordInputRef.current.value;

    dispatch(LoginHandler(inputEmail, inputPassword, navigate));
  };

  const convertToSignInHandler = () => {
    setIsSignIn((state) => !state);
  };

  const signInHandler = (event) => {
    event.preventDefault();

    const inputEmail = emailInputRef.current.value;
    const inputPassword = passwordInputRef.current.value;

    dispatch(SignInHandler(inputEmail, inputPassword));
    convertToSignInHandler();
  };

  return (
    <Container>
      {isSignIn && <p>Sign in</p>}
      {!isSignIn && <p>Login</p>}
      <label htmlFor="id">id</label>
      <input type="text" name="id" id="id" ref={emailInputRef} />
      <label htmlFor="password">password</label>
      <input type="text" name="id" id="password" ref={passwordInputRef} />
      {isSignIn && (
        <Fragment>
          <button onClick={signInHandler}>submit</button>
          <button onClick={convertToSignInHandler}>return</button>
        </Fragment>
      )}
      {!isSignIn && (
        <Fragment>
          <button onClick={submitHandler}>login</button>
          <button onClick={convertToSignInHandler}>sign in</button>
        </Fragment>
      )}
    </Container>
  );
};
export default Login;

const Container = styled.div`
  margin: auto;
  width: 500px;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & p {
    font-size: 40px;
  }

  & button {
    width: 70px;
    height: 30px;
  }
`;
