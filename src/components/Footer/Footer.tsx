import { Container } from "./styles";
import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import instagramIcon from "../../assets/instagram.svg";
// import discordIcon from '../../assets/discord.png'
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";

export function Footer() {
  return (
    <Container className="footer">
      {/* <a href="https://vinayaksingh.in" className="logo">
        <span>www.vinayak</span>
        <span>singh.in</span>
      </a> */}
      {/* <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
         
        </p>
      </div> */}

      <div className="contacts">
        <div>
          <a href="mailto:rrrrabadiya@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:rrrrabadiya@gmail.com">rrrrabadiya@gmail.com</a>
        </div>
        <div>
          <a href="tel:+919727169281">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+919630576848">(+91) 9727169281</a>
        </div>
      </div>
      {/* <div className="social-media">
        <a
          href="https://www.linkedin.com/in/codevinayak"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/CodeVinayak/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a href="https://t.me/CodeVinayak" target="_blank" rel="noreferrer">
          <img src={telegram} alt="telegram" />
        </a>
        <a
          href="https://www.instagram.com/vinayaksingh.in"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div> */}
    </Container>
  );
}
