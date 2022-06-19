import React, { useState } from "react";
import { Typography, Grid, Box, Button, makeStyles } from "@material-ui/core";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import sec5img from "../../assets/images/sec5img.png";
const useStyles = makeStyles((theme) => ({
  sec5img: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
      width: "100%",
    },
  },
  contentBox: {
    marginTop: "100px",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      marginTop: "5px",
      textAlign: "center",
    },
  },
  buttonStyle: {
    color: "white",
    backgroundColor: "#41B375",
    textTransform: "capitalize",
    marginTop: "30px",
    "&:hover": {
      backgroundColor: "white",
      color: "#1CC9A5",
    },
  },
}));
export default function SectionFive() {
  const [selected, setSelected] = useState(false);
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F6F6F6",
          paddingTop: "70px",
        }}
      >
        <Box sx={{ width: "90%", margin: "auto" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box className={classes.contentBox}>
                <Typography
                  style={{
                    fontSize: "22px",
                    fontWeight: "600",
                    color: "#41B375",
                  }}
                >
                  Business Men
                </Typography>
                <Typography
                  style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    color: "#19656B",
                  }}
                >
                  Pursue Your Dream Of Growing Abroad
                </Typography>
                <Typography style={{ fontSize: "20px", fontWeight: "400" }}>
                  Discover opportunities around the world. Get matched and apply
                  to programs at educational institutions that meet your needs,
                  and start your study abroad journey!
                </Typography>
                <Box style={{ marginTop: "40px" }}>
                  <Stack style={{ display: "block" }}>
                    <Chip
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "rgba(65, 179, 117, 0.37)",
                        color: "black",
                        marginRight: "10px",
                        marginTop: "10px",
                      }}
                      onClick={() => setSelected((s) => !s)}
                      color={selected ? "default" : "primary"}
                      variant={selected ? "outlined" : "default"}
                      label="#Offshore_Bank_Account"
                    />
                    <Chip
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "rgba(65, 179, 117, 0.37)",
                        color: "black",
                        marginRight: "10px",
                        marginTop: "10px",
                      }}
                      onClick={() => setSelected1((s) => !s)}
                      color={selected1 ? "default" : "primary"}
                      variant={selected1 ? "outlined" : "default"}
                      label="#Company_Registration"
                    />
                    <Chip
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "rgba(65, 179, 117, 0.37)",
                        color: "black",
                        marginRight: "10px",
                        marginTop: "10px",
                      }}
                      onClick={() => setSelected2((s) => !s)}
                      color={selected2 ? "default" : "primary"}
                      variant={selected2 ? "outlined" : "default"}
                      label="#Shelf-Company"
                    />
                    <Chip
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "rgba(65, 179, 117, 0.37)",
                        color: "black",
                        marginRight: "10px",
                        marginTop: "10px",
                      }}
                      onClick={() => setSelected3((s) => !s)}
                      color={selected3 ? "default" : "primary"}
                      variant={selected3 ? "outlined" : "default"}
                      label="#Offshore_Trust"
                    />
                  </Stack>
                </Box>

                <Button variant="contained" className={classes.buttonStyle}>
                  See More
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  alt="vector1"
                  src={sec5img}
                  className={classes.sec5img}
                  style={{ width: "100%" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
