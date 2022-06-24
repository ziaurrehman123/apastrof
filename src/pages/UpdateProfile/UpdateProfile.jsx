import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  makeStyles,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

import { useNavigate } from "react-router-dom";
// Images
import Logo from "../../assets/images/logo.svg";
import AddImg from "../../assets/images/addImage.svg";
const useStyles = makeStyles((theme) => ({
  updateProfileHeading: {
    color: "#151515",
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: "35px",
  },
  updateProfileSubHeading: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "22px",
  },
  updateProfileButton: {
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
  addImgButton: {
    background: "#41B375",
    borderRadius: "50%",
    margin: "20px 0",
    padding: "15px",
    "&:hover": {
      background: "#41B375",
      opacity: ".6",
      transition: ".4s",
    },
  },

  select: {
    padding: "0 10px",
    backgroundColor: "#F3F3F3",
  },
}));

export default function UpdateProfile() {
  const navigate = useNavigate();

  const classes = useStyles();
  return (
    <>
      <div style={{ padding: "10px 20px" }}>
        <Box sx={{ pt: 10 }}>
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
              <Box textAlign={"center"} marginTop={"30px"}>
                <Typography className={classes.updateProfileSubHeading}>
                  Please Add Details to continue
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <Button className={classes.addImgButton} tex>
                  <Box component={"img"} src={AddImg}></Box>
                </Button>
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item md={6} xs={12} sm={8}>
                    <Box>
                      <TextField
                        style={{
                          marginTop: "10px",
                          backgroundColor: "#F3F3F3",
                        }}
                        fullWidth={true}
                        id="outlined-basic"
                        label="Full Name"
                        variant="outlined"
                      />
                      <TextField
                        style={{
                          marginTop: "15px",
                          backgroundColor: "#F3F3F3",
                        }}
                        fullWidth={true}
                        id="outlined-basic"
                        label="Phone No."
                        variant="outlined"
                      />
                      <TextField
                        style={{
                          marginTop: "15px",
                          backgroundColor: "#F3F3F3",
                        }}
                        fullWidth={true}
                        id="outlined-basic"
                        label="Email Address"
                        variant="outlined"
                      />
                      <TextField
                        style={{
                          marginTop: "15px",
                          backgroundColor: "#F3F3F3",
                        }}
                        fullWidth={true}
                        id="outlined-basic"
                        label="Address"
                        variant="outlined"
                      />
                    </Box>
                    <Box
                      component={"div"}
                      display="flex"
                      gridGap={"10px"}
                      margin={"20px 0"}
                      marginBottom="20px"
                    >
                      <FormControl fullWidth>
                        <InputLabel
                          id="demo-simple-select-label"
                          style={{ paddingLeft: "20px" }}
                        >
                          Country
                        </InputLabel>
                        <Select
                          variant="outlined"
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Country"
                        >
                          <MenuItem value="">
                            <em>none</em>
                          </MenuItem>
                          <MenuItem value={10}>Pakistan</MenuItem>
                          <MenuItem value={20}>India</MenuItem>
                          <MenuItem value={30}>USA</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl fullWidth>
                        <InputLabel
                          id="demo-simple-select-label"
                          style={{ paddingLeft: "20px" }}
                        >
                          City
                        </InputLabel>
                        <Select
                          variant="outlined"
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="City"
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          <MenuItem value="">
                            <em>none</em>
                          </MenuItem>
                          <MenuItem value={10}>Lahore</MenuItem>
                          <MenuItem value={20}>Delhi</MenuItem>
                          <MenuItem value={30}>Los Angeles</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    <Box>
                      <Button fullWidth className={classes.updateProfileButton}>
                        Continue
                      </Button>
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
