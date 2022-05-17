import React, { useState,useContext, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import "./User_Details.css";
import Context from "./Context/Context";
import Navbar from "./Navbar";
import Navbar_modal from "./Navbar_modal";

const User_Details = () => {

  //using context for form displaying
  const visibility =useContext(Context);

  //Left Side information
  const information = ["IAM","Peope", "Organisation", "Roles", "Services"];


  //storing data from API
  const [college_data, setCollege_data] = useState([]);

  //fetching College Details From API
  const getData = async () => {
    const response = await fetch(
      "http://universities.hipolabs.com/search?name=middle"
    );
    const data = await response.json();
    setCollege_data(data);
  };

  useEffect(() => {
    getData();
  }, []);



  return (
    <div className="user_details">
      <Grid container spacing={2}>
        {visibility.openNavbar ? 
        //Showing Navbar
        <Grid item xs={3}><Navbar_modal></Navbar_modal></Grid>:

        //Showing Left Information
        <Grid item md={3}>
          <Box>
            <Card className="left_information">
              {information.map((info) => {
                return <div className="left_infromation_content">{info}</div>;
              })}
            </Card>
          </Box>
        </Grid>}
        <Grid item md={8}>
        <Button variant="contained" style={{marginBottom:"20px"}} onClick={visibility.open_form}>Add User</Button>
          {/* Table for showing Email, Modified and Action */}
          <Card>
            <Table>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>Modified</TableCell>
                <TableCell></TableCell>
              </TableRow>

              {/* Displaying College Data */}
              {college_data.map((data) => {
                return (
                  <TableRow>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>{data.web_pages[0]}</TableCell>
                    <TableCell>
                      <Button variant="outlined">Action</Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </Table>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default User_Details;
