import React from "react";
import { UserProvider } from "./shared/UserContext";
import "./App.css";
import "./styles/theme.css";
import AppRoutes from "./routes/AppRoutes";
function App() {
  return (
    <>
      <UserProvider>
        {" "}
        <AppRoutes />
      </UserProvider>
    </>
  );
}

export default App;
