import React from "react";
import {
  Typography,
  Grid,
  Box,
  makeStyles,
  Button,
  Link,
} from "@material-ui/core";
import sec1Right from "../../assets/images/sec1right.png";
import imageFile from "../../assets/images/sec1bg.png";
import vector1 from "../../assets/images/vector1.png";
import vector2 from "../../assets/images/vector2.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const useStyles = makeStyles((theme) => ({
  firstSectionHeading: {
    color: "white",
    marginTop: "20px",
  },
  firstSectionSubHeading: {
    color: "white",
  },
  firstSectionContent: {
    color: "white",
    marginTop: "20px",
  },
  vector1Img:{
    
    [theme.breakpoints.down("sm")]: {
      marginTop: "150px",
      width:200,
    },
  }
}));
export default function SectionOne() {
  const classes = useStyles();
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imageFile})`,
          width: "100%",
          height: "auto",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            paddingTop: "160px",
            paddingBottom: "60px",
            width: "90%",
            margin: "auto",
          }}
          className={classes.mainSection}
        >
          <Grid container>
            <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
              <Box className={classes.Section1Left}>
                <Typography
                  variant="h3"
                  className={classes.firstSectionHeading}
                >
                  Make Investment To Get
                </Typography>
                <Typography
                  variant="h5"
                  className={classes.firstSectionSubHeading}
                >
                  government subsidies
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.firstSectionContent}
                >
                  Apastrof connects international Businessmen to Advisors and
                  Growth opportunities around the world.
                </Typography>
                <Box sx={{ marginTop: "30px", marginBottom: "30px" }}>
                  <Button
                    variant="contained"
                    style={{
                      color: "white",
                      backgroundColor: "#41B375",
                      textTransform: "capitalize",
                    }}
                  >
                    Find Your Investment
                  </Button>
                  <Link
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      marginLeft: "20px",
                    }}
                  >
                    Find Services
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
              <Box className={classes.rightSection}>
                <Box
                  component="img"
                  sx={{
                    zIndex: 1,
                    marginLeft: "20px",
                  }}
                  className={classes.vector1Img}
                  alt="vector1"
                  src={vector1}
                />
                <Box
                  className={classes.Section1Right}
                  sx={{ display: "flex", justifyContent: "right" }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: "auto",
                      width: "90%",
                      marginTop: "-197px",
                    }}
                    alt="Your logo."
                    src={sec1Right}
                  />

                  <MoreVertIcon
                    sx={{
                      fontSize: "35px",
                      position: "relative",
                      top: "10px",
                      color: "white",
                    }}
                  />
                </Box>

                <Box
                  component="img"
                  sx={{
                    marginTop: "-256px",
                    marginLeft: "20px",
                  }}
                  alt="vector2"
                  src={vector2}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
