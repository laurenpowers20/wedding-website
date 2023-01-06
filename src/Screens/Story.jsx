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
                  Sisters, Tracy and Dez decided to set up their two friends on
                  a date. Jesse calls Lauren to ask her out and she ignores it
                  because it's probably a scam likely.
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
                  Day. They have pizza and beer in a dive bar in Astoria,
                  Queens.
                </p>
              </div>
              <div className="time">
                <h4>April 1 2019</h4>
              </div>
            </li>

            <li>
              <div className="content">
                <h3>What is Lorem Ipsum?</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.{" "}
                </p>
              </div>
              <div className="time">
                <h4>March 2018</h4>
              </div>
            </li>

            <li>
              <div className="content">
                <h3>What is Lorem Ipsum?</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.{" "}
                </p>
              </div>
              <div className="time">
                <h4>April 2018</h4>
              </div>
            </li>

            <li>
              <div className="content">
                <h3>What is Lorem Ipsum?</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.{" "}
                </p>
              </div>
              <div className="time">
                <h4>May 2018</h4>
              </div>
            </li>

            <li>
              <div className="content">
                <h3>What is Lorem Ipsum?</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.{" "}
                </p>
              </div>
              <div className="time">
                <h4>June 2018</h4>
              </div>
            </li>

            <li>
              <div className="content">
                <h3>What is Lorem Ipsum?</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.{" "}
                </p>
              </div>
              <div className="time">
                <h4>July 2018</h4>
              </div>
            </li>

            <li>
              <div className="content">
                <h3>What is Lorem Ipsum?</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.{" "}
                </p>
              </div>
              <div className="time">
                <h4>August 2018</h4>
              </div>
            </li>

            <li>
              <div className="content">
                <h3>What is Lorem Ipsum?</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.{" "}
                </p>
              </div>
              <div className="time">
                <h4>September 2018</h4>
              </div>
            </li>

            <li>
              <div className="content">
                <h3>What is Lorem Ipsum?</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.{" "}
                </p>
              </div>
              <div className="time">
                <h4>October 2018</h4>
              </div>
            </li>

            <li>
              <div className="content">
                <h3>What is Lorem Ipsum?</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.{" "}
                </p>
              </div>
              <div className="time">
                <h4>November 2018</h4>
              </div>
            </li>

            <li>
              <div className="content">
                <h3>What is Lorem Ipsum?</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.{" "}
                </p>
              </div>
              <div className="time">
                <h4>December 2018</h4>
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
