import React from "react";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Drone Survey Management System</h1>
      </header>
      <main>
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
