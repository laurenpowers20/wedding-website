import ship from "../images/ship.gif";
import MovingComponent from "react-moving-text";

function Home() {
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
        <h1> Under Construction! </h1>
        <h1>Check back soon.</h1>
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
        <img src={ship} alt="ship" width={500} />
      </MovingComponent>
    </>
  );
}

export default Home;
