import React, { useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Context from "./Context/Context";
import Navbar from "./Navbar";

const Header = () => {

  //Using Context API
  const visibility = useContext(Context)

  return (

    //Showing Hamburgur and Company Name
    <div>
      <Grid>
        <AppBar position="fixed">
          <Toolbar>
            <MenuIcon onClick={visibility.open_navbar}></MenuIcon>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              className="console"
            >
              Console
            </Typography>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
};

export default Header;
