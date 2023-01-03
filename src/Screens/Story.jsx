import ship from "../images/ship.gif";
import rose from "../images/rose.gif";
import booze from "../images/booze.gif";
import Carousel from "react-bootstrap/Carousel";

function Story() {
  return (
    <>
      <h1>Our story</h1>
<<<<<<< HEAD
      <Carousel slide={false}>
        <Carousel.Item>
          <img
            className="rounded mx-auto d-block"
            src={ship}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="rimg-thumbnail" src={rose} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="rounded mx-auto d-block"
            src={booze}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
=======
   
  <p>More coming soon.</p>
>>>>>>> 2ace53f (remove scroll feature)
    </>
  );
}

export default Story;
