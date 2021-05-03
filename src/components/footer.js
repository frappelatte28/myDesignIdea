import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import nl2br from "react-newline-to-break";

let footerString = "aNumak & Company\n©2021 All rights reserved";

function Footer() {
  return (
    <div>
      <div className="wrapper">
        <div className="social_icons">
          <div>
            <FaFacebookSquare color="rgb(5, 5, 19)" size="2em" />
          </div>
          <div>
            <FaLinkedin size="2em" color="rgb(5, 5, 19)" />
          </div>
          <div>
            {" "}
            <FaTwitterSquare size="2em" color="rgb(5, 5, 19)" />
          </div>
        </div>
        
        <div className = "end"> 
            {nl2br(footerString)}
        </div>
      </div>
    </div>
  );
}
export default Footer;
