import React from "react";
import State from "./Components/Context/State";
import Users from "./Pages/Users";

const App = () => {
  return (
    //Using Context API for data flow
    <State>
      <div>
        <Users></Users>
      </div>
    </State>
  );
};

export default App;
