import Gallery from "../Components/Gallery";
import swallow from "../images/swallow.GIF";
import MovingComponent from "react-moving-text";

function Photos() {
  const galleryImages = [
    {
      img: "https://i.imgur.com/KaGnFhV.jpg",
    },
    {
      img: "https://i.imgur.com/5Oer4te.jpg",
    },
    {
      img: "https://i.imgur.com/TY4Iiim.jpg",
    },
    {
      img: "https://i.imgur.com/3QeqKUd.jpg",
    },
    {
      img: "https://i.imgur.com/zeIwxXF.jpg",
    },

    {
      img: "https://i.imgur.com/aZpq2jH.jpg",
    },
    {
      img: "https://i.imgur.com/bDk2LX7.jpg",
    },

    {
      img: "https://i.imgur.com/AYWR2Qo.jpg",
    },
    {
      img: "https://i.imgur.com/K2DWzVI.jpg",
    },
    {
      img: "https://i.imgur.com/bUPYPna.jpg",
    },
    {
      img: "https://i.imgur.com/RSDMocy.jpg",
    },

    {
      img: "https://i.imgur.com/ih7SuI3.jpg",
    },

    {
      img: "https://i.imgur.com/ybgTzO0.jpg",
    },
    {
      img: "https://i.imgur.com/LJv9JIR.jpg",
    },
    {
      img: "https://i.imgur.com/Y221uzp.jpg",
    },
    {
      img: "https://i.imgur.com/3U31rSh.jpg",
    },
    {
      img: "https://i.imgur.com/7nuD3yK.png",
    },

    {
      img: "https://i.imgur.com/EAZtguR.jpg",
    },
    {
      img: "https://i.imgur.com/yedyZ10.jpg",
    },
    {
      img: "https://i.imgur.com/sMeDM9g.jpg",
    },

    {
      img: "https://i.imgur.com/hky12OX.png",
    },
  ];

  return (
    <>
      <main>
        <MovingComponent
          type="fadeInFromRight"
          duration="3000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <img src={swallow} className="photos-swallow-gif" alt="swallow" />
        </MovingComponent>

        <Gallery galleryImages={galleryImages} />
      </main>
    </>
  );
}

export default Photos;
