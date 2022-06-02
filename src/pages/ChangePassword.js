import styled from "styled-components";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangePasswordHandler } from "../store/creators/auth-creator";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const passwordInputRef = useRef();
  const dispatch = useDispatch();
  const idToken = useSelector((state) => state.auth.idToken);
  const navigate = useNavigate();

  const SubmitHandler = () => {
    const newPassword = passwordInputRef.current.value;
    dispatch(
      ChangePasswordHandler({ newPassword: newPassword, idToken: idToken })
    );
    navigate(-1, { replace: true });
  };
  return (
    <Container>
      <label htmlFor="password">new</label>
      <input type="password" id="password" ref={passwordInputRef} />
      <button onClick={SubmitHandler} />
    </Container>
  );
};
export default ChangePassword;

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
