import React, { useState } from "react";
import { Typography, Grid, Box, makeStyles } from "@material-ui/core";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import sec6img from "../../assets/images/sec6img.png";
const useStyles = makeStyles((theme) => ({
  sec6img: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  contentBox: {
    marginTop: "100px",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginTop: "10px",
    },
  },
}));
export default function SectionSix() {
  const [selected, setSelected] = useState(false);
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          paddingTop: "70px",
        }}
      >
        <Box sx={{ width: "90%", margin: "auto" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  className={classes.sec6img}
                  alt="vector1"
                  src={sec6img}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box className={classes.contentBox}>
                <Typography
                  style={{
                    fontSize: "22px",
                    fontWeight: "600",
                    color: "#41B375",
                  }}
                >
                  Investment Seekers
                </Typography>
                <Typography
                  style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    color: "#19656B",
                  }}
                >
                  Showcase Your Projects, to International Investors
                </Typography>
                <Typography style={{ fontSize: "20px", fontWeight: "400" }}>
                  The Apastrof Platform allows you to make added value for your
                  businesses and by putting your project in a network of
                  interconnected services offered to global investors.
                </Typography>

                <Box sx={{ marginTop: "40px", marginBottom: "10px" }}>
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
                      label="#Business_For_Sale"
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
                      label="#Investment_Opportunity  "
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
                      label="#Residency_By_Investment"
                    />
                  </Stack>
                </Box>
               
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
