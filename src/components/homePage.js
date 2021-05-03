import designIdea from "../images/mydesignidea.jpg";
import Carousel from "react-bootstrap/Carousel";
import webD from "../images/webD.jpg";
import md from "../images/mobileAppdevelopment.jpg";
import "../App.css"

function Home() {
  return (
    <div>
      <div className = "slider">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={webD} alt="First slide" />
            <div className="header">
                <h1>Header here</h1>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="header">
                <h1>Header here</h1>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </div>
            <img className="d-block w-100" src={md} alt="Second slide" />

           
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={designIdea} alt="Third slide" />
            <div className="header">
                <h1>Header here</h1>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </div>
              
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
export default Home;
