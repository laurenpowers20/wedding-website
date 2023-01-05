import ship from "../images/ship.gif";
import MovingComponent from "react-moving-text";

function Home() {
  return (
    <>
      <main>
        <MovingComponent
          type="fadeInFromTop"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <h1> Lauren & Jesse </h1>
          <h1>July 7, 2023</h1>
          <h2 className="home-underconstruction">
            Site is still under construction. Check back soon for updates!
          </h2>
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
      </main>
    </>
  );
}

export default Home;
