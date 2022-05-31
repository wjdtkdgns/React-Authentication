import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <input type="text" name="id" id="id" />
    </Container>
  );
};
export default Login;

const Container = styled.div`
  margin: auto;
  width: 500px;
  height: 500px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
