// import MovingComponent from "react-moving-text";
// import flounder from "../images/fluke.GIF";
// import stargazer from "../images/stargzr.PNG";
import "./Styles/Home.css";
import Nav from "../Components/Nav";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  FlexCenterStyle,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

function Home() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div className="home-container">
      {/* <div className="home-title">
        <h1>Two Less Fish in the Sea</h1>
      </div> */}
      {/* <div className="fish-container">
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
            <img src={flounder} className="home-flounder" alt="flounder" />
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
            <img src={stargazer} className="home-stargazer" alt="stargazer" />
          </MovingComponent>
        </div> */}
      {/* </div> */}
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: "3em" }}>
              Lauren and Jesse want to party with YOU! Yes you! 🫵🏻{" "}
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <div style={{ fontSize: "3em" }}>
              The Bayview House at Captain Bill's
            </div>
            <div style={{ fontSize: "3em" }}>Bay Shore, NY</div>
            <div style={{ fontSize: "3em" }}>July 7th, 2023</div>
            <div style={{ fontSize: "3em" }}>5:30pm</div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: "3em" }}>
              We got married in May 2022 at City Hall. Now it's time to
              celebrate with the people we love most. We hope you can make it!
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={batch(Fade(), Sticky())}>
            <div className="nav-bottom">
              <Nav />
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}

export default Home;
