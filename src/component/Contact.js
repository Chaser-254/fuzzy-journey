import { ReactComponent as Github } from "../img/github.svg";
import { ReactComponent as Instagram } from "../img/instagram.svg";
import { ReactComponent as LinkedIn } from "../img/linkedin.svg";
import { ReactComponent as Call } from "../img/call.svg";
import { ReactComponent as Gmail } from "../img/gmail.svg";
import { ReactComponent as WhatsApp } from "../img/whatsapp.svg";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section-header">Contact Me</h2>
      <p>
        I would be happy to connect with you and discuss any potential
        opportunities,collaborations and job opportunities.
      </p>

      <div className="contact">
        <div className="column">
          <ul>
            <li>
              Gmail:{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:esibitaremmanuel316@gmail.com"
              >
                <Gmail className="icon" />{" "}
              </a>
            </li>

            <li>
              Call Me:{" "}
              <a target="_blank" rel="noreferrer" href="tel:+254111363870">
                <Call className="icon" />
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/emmanuel-esibitar-1495a9240/"
              >
                {" "}
                <LinkedIn className="icon" />
              </a>
            </li>
          </ul>
        </div>

        <div className="column">
          <ul>
            <li>
              Github:{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.github.com/Chaser-254"
              >
                <Github className="icon white" />
              </a>
            </li>
            <li>
             WhatsApp:
             <a href="https://wa.me/254111363870">
              <WhatsApp className="icon" />
             </a>
            </li>

            <li>
              Instagram:{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/chaser.ke"
              >
                <Instagram className="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Contact;
