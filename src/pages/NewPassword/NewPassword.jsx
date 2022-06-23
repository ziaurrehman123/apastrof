import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  makeStyles,
  TextField,
  Button,
} from "@material-ui/core";

// Images
import Logo from "../../assets/images/logo.svg";
const useStyles = makeStyles((theme) => ({
  newPasswordHeading: {
    color: "#151515",
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: "35px",
  },
  newPasswordSubHeading: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
  },

  forgetPassword: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: "18px",
    color: "#808080",
    textDecoration: "none",
  },
  newPasswordButton: {
    background: "#19656B",
    borderRadius: "5px",
    fontStyle: "normal",
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: "24px",
    color: "white",
    textTransform: "capitalize",
    margin: "15px 0",
    "&:hover": {
      background: "#19656B",
      opacity: ".6",
      transition: ".4s",
    },
  },
}));

export default function NewPassword() {
  const classes = useStyles();
  return (
    <>
      <div>
        <Box sx={{ py: 10 }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Link to={"/"}>
                <Box component="img" sx={{}} alt="Logo." src={Logo} />
              </Link>
            </Grid>
            <Grid item>
              <Box marginTop={"30px"} textAlign={"center"}>
                <Typography
                  fontSize={"35px"}
                  className={classes.newPasswordHeading}
                >
                  New Password
                </Typography>
                <Typography className={classes.newPasswordSubHeading}>
                  Please enter password to setup a new one.
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box py={4}>
                <Grid container direction="column">
                  <Grid item>
                    <Box component={"form"} sx={{ mt: 1 }}>
                      <TextField
                        style={{ margin: "5px 0", backgroundColor: "#F3F3F3" }}
                        fullWidth
                        id="outlined-basic"
                        label="New Password"
                        variant="outlined"
                      />
                      <TextField
                        style={{ margin: "5px 0", backgroundColor: "#F3F3F3" }}
                        fullWidth
                        id="outlined-basic"
                        label="Confirm New Password"
                        variant="outlined"
                      />
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box component={"div"} marginTop={"20px"}>
                      <Grid container direction="column">
                        <Grid item>
                          <Box component={"form"} sx={{ mt: 1 }}>
                            <Button
                              fullWidth
                              className={classes.newPasswordButton}
                              size="medium"
                            >
                              Change Password
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
