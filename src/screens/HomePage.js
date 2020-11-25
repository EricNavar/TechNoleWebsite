import React, { useEffect } from "react";
import AboutUs from "../Components/AboutUsSection/AboutUs.js";
import HomeBanner from "../Components/HomeBanner.js";
import OfficersBanner from "../Components/OfficersBannerSection/OfficersBanner.js";
import ContactBanner from "../Components/Contact/ContactBanner.js";
import module_styles from "./HomePage.module.css";

export default function HomePage() {
  useEffect(() => {
    document.title = "Technole";
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <main className={module_styles["Home-page"]}>
      <HomeBanner />
      <AboutUs />
      <OfficersBanner />
      <ContactBanner/>
    </main>
  );
}
