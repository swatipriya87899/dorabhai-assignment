import React, { useState, useContext } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { FormElement } from "./FormElement";
import CancelIcon from "@mui/icons-material/Cancel";
import Context from "./Context/Context";
import "./Add_User_Form.css";

const Add_User_Form = (props) => {
  const visibility = useContext(Context);

  //storing username, password and confirm password in state
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Saving the input in a variable
  const saveChange = (event, name) => {
    if (name === "userName") setUserName(event.target.value);
    else if (name === "password") setPassword(event.target.value);
    else if (name === "confirmPassword") setConfirmPassword(event.target.value);
  };

  const sendDataToBackEnd = () => {
    if (password != confirmPassword) alert("Password Does't Match");
    else if (userName === "" || password === "" || confirmPassword === "")
      alert("Please fill all the necessay details");
    // POST request using fetch()
    fetch("https://dorabhai.b4a.io/functions/signuserUp", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        username: userName,
        password: password,
      }),

      // Adding headers to the request
      headers: {
        "X-Parse-Application-Id": "prc2pizHClCiIBWeZ5S3Oatrrd7kjPS2yDYvSFxM",
        "X-Parse-REST-API-Key": "SmEM9law89wjyucc32Hvj7UcffcBq9VWKSPDlS7X",
        "Content-type": "application/json",
      },
    })
      // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console
      .then(() => {
        return alert("You have successfully logged in");
      });
  };

  return (
    <div className="add_user_form">
      <div style={{ float: "right" }}>
        <CancelIcon
          style={{ color: "black" }}
          onClick={visibility.close_form}
        ></CancelIcon>
      </div>
      <div>Add User</div>
      {FormElement.map((input) => {
        return (
          <div style={{ padding: "10px 30px" }}>
            <div className="input_name">{input.input_name}</div>
            <TextField
              {...input}
              className="form_input"
              onChange={(event) => saveChange(event, input.name)}
            ></TextField>
          </div>
        );
      })}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={sendDataToBackEnd}
      >
        submit
      </Button>
    </div>
  );
};

export default Add_User_Form;
