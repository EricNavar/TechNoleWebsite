import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import AboutUsCarousel from './AboutUsCarousel.js';

const useStyles = makeStyles((theme) => ({
  aboutUsArticle: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    textAlign: 'left'
  },
  aboutUsDescription: {
    width: 500,
    textAlign: "center",
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 20
  },
  divider: {
    backgroundColor: '#ffba35',
    width: 80,
    height: 5
  },
  titleContainer: {
    textAlign: 'center',
    marginTop:16
  }
}));

function AboutUs() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      component='section'
    >
      <Grid item xs={12} className={titleContainer}style={{textAlign: 'center', marginTop:16}}>
        <Typography component='h2' variant='h2' gutterBottom>What We Do</Typography>
        <div className={classes.divider}></div>
      </Grid>
      <Grid item xs={12} sm={6} component='article' className={classes.aboutUsArticle}>
        <Typography component='h3' variant='h5' className={classes.dream}>
          Ever dream of creating something awesome?
        </Typography>
        <Typography component='p' variant='body1' className={classes.aboutUsDescription}>
          TechNole is a user-friendly environment, that is responsive towards the advancement in the technology community. We seek to give every student at the Florida State University an opportunity to learn computer programming in a fun, informal, and innovative environment regardless of major or coding experience. We showcase services that increase productivity, enhance computing experiences, and the ability to network with current and prospective TechNole members.
          <br />
          <br />
          While partaking in a reliable, efficient, and friendly organization, we are "Conquering Technology Together".
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} style={{textAlign: 'center', display: 'contents'}}>
        <AboutUsCarousel/>
      </Grid>
    </Grid>
  );
}

export default AboutUs;
