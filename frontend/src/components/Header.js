import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Header = () => {
  const [value, setValue] = useState();

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <a href="/" style={{ color: "white", textDecoration: "none" }}>
        <Typography>
          <img
            src="https://www.gorilla-technology.com/img/logo/Gorilla-logo-style1.svg?v=202212161740"
            alt="Logo"
            style={{ height: "50px", marginTop :"10px", marginLeft: "15px" }}
          />
        </Typography>
      </a>
    </div>
  );
};

export default Header;
