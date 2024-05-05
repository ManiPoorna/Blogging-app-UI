/* eslint-disable no-unused-vars */
import"./header.css"
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
// import CircularProgress from "@mui/material/CircularProgress";

const Header = () => {
  async function logoutUser() {
    const response = axios.post("http://localhost:8000/auth/logout")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => { 
        console.log(err);
      })
  }
  return (
    <>
      <Box className="header" sx={{ flexGrow: 1 }}>
        <AppBar className="Box" position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Blogger.com
            </Typography>
            <Avatar sx={{ bgcolor: "#386152db" }} alt="Remy Sharp">
              MP
            </Avatar>
            <Button onClick={()=>logoutUser()} color="inherit">Logout</Button>
            {/* <CircularProgress /> */}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
