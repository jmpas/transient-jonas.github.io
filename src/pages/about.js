import dynamic from "next/dynamic";

const ProfilePicture = dynamic(import("../components/profile-picture"));

import Page from "../layouts/main";
import PrimaryTitle from "../components/primary-title";
import Paragraph from "../components/paragraph";

import styles from "./about.styles";
import textEffect from "../styles/text-effect";
import fadeIn from "../styles/fade-in";

const metaData = {
  title: "Nipher - Contact",
  description: "Web developer, amateur photographer, dreaming man",
  url: "https://nipher.io/about",
};

const About = () => (
  <Page meta={metaData} logoModifier="big">
    <div className="about-page">
      <div className="profile-picture">
        <ProfilePicture />
      </div>
      <div className="intro-text">
        <div className="about-intro">
          <PrimaryTitle>
            <span className="text-effect">Hi, I'm Jonas </span>
          </PrimaryTitle>
          <Paragraph>
            I'm curently based in Stockholm and working as a Full Stack
            Developer at{" "}
            <a href="https://www.29k.org/">
              <code>29k</code>
            </a>
            , a non-profit organization building a platform where psychology and
            technology meets through personal growth.
          </Paragraph>
          <br />
          <Paragraph>
            During my life I've been working with web technologies, always
            keeping myself involved in the creative, strategic and
            organizational processes, while also exploring, together, the
            mystery and art that is to be an organization where the synthesis of
            ideas and perspectives are the drive for growth and creativity,
            empowering everyone to flow with understading in the process of
            co-creating something meaninful in this world.
          </Paragraph>
          <br />
          <Paragraph>
            I'm also available for individual mentoring sessions.
          </Paragraph>
          <br />
          <Paragraph>You can find me through these channels</Paragraph>
          <br />
          <div className="links fade-in">
            <a href="mailto:jonas@nipher.io">e-mail </a>|
            <a href="https://github.com/nipher"> github </a>|
            <a href="https://instagram.com/nipher_jonas"> instagram </a>|
            <a href="https://www.linkedin.com/in/jonasmendes"> linkedin </a>|
            <a href="https://unsplash.com/@nipher"> unsplash </a>
          </div>
          <br />
          <Paragraph>My GPG Public Key</Paragraph>
          <br />
          <Paragraph>
            <a href="https://keyserver.ubuntu.com/pks/lookup?search=0x5f83c5f9cd9337ca&fingerprint=on&op=index">
              <code>CBE5 7F72 7E16 A530 D7C6 7661 5F83 C5F9 CD93 37CA</code>
            </a>
          </Paragraph>
        </div>
      </div>
      <style jsx>{styles}</style>
      <style jsx>{textEffect}</style>
      <style jsx>{fadeIn}</style>
    </div>
  </Page>
);

export default About;
