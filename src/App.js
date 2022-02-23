import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./App.style.css";
import styled from "styled-components";
import UseRoutes from "./Pages/UserRoutes";
import { AuthContext } from "./Contexts/AuthContext";
import { PrivateRoute } from "./Pages/PrivateRoute";

const Navbar = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 50px;
  background-color: lightcoral;
`;
const PageFooter = styled.footer`
  width: 100%;
  padding: 30px 50px;
  color: #cad5e2;
  background-color: #03203c;
`;

const App = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return (
    <>
      <div className="App">
        <Navbar>
          <Link to="/">Home</Link>
          <Link to="dashboard">Dashboard</Link>
          <Link to="/dashboard/settings">Settings</Link>
          <Link to="login" onClick={() => (isAuth ? setIsAuth(false) : "")}>
            {isAuth ? "Logout" : "LogIn"}
          </Link>
        </Navbar>
        <PrivateRoute></PrivateRoute>
        <UseRoutes></UseRoutes>
        <PageFooter>Footer</PageFooter>
      </div>
    </>
  );
};

export default App;
