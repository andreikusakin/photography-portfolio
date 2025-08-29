import React from "react";
import styles from "./page.module.css";
import HeroImage from "./../../../public/weddings/erin-kyle/000067.jpg";
import IntimateImage from "./../../../public/weddings/alyssa-jonathan/000066.jpg";
import FullDayImage from "./../../../public/weddings/alex-adam/000045.jpg";
import EngagementPhoto from "./../../../public/couples/alina-brandon/000017.jpg";
import type { Metadata } from "next";
import SmallHero from "../components/SmallHero/SmallHero";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import Faq from "../components/Faq/Faq";

export const metadata: Metadata = {
  title: "Pricing | Boston Wedding Photographer",
  alternates: {
    canonical: "/pricing",
  },
};

export default function page() {
  return (
    <div>
      <SmallHero
        title="Pricing"
        subtitle="Boston Wedding Photographer"
        image={HeroImage}
      />
      <div className={styles.container}>
        <section className={styles.intro}>
          <div className={styles.intro_text}>
            <h2>Simple, Honest Pricing</h2>
            <p>
              My goal is to keep things simple and transparent. No hidden fees,
              no confusing packages. Here's a clear breakdown of my offerings so
              you can find what's right for your wedding day. I believe in
              straightforward pricing because the focus should be on your
              celebration, not on complicated contracts.
            </p>
          </div>
        </section>
        <section className={styles.packages}>
          <div className={styles.package}>
            <div className={styles.grid}>
              <ParallaxImage
                src={FullDayImage}
                width="35em"
                height="50em"
                alt="Full Day Wedding"
              />

              <div className={styles.description}>
                <h5>The Complete Story</h5>
                <h2>Full-Day Wedding</h2>
                <div>
                  Perfect for larger weddings (30+ guests) where you want the
                  full narrative of your day captured without having to watch
                  the clock. This is my signature offering, designed to document
                  every chapter of your celebration, from the quiet moments of
                  getting ready to the wild energy of the last dance.
                </div>
                <ul>
                  <li>
                    <strong>Full-Day Coverage:</strong> Ideal for celebrations
                    lasting 6 hours or more. I'm with you for the entire
                    journey. No timelines built around photography, no stress
                    about running out of time. Just pure celebration.
                  </li>
                  <li>
                    <strong>Second Photographer:</strong> A second storyteller
                    to capture more angles, more candid moments, and a richer,
                    more complete view of your day.
                  </li>
                  <li>
                    <strong>Engagement Session:</strong> Our chance to connect,
                    have fun, and get you both comfortable in front of the
                    camera before the big day. It makes a world of difference!
                  </li>
                  <li>
                    <strong>Online Gallery:</strong> A beautiful,
                    high-resolution online gallery of your edited images, ready
                    to be downloaded, shared, and printed.
                  </li>
                </ul>
                <h4>$4000</h4>
              </div>
            </div>
          </div>
          <div
            className={styles.package}
            style={{
              background: "rgb(238, 229, 217)",
            }}
          >
            <div className={styles.grid}>
              <div className={styles.description}>
                <h5>Intimate</h5>
                <h2>Weddings & Elopements</h2>
                <div>
                  Perfect for city hall ceremonies, adventurous elopements, or
                  smaller celebrations with your closest loved ones (up to 30 guests). This
                  package is designed to capture the heart of your intimate day
                  with the same candid, documentary style.
                </div>
                <ul>
                  <li>
                    <strong>Up to 4 Hours of Coverage:</strong> Ideal for
                    capturing your ceremony, portraits, and the key moments of
                    your celebration.
                  </li>
                  <li>
                    <strong>One Photographer (Me!):</strong> I'll be there
                    personally to document your story.
                  </li>
                  <li>
                    <strong>Online Gallery:</strong> Your beautiful,
                    high-resolution online gallery of edited images.
                  </li>
                </ul>
                <h4>$1600</h4>
              </div>
              <ParallaxImage
                src={IntimateImage}
                width="35em"
                height="50em"
                alt="Full Day Wedding"
              />
            </div>
          </div>
          <div
            className={styles.package}
            // style={{
            //   background: "rgb(238, 229, 217)"
            // }}
          >
            <div className={styles.grid}>
              {" "}
              <ParallaxImage
                src={EngagementPhoto}
                width="35em"
                height="50em"
                alt="Full Day Wedding"
              />
              <div className={styles.description}>
                <h5></h5>
                <h2>Engagement & Couple Sessions</h2>
                <div>
                  Let’s celebrate your connection! Whether it’s for your
                  engagement, an anniversary, or just because, these sessions
                  are relaxed, fun, and focused on capturing you as you truly
                  are. We’ll find a beautiful spot, put on some music, and
                  create authentic portraits that feel like you.
                </div>
                <div>
                  (Note: Remember, an engagement session is already included in
                  The Complete Story package!)
                </div>

                <h4>Starting at $400</h4>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.details_wrapper}>
          <div className={styles.details}>
            <h3>Travel & Other Details</h3>
            <ul>
              <li>
                <strong>New England Travel:</strong> Planning your wedding
                anywhere in Massachusetts, Rhode Island, Connecticut, Maine, New
                Hampshire, or Vermont? Amazing! There are absolutely no travel
                fees for any wedding within New England.
              </li>
              <li>
                <strong>Beyond New England:</strong> I love to travel! For
                weddings outside of New England, I provide a simple,
                all-inclusive custom travel quote so there are no surprises.
              </li>
              <li>
                <strong>Fine Art Albums:</strong> Your photos deserve to be
                held. I offer beautiful, custom-designed fine art albums that
                turn your digital gallery into a timeless family heirloom.
                Please inquire for album pricing.
              </li>
            </ul>
          </div>
        </section>
      </div>
      <GetInTouch />
      <Faq />
    </div>
  );
}
