import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Typography,
  Drawer,
  Link,
  MenuItem,
  Box,
} from "@material-ui/core";
import Logo from "../assets/images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

const headersData = [
  {
    label: "Browse",
    href: "/browse",
  },
  {
    label: "How  it works",
    href: "/how-it-works",
  },
  {
    label: "Insights",
    href: "/insights",
  },
];

const useStyles = makeStyles(() => ({
  buttonStyle: {
    border: "1px solid #41B375",
    color: "#41B375",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#41B375",
      color: "#ffffff",
    },
  },
  header: {
    backgroundColor: "white",
    boxShadow: "none",
    paddingTop: "15px",
    paddingBottom: "15px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Poppins",
    fontSize: "20px",
    fontWeight: "400",
    marginLeft: "80px",
    textDecoration: "none",
    textTransform: "capitalize",
    color: "#383838",
  },
  toolbar: {
    display: "flex",
    width: "90%",
    margin: "auto",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export default function Header() {
  const { header, menuButton, toolbar, drawerContainer, buttonStyle } =
    useStyles();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1200
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <>
        <Toolbar className={toolbar}>
          {femmecubatorLogo}

          <Box sx={{ display: "flex", marginLeft: "auto" }}>
            <div style={{ marginRight: "200px", marginTop: "5px" }}>
              {getMenuButtons()}
            </div>
            <div style={{ display: "flex" }}>
              <Box>
                <RouterLink to={"/login"} style={{ textDecoration: "none" }}>
                  <Link
                    href="#"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "20px",
                      fontWeight: "400",
                      position: "relative",
                      top: "3px",
                      color: "#41B375",
                      textDecoration: "none",
                      marginRight: "20px",
                    }}
                  >
                    Login
                  </Link>
                </RouterLink>

                <RouterLink to={"/signup"} style={{ textDecoration: "none" }}>
                  <Button
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                    variant="outlined"
                    className={buttonStyle}
                  >
                    Create Account
                  </Button>
                </RouterLink>
              </Box>
            </div>
          </Box>
        </Toolbar>
      </>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "black",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
        <div style={{ display: "flex", marginLeft: "auto" }}>
          <Box sx={{ textAlign: "center", marginTop: "-14px" }}>
            <Link
              href=""
              style={{
                position: "relative",
                top: "3px",
                fontSize: "20px",
                color: "#41B375",
                textDecoration: "none",
                marginRight: "20px",
              }}
            >
              Login
            </Link>

            <Button
              variant="outlined"
              style={{ marginTop: "7px" }}
              className={buttonStyle}
            >
              Create Account
            </Button>
          </Box>
        </div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const femmecubatorLogo = (
    <Link href="/">
      <Box
        component="img"
        sx={{
          height: 40,
          width: 140,
        }}
        alt="Your logo."
        src={Logo}
      />
    </Link>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Typography
          {...{
            key: label,
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Typography>
      );
    });
  };

  return (
    <>
      <header>
        <AppBar className={header}>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </header>
    </>
  );
}
