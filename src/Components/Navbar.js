import React, { useContext } from 'react';
import "./Navbar.css";
import CancelIcon from '@mui/icons-material/Cancel';
import Context from './Context/Context';
import Card from '@mui/material/Card';

const Navbar = (props) => {

  const visibility = useContext(Context);

    //Navlinks
    const nav_links = ["Home", "Tog", "Flow Creater", "Call Stitching", "Iam", "Campaign Manager", "Generic Cti Portal, Builder", "Console-dashboard"];



  return (
    
    <div className='navbar'>
       <Card className='navbar_card'>
       <div style={{float:"right"}}>
          <CancelIcon style={{color: "black"}} onClick={visibility.close_navbar}></CancelIcon>
      </div>
           {
               nav_links.map((links)=>{
                   return <div className='nav_links' key={links}>{links}</div>
               })
           }
       </Card>
    </div>
  )
}

export default Navbar