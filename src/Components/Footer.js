import React from "react";
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import GroupMe from "../assets/icons/GroupMe.svg";
import Facebook from "../assets/icons/Facebook.svg";
import Github from "../assets/icons/Github.svg";
import Zoom from "../assets/icons/Zoom.svg";

const social_links = [
  {
    name: "GroupMe",
    logo: GroupMe,
    href: "https://groupme.com/join_group/53218856/ADySgGBx",
  },
  {
    name: "Facebook",
    logo: Facebook,
    href: "https://www.facebook.com/TechNole/",
  },
  {
    name: "GitHub",
    logo: Github,
    href: "https://github.com/tripplerizz/",
  },
  {
    name: "Zoom Room",
    logo: Zoom,
    href: "https://zoom.us/j/3407433606",
  },
];

const useStyles = makeStyles({
  FooterContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#212529",
    position: 'relative'
  },
  FooterSocialContainer: {
    padding: "8px 30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  FooterSocialLogo: {
    height: 50,
    width: "auto"
  },
  FooterSocialDescription: {
    margin: 0,
    color: "white",
    width: "max-content"
  },
  snake: {
    position: "absolute",
    bottom: 8,
    right: 8
  }
});

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.FooterContainer}>
      <Grid container style={{maxWidth:450}}>
        {social_links.map((elem, index) => (
          <ButtonBase
            className={classes.FooterSocialContainer}
            key={`${elem.name}-${index}-footer-container`}
            href={elem.href}
            target="_blank"
            rel="noopener noreferrer"
            component={Grid}
            item
            xs={6}
            sm={3}
          >
            <img
              src={elem.logo}
              alt={elem.name + "logo"}
              className={classes.FooterSocialLogo}
            />
            <Typography component ='h3' className={classes.FooterSocialDescription}>
              {elem.name}
            </Typography>
          </ButtonBase>
        ))}
      </Grid>
      <span aria-label="snake-emoji" component="span" role="img" className={classes.snake}>
        🐍
      </span>
    </footer>
  );
}

export default Footer;
