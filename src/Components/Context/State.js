import React, { useState } from "react";
import Context from "./Context";

const State = (props) => {

//   const [openAutomationBootcamp, setOpeAutomationBootcamp] = useState(false);

const [openForm, setOpenForm] = useState(false)
const [openNavbar,setOpenNavbar] = useState(false);



const open_navbar = () => setOpenNavbar(true);
const close_navbar = () => setOpenNavbar(false);

const open_form= () => setOpenForm(true);
const close_form = () => setOpenForm(false);


  return (
    <div>
      <Context.Provider
        value={{open_form, close_form, openForm,open_navbar, close_navbar,openNavbar}}
      >
        {props.children}
      </Context.Provider>
    </div>
  );
};

export default State;
