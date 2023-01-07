import "./Styles/Story.css";
import dagger from "../images/daggerrose.png";
import swallow1 from "../images/swallow1.png";
import swallow2 from "../images/swallow2.png";
import MovingComponent from "react-moving-text";

function Story() {
  return (
    <>
      <main>
        <div className="our-story-images-container">
          <div className="our-story-center">
            <MovingComponent
              type="slideInFromLeft"
              duration="2000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              <img
                src={swallow1}
                className="our-story-image"
                alt="sailor swallow"
              />
            </MovingComponent>
            <img src={dagger} className="dagger-story-image" alt="dagger" />
            <MovingComponent
              type="slideInFromRight"
              duration="2000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              <img
                src={swallow2}
                className="our-story-image"
                alt="sailor swallow"
              />
            </MovingComponent>
          </div>
        </div>
        <div className="timeline">
          <ul>
            <li>
              <div className="content">
                <h3>We got set up</h3>
                <p>
                  Sisters, Tracy and Dez thought we were compatible and
                  suggested we go on a date. The couple met at a party once but
                  Jesse didn't remember Lauren. Jesse called Lauren anyway to
                  ask her out and she ignored it because it was probably a scam
                  likely. He left a voicemail, though.
                </p>
              </div>
              <div className="time">
                <h4>March 2019</h4>
              </div>
            </li>

            <li>
              <div className="content">
                <h3>First Date</h3>
                <p>
                  Fools, Lauren and Jesse go on a first date on April Fool's
                  Day. They have pizza and beer in Astoria, Queens.
                </p>
              </div>
              <div className="time">
                <h4>April 1 2019</h4>
              </div>
            </li>

            <li>
              <div className="content">
                <h3>Moved to Forest Hills</h3>
                <p>
                  After having a lot of fun being essential workers during the
                  pandemic, Lauren and Jesse moved to their apartment in Forest
                  Hills.
                </p>
              </div>
              <div className="time">
                <h4>November 2020</h4>
              </div>
            </li>

            <li>
              <div className="content">
                <h3>Surprise! City Hall wedding.</h3>
                <p>We just went for it! What else were we doing, really? </p>
              </div>
              <div className="time">
                <h4>May 13 2022</h4>
              </div>
            </li>

            <li>
              <div className="content">
                <h3>Party!!</h3>
                <p>
                  Here's the part where you come in! It's been a great first
                  year being married. We are very lucky to have so many amazing
                  people in our lives. We want to bring you all together to
                  celebrate! So come hungry, enjoy the open bar, dress up fancy
                  (or wear your tuxedo t-shirt?! I dunno), and let's celebrate!{" "}
                </p>
              </div>
              <div className="time">
                <h4>July 7 2023</h4>
              </div>
            </li>

            <div className="bottom"></div>
          </ul>
        </div>
      </main>
    </>
  );
}

export default Story;
