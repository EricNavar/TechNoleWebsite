import React from "react";
import Grid from '@material-ui/core/Grid';
import ContactCard from "./ContactCard";
import Hector1 from "../../assets/people/hector1.jpg";
import Hector2 from "../../assets/people/hector2.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  contactBanner: {
    width:"100%",
    textAlign: 'center',
    marginBottom: 20,
    maxWidth: "100vw"
  },
  ContactBannerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: 'center',
    maxWidth: 1000,
    margin: 'auto'
  },
  divider: {
    backgroundColor: '#ffba35',
    width: 80,
    height: 5,
    marginBottom: 10
  },
}));

function ContactBanner() {
  const classes = useStyles();
  return (
    <section className={classes.contactBanner}>
      <Typography component='h2' variant='h2'>Contact</Typography>
      <center>
        <div className={classes.divider}></div>
      </center>
      <Grid
        id='contact-card-grid-container'
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.ContactBannerContainer}
      >
        <ContactCard id='secretary-contact-card'
          description="Email our secretary"
          name="Hector Rizo"
          email="hector@fsu.edu"
          imgSrc={Hector1}
        />
        <ContactCard id='president-contact-card'
          description="Email the president directly"
          name="Hector Rizo"
          email="hector@fsu.edu"
          imgSrc={Hector2}
        />
      </Grid>
    </section>
  );
}

export default ContactBanner;
