import React from "react";
import {
  Typography,
  Grid,
  Box,
  makeStyles,
  Link,
} from "@material-ui/core";
import Logo from "../assets/images/footerlogo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import imageFile from "../assets/images/sec1bg.png";

const useStyles = makeStyles((theme) => ({}));
export default function Footer() {
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
            paddingTop: "40px",
            paddingBottom: "60px",
            width: "90%",
            margin: "auto",
          }}
          className={classes.mainSection}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
              <Typography
                style={{ fontSize: "19px", color: "white", paddingTop: "10px" }}
              >
                Apastrof connects international Businessmen to Advisors and
                Growth opportunities around the world.
              </Typography>
              <Box
                        sx={{
                          paddingTop: "20px",
                          display: "flex",
                        }}
                      >
                        <Box
                          sx={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "white",
                            borderRadius: "50px",
                          }}
                        >
                          <FacebookIcon
                            sx={{
                              marginTop: "6px",
                              marginLeft: "6px",
                              fontSize: "18px",
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "white",
                            borderRadius: "50px",
                            marginLeft: "10px",
                          }}
                        >
                          <WhatsAppIcon
                            sx={{
                              marginTop: "6px",
                              marginLeft: "6px",
                              fontSize: "18px",
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "white",
                            borderRadius: "50px",
                            marginLeft: "10px",
                          }}
                        >
                          <TwitterIcon
                            sx={{
                              marginTop: "6px",
                              marginLeft: "6px",
                              fontSize: "18px",
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "white",
                            borderRadius: "50px",
                            marginLeft: "10px",
                          }}
                        >
                          <InstagramIcon
                            sx={{
                              marginTop: "6px",
                              marginLeft: "6px",
                              fontSize: "18px",
                            }}
                          />
                        </Box>
                      </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
              <Typography
                style={{ fontSize: "18px", fontWeight: "600", color: "white" }}
              >
                Learn More
              </Typography>
              <Box sx={{ marginTop: "20px" }}>
                <Link href="#" style={{ color: "white" }}>
                  Customer Stories
                </Link>
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                <Link href="#" style={{ color: "white" }}>
                  Press
                </Link>
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                <Link href="#" style={{ color: "white" }}>
                  Careers
                </Link>
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                <Link href="#" style={{ color: "white" }}>
                  Investment Cases
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
              <Typography
                style={{ fontSize: "18px", fontWeight: "600", color: "white" }}
              >
                Learn More
              </Typography>
              <Box sx={{ marginTop: "20px" }}>
                <Link href="#" style={{ color: "white" }}>
                  About Us
                </Link>
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                <Link href="#" style={{ color: "white" }}>
                  How it works
                </Link>
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                <Link href="#" style={{ color: "white" }}>
                  Blog
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
              <Typography
                style={{ fontSize: "18px", fontWeight: "600", color: "white" }}
              >
                Learn More
              </Typography>
              <Box sx={{ marginTop: "20px" }}>
                <Link href="#" style={{ color: "white" }}>
                  Contact Us
                </Link>
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                <Link href="#" style={{ color: "white" }}>
                  Terms and Condtion
                </Link>
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                <Link href="#" style={{ color: "white" }}>
                  Privacy Policy
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
