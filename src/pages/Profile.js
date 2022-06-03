import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { authActions } from "../store/slice/auth-slice";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LogoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/", { replace: true });
  };

  return (
    <Fragment>
      <Container onClick={LogoutHandler}>logout</Container>
      <Link to="changepassword">
        <Container>changePassword</Container>;
      </Link>
    </Fragment>
  );
};
export default Profile;

const Container = styled.div`
  margin: auto;
  width: 200px;
  height: 200px;
  background-color: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
