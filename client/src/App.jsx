import React from "react";
import Routes from "./components/Route/Routes";
import Wrapper from "./components/shared/Wrapper";
import { AuthProvider } from "./components/auth/context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Wrapper>
          <Routes />
        </Wrapper>
      </AuthProvider>
    </>
  );
}

export default App;
