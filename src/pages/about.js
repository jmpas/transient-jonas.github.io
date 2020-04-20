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
      <div className="intro-text">
        <div className="about-intro">
          <PrimaryTitle>
            <span className="text-effect">Hi, I'm Jonas </span>
          </PrimaryTitle>
          <Paragraph>
            I'm curently based in Stockholm and working as a tech consultant at{" "}
            <a href="https://www.0x.se/">
              <code>0+X</code>
            </a>
            , a technology company offering expert consultancy in Scandinavia.
          </Paragraph>
          <br />
          <Paragraph>
            During my professional career I've been working with web
            technologies, always keeping myself involved in the creative and
            strategic process, providing training, workshops and
            team/organizational dynamics which empower us to flow with
            productivity and grow together in the process.
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
            <a href="https://twitter.com/nipher_jonas"> twitter </a>|
            <a href="https://github.com/nipher"> github </a>|
            <a href="https://instagram.com/nipher_jonas"> instagram </a>|
            <a href="https://www.linkedin.com/in/jonasmendes"> linkedin </a>|
            <a href="https://unsplash.com/@nipher"> unsplash </a>
          </div>
          <br />
          <Paragraph>My GPG Public Key</Paragraph>
          <br />
          <Paragraph>
            <a href="/static/nipher-public-key.asc">
              <code>get_key</code>
            </a>
          </Paragraph>
          <br />
          <Paragraph>Fingerprint</Paragraph>
          <br />
          <Paragraph>
            <code>CBE5 7F72 7E16 A530 D7C6 7661 5F83 C5F9 CD93 37CA</code>
          </Paragraph>
        </div>
      </div>
      <ProfilePicture />
      <style jsx>{styles}</style>
      <style jsx>{textEffect}</style>
      <style jsx>{fadeIn}</style>
    </div>
  </Page>
);

export default About;
