import { Container } from "./styles";
import VinayakSingh from "../../assets/VinayakSingh.png";
import RahulRabadiya from "../../assets/RahulRabadiya.png";
import RahulNew from "../../assets/RahulNew.jpg";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import postman from "../../assets/postman.png";
import github from "../../assets/github.png";
import firebase from "../../assets/firebase.png";
import googleplay from "../../assets/googleplay.png";
import appstore from "../../assets/appstore.png";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          {/* <p>
            Hi there! I'm Rahul, a Mobile Application Developer with a passion
            for creating custom online experiences for my clients. With a skill
            set including HTML, CSS, JavaScript, and React, I have the tools to
            bring any website vision to life.
          </p> */}
          <p>
            Hi there! I'm Rahul, I am a passionate and skilled mobile
            application developer specializing in React Native and Android
            development. With 5 + years of experience, I have honed my ability
            to create seamless, cross-platform applications that deliver high
            performance and an intuitive user experience. My expertise in React
            Native allows me to build robust mobile apps for both Android and
            iOS, while leveraging reusable code for efficiency. I have a solid
            understanding of the complete mobile development lifecycle, from
            concept and design to deployment, ensuring that each app I work on
            is optimized for performance, security, and scalability.
          </p>
        </ScrollAnimation>
        {/* <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            But my services go beyond just custom development - I'm also
            proficient in using CMS systems like WordPress and Shopify, making
            it easy for my clients to take control of their own websites and
            keep them up to date.
          </p>
        </ScrollAnimation> */}
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.3 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            If you’re looking to build a new mobile application or customize
            your current digital presence, I’d love to connect and explore how I
            can assist. Together, we can bring your app ideas to life and create
            a solution that meets your business goals and exceeds user
            expectations. Let's bring your App dreams to reality together!
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={wordpress} alt="Wordpress" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={shopify} alt="shopify" />
            </ScrollAnimation>
          </div> */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={github} alt="Github" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={firebase} alt="Firebase" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={postman} alt="Postman" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={appstore} alt="Appstore" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={googleplay} alt="Googleplay" />
            </ScrollAnimation>
          </div>
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div> */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div> */}
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div> */}
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div> */}
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          {/* <img src={VinayakSingh} alt="Rahul Rabadiya" /> */}
          <img
            src={RahulNew}
            alt="Rahul Rabadiya"
            style={{
              borderRadius: 30,
              width: "300px", // Adjust width as needed
              height: "auto", // Maintain aspect ratio
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
            }}
          />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
