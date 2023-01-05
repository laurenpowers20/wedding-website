import mermaid from "../images/mermaid.gif";
import MovingComponent from "react-moving-text";
import { Link } from "react-router-dom";
function AboutSite() {
  return (
    <>
      <main>
        <MovingComponent
          type="flip"
          duration="2000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <img
            src={mermaid}
            className="location-bottle-gif"
            alt="Mermaid gif"
          />
        </MovingComponent>
        <p className="about-site-text">
          Oh hello there, I see you've stumbled upon my shameless plug.{" "}
        </p>
        <p className="about-site-text">
          I engineered, designed, and coded this site myself with my own two
          hands and brain.
        </p>
        <p className="about-site-text">
          If you know someone that needs a front end developer, please pass
          along my information!{" "}
        </p>
        <p>
          <a
            href="https://laurenpowersportfolio.com/"
            target="_blank"
            alt="Lauren Powers Portfolio"
            className="about-site-text"
            rel="noreferrer"
          >
            Lauren Portfolio
          </a>
        </p>
      </main>
      <footer>
        {" "}
        <Link to="/">Home</Link>
      </footer>
    </>
  );
}

export default AboutSite;
