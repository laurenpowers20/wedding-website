import MovingComponent from "react-moving-text";
import flounder from "../images/fluke.GIF";
import stargazer from "../images/stargzr.PNG";

function Home() {
  return (
    <>
      <h1>Two Less Fish in the Sea</h1>
      <div className="fish-container">
        <div className="flounder">
          <MovingComponent
            type="slideInFromLeft"
            duration="3000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
            <img src={flounder} alt="flounder" />
          </MovingComponent>
        </div>
        <div className="stargazer">
          <MovingComponent
            type="slideInFromRight"
            duration="3000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
            <img src={stargazer} alt="stargazer" />
          </MovingComponent>
        </div>
      </div>
    </>
  );
}

export default Home;
