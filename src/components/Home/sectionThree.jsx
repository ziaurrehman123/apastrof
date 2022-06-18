import React, { useState } from "react";
import { Typography, Grid, Box, makeStyles } from "@material-ui/core";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import sec3img from "../../assets/images/sec3img.png";
const useStyles = makeStyles((theme) => ({
  sec3img: {
    width: "70%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  contentBox: {
    marginTop: "100px",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
      textAlign: "center",
    },
  },
}));
export default function SectionThree() {
  const [selected, setSelected] = useState(false);
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F6F6F6",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <Box sx={{ width: "90%", margin: "auto" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  className={classes.sec3img}
                  alt="vector1"
                  src={sec3img}
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
                  Investment
                </Typography>
                <Typography
                  style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    color: "#19656B",
                  }}
                >
                  Find a Perfect Investment, that Fits your Needs!
                </Typography>
                <Typography style={{ fontSize: "20px", fontWeight: "400" }}>
                  Find out the the whole truth about each investment and
                  incentives about them, all in one place. No surprises,No
                  hidden costs, and no hassles for finding local advisory firms.
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
                  </Stack>
                </Box>
                <Box>
                  <Stack style={{ display: "block" }}>
                    <Chip
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "rgba(65, 179, 117, 0.37)",
                        color: "black",
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
