import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import PageContainer from "../components/PageContainer/PageContainer";
import Link from "next/link";
import {
  ALL_INCLUSIVE_WEDDING_PACKAGE_PRICE,
  HOUR_RATE,
  STARTER_WEDDING_PACKAGE_PRICE,
} from "@/lib/data";
import { LuArrowUpRight } from "react-icons/lu";
import HeroImage from "./../../../public/weddings/amy-charlie/000081.jpg";
import Package1Image from "./../../../public/weddings/alyssa-jonathan/000066.jpg";
import Package2Image from "./../../../public/weddings/alex-adam/000050.jpg";
import type { Metadata } from "next";
import SmallHero from "../components/SmallHero/SmallHero";
import GetInTouch from "../components/GetInTouch/GetInTouch";

export const metadata: Metadata = {
  title: "Pricing | Boston Wedding Photographer",
  alternates: {
    canonical: '/pricing',
  }
};

export default function page() {
  return (
    <div>
      <SmallHero
        title="Pricing"
        subtitle="Boston Wedding Photographer"
        image={HeroImage}
      />
    <PageContainer>
      <div className={styles.grid}>
        <h5>Packages</h5>
        <div className={styles.text}>
          I offer a range of photography services designed to fit your unique
          needs—whether you're looking for a wedding photographer, a portrait
          photographer, or coverage for a special event.
        </div>

        <div className={styles.package1}>
          <div className={styles.col1}>
            <h5>Starter Wedding Package</h5>
            <div className={styles.imageContainer}>
              <Image
                src={Package1Image}
                alt="wedding photo"
                width={400}
                height={500}
                style={{
                  objectFit: "cover",
                }}
                quality={80}
               
              />
            </div>
          </div>

          <div className={styles.column}>
            <div>
              Ideal for intimate and medium-sized celebrations. Let's discuss
              your wedding day vision and customize this package to fit your
              needs!
            </div>
            <div>
              <strong>6 Hours of Coverage</strong> <br /> Tailored to fit your
              wedding timeline and needs.
            </div>
            <div>
              <strong>Second Photographer</strong> <br /> Additional angles and
              coverage to ensure no detail is missed.
            </div>
            <div>
              <strong>Engagement Session</strong> <br /> A complimentary session
              to celebrate and announce your big day.
            </div>
            <div>
              <strong>Online Gallery</strong> <br /> Easily view, share, and
              download your high-resolution photos.
            </div>

            <h5>${STARTER_WEDDING_PACKAGE_PRICE}</h5>

            <div>
              For more details, be sure to check out my{" "}
              <Link href="/information">FAQ</Link> or{" "}
              <Link href="/contact">reach out</Link> to me directly.
            </div>
            <Link
              href="/contact"
              className={styles.contactForm_link}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div className={styles.contactItem}>
                <div>
                  Inquire <LuArrowUpRight style={{ display: "inline-block" }} />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.package2}>
          <div className={styles.col1}>
            <h5>All-Inclusive Wedding Package</h5>
            <div className={styles.imageContainer}>
              <Image
                src={Package2Image}
                alt="wedding photo"
                
                width={400}
                height={500}
                style={{
                  objectFit: "cover",
                }}
                quality={80}
              />
            </div>
          </div>

          <div className={styles.column}>
            <div>
              I believe in capturing every moment of your wedding without
              compromise, which is why my package covers you from start to
              finish. No hourly limits, no hidden fees—just comprehensive
              coverage of your big day.
            </div>
            <div>
              <strong>Full-Day Coverage</strong> <br /> No set time limit, so
              every important moment is captured.
            </div>
            <div>
              <strong>Engagement Session</strong> <br /> A complimentary session
              to celebrate and announce your big day.
            </div>
            <div>
              <strong>Second Photographer</strong> <br /> Additional angles and
              coverage to ensure no detail is missed.
            </div>
            <div>
              <strong>Online Gallery</strong> <br /> Easily view, share, and
              download your high-resolution photos.
            </div>
            <div>
              <strong>Wedding Album</strong> <br /> A custom-designed album to
              preserve your memories.
            </div>

            <h5>${ALL_INCLUSIVE_WEDDING_PACKAGE_PRICE}</h5>

            <div>
              For more details, be sure to check out my{" "}
              <Link href="/information">FAQ</Link> or{" "}
              <Link href="/contact">reach out</Link> to me directly.
            </div>
            <Link
              href="/contact"
              className={styles.contactForm_link}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div className={styles.contactItem}>
                <div>
                  Inquire <LuArrowUpRight style={{ display: "inline-block" }} />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <span className={styles.line}></span>
        <div className={styles.other}>
          <h5>Engagements / Portraits / Events</h5>
        </div>

        <div className={styles.otherPrice}>
          <strong>Starting at ${HOUR_RATE} per hour</strong> <div>Customizable based
          on the scope of your session.</div>
        </div>
        
      </div>
    </PageContainer><GetInTouch /></div>
  );
}
