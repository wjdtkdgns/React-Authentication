import styled from "styled-components";
import { useRef } from "react";
import { LoginHandler } from "../../store/creators/auth-creator";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SubmitHandler = (event) => {
    event.preventDefault();

    const inputEmail = emailInputRef.current.value;
    const inputPassword = passwordInputRef.current.value;

    dispatch(LoginHandler(inputEmail, inputPassword, navigate));
  };

  return (
    <Container>
      <label htmlFor="id">id</label>
      <input type="text" name="id" id="id" ref={emailInputRef} />
      <label htmlFor="password">password</label>
      <input type="text" name="id" id="password" ref={passwordInputRef} />
      <button onClick={SubmitHandler}></button>
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

  & button {
    width: 50px;
    height: 30px;
  }
`;
