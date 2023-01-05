import Gallery from "../Components/Gallery";
import swallow from "../images/swallow.GIF";
import MovingComponent from "react-moving-text";

function Photos() {
  const galleryImages = [
    {
      img: "https://i.imgur.com/LOpyQL8.jpg",
    },
    {
      img: "https://i.imgur.com/n7NUDn7.jpg",
    },
    {
      img: "https://i.imgur.com/Q3nWn8D.jpg",
    },
    {
      img: "https://i.imgur.com/vCkvPva.jpg",
    },
    {
      img: "https://i.imgur.com/jqnnly1.jpg",
    },
    {
      img: "https://i.imgur.com/M7wLx87.jpg",
    },
    {
      img: "https://i.imgur.com/4lQNE2G.jpg",
    },
    {
      img: "https://i.imgur.com/2A4cFbx.jpg",
    },
  ];

  return (
    <>
      <main>
        <MovingComponent
          type="slideInFromRight"
          duration="3000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <img src={swallow} className="location-bottle-gif" alt="swallow" />
        </MovingComponent>

        <Gallery galleryImages={galleryImages} />
      </main>
    </>
  );
}

export default Photos;
