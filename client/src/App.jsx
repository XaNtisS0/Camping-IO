import React from "react";
import Routes from "./components/Route/Routes";
import Wrapper from "./components/shared/Wrapper";
import { AuthProvider } from "./components/auth/context/AuthContext";

function App() {
  return (
    <>
      <Wrapper>
        <Routes />
      </Wrapper>
    </>
  );
}

export default App;
