import bay from "../images/bayview.png";
import booze from "../images/booze.gif";
import MovingComponent from "react-moving-text";

function Location() {
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
          <img src={booze} className="location-bottle-gif" alt="bottle gif" />
        </MovingComponent>
        <MovingComponent
          type="fadeInFromTop"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <a href="https://captainbills.com/" target="_blank" rel="noreferrer">
            <img
              src={bay}
              className="location-bayview"
              alt="bayview house logo"
            />{" "}
          </a>
        </MovingComponent>

        <MovingComponent
          type="fadeInFromBottom"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <h2>122 Ocean Ave, Bay Shore, NY 11706</h2>
          <h3 className="location-date-time">Friday July 7th, 2023</h3>
          <h3 className="location-date-time">5:30PM</h3>
        </MovingComponent>
      </main>
    </>
  );
}

export default Location;
