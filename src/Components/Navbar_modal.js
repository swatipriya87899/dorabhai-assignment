import React, { useContext } from "react";
import Modal from "@mui/material/Modal";
import Context from "./Context/Context";
import Navbar from "./Navbar";

const Navbar_modal = () => {

//For Showing Navbar Pop UP
  const visibility = useContext(Context);
  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={visibility.openNavbar}
        onClose={visibility.close_navbar}
>
        <Navbar></Navbar>
      </Modal>
    </div>
  );
};

export default Navbar_modal;
