import Gallery from "../Components/Gallery";

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
      <Gallery galleryImages={galleryImages} />
    </>
  );
}

export default Photos;
