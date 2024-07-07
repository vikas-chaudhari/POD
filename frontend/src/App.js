import React from "react";
import Signup from "./pages/Signup";
import Appbar from "./components/Appbar";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <Appbar />
      <h1>signup</h1>
      <Signup />
    </div>
  );
};

export default App;
