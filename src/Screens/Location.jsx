import bay from "../images/bayview.png";
import MovingComponent from "react-moving-text";

function Location() {
  return (
    <>
      <MovingComponent
        type="fadeInFromTop"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        <img src={bay} alt="bayview house logo" />
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
        <h3>Friday July 7th, 2023</h3>
        <h3>5:30PM</h3>
      </MovingComponent>
    </>
  );
}

export default Location;
