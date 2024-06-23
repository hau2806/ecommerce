import * as React from "react";
import { Fragment } from "react";

import MenuItem from "@mui/material/MenuItem";
// import Logo from "../../assets/image/"
import logo from "../../assets/image/LOOP-logo (2).png"

import Logo from "../../assets/image/LOOP-logo (2).png";

import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  // console.log(renderUser);
  const renderAccount = () => {
    const storedValueAcc = window.sessionStorage.getItem("username");
    const storedValueGG = window.sessionStorage.getItem("usernameGG");

    if (storedValueAcc) {
      return `Hi, ${storedValueAcc}`;
    } else if (storedValueGG) {
      return `Hi, ${storedValueGG}`;
    }
  };
  const handleLogOut = () => {
    const isConfirm = confirm("Do you want to log out?");
    if (isConfirm) {
      window.sessionStorage.clear();
      window.location.reload();
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Fragment>
      {/* nav */}
      <div className="bg-light">
        <div
          className="d-flex justify-content-between align-items-center mx-auto py-1 "
          style={{ width: "90%" }}
        >
          <div className="Logo">
            <img style={{ height: "50px" }} src={Logo} alt="" />
          </div>
          {/* icon k xóa */}
          {/* <div className="icon-wrapper d-flex flex-row justify-content-between border p-1 rounded bg-light">
            <div className="item mx-1">
              <i className="fab fa-facebook-f"></i>
            </div>
            <div className="item mx-1">
              <i className="fab fa-twitter"></i>
            </div>
            <div className="item mx-1">
              <i className="fas fa-wifi"></i>
            </div>
            <div className="item mx-1">
              <i className="fab fa-youtube"></i>
            </div>
            <div className="item mx-1">
              <i className="fab fa-google-plus-g"></i>
            </div>
            <div className="item mx-1">
              <i className="fab fa-pinterest-p"></i>
            </div>
            <div className="item mx-1">
              <i className="fab fa-vimeo-v"></i>
            </div>
            <div className="item mx-1">
              <i className="fab fa-instagram"></i>
            </div>
          </div> */}
          <div className="search-wrapper ">
            <div className="input-group  ">
              <input
                type="text"
                className="form-control  "
                placeholder="Search Products..."
                aria-label="Search Products..."
                aria-describedby="button-addon"
                style={{ width: "500px" }}
              />
              <div className="input-group-append">
                <button
                  className="btn-header px-3"
                  type="button"
                  id="button-addon"
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose}>
                <Avatar />
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogin}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Log in
              </MenuItem>
              <MenuItem onClick={handleLogOut}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Log out
              </MenuItem>
            </Menu>
            {renderAccount()}
          </div>
        </div>
      </div>
      {/*  */}
      <div className="nav-bar mx-auto flex justify-between items-center px-2 py-3 w-full xl:w-[1280px]">
        <div className="Logo">
          <img style={{ height: "100px" }} src={logo} alt="" />
        </div>
        <div className="Logo d-flex flex-row ">
          <div className="d-flex flex-row pr-5 border align-items-center ">
            <img
              className="mr-2 pr-2 border"
              // style={{ height: "70px" }}
              style={{
                objectFit: "contain",
                objectPosition: "center",
                height: "70px",
              }}
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTLM9ocMWlwnfx_ZNNxNJY0NzIRzBqml4Kshm0S3yguu7FmP38M"
              alt=""
            />
            <div>
              <h6>GRAB OFFER!!!</h6>
              <p>headphones available in 30% off</p>
            </div>
          </div>
          <div className="d-flex flex-row pr-5 border align-items-center ml-5 ">
            <img
              className="mr-2 pr-2 border"
              // style={{ height: "70px" }}
              style={{
                objectFit: "contain",
                objectPosition: "center",
                height: "70px",
              }}
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTLM9ocMWlwnfx_ZNNxNJY0NzIRzBqml4Kshm0S3yguu7FmP38M"
              alt=""
            />
            <div>
              <h6>GRAB OFFER!!!</h6>
              <p>headphones available in 30% off</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
