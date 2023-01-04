import Gallery from "../Components/Gallery";

function Photos() {
  const galleryImages = [
    {
      img: "https://i.imgur.com/hsOnKEX.jpg",
    },
    {
      img: "https://i.imgur.com/n7NUDn7.jpg",
    },
    {
      img: "https://i.imgur.com/Q3nWn8D.jpg",
    },
    {
      img: "https://i.imgur.com/TizeUL9.jpg",
    },
  ];

  return (
    <>
      <Gallery galleryImages={galleryImages} />
    </>
  );
}

export default Photos;
