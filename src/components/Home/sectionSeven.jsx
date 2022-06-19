import React, { useState } from "react";
import { Typography, Grid, Box, Button, makeStyles } from "@material-ui/core";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import sec7img from "../../assets/images/sec7img.png";
const useStyles = makeStyles((theme) => ({
  sec3img: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  contentBox: {
    textAlign: "left",
    marginTop: "100px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginTop: "10px",
    },
  },
}));
export default function SectionSeven() {
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
                  Service Provider
                </Typography>
                <Typography
                  style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    color: "#19656B",
                  }}
                >
                  Leverage World-Class Consultants
                </Typography>
                <Typography style={{ fontSize: "20px", fontWeight: "400" }}>
                  We are the largest, globally-distributed network of top
                  business, Investment, and business migration consultants ready
                  to tackle your most important initiatives.
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
               
                <Button
                  variant="contained"
                  style={{
                    color: "white",
                    backgroundColor: "#41B375",
                    textTransform: "capitalize",
                    marginTop: "30px",
                  }}
                >
                  See More
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  alt="vector1"
                  src={sec7img}
                  className={classes.sec3img}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
