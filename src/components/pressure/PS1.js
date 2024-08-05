import React, { useState, useContext, useEffect } from "react";
import Contact from "../contact/Contact";
import Slider from "../slider/Slider";
import Navbar from "../hero/components/Navbar";
import "../../styles/styles.css"; // Ensure your CSS file is correctly imported
import ProductContent from "../ProductContent";
import Static from "../slider/Static";
import Footer from "../footer/Footer";
import MenuIcon from "../MenuIcon";
import defaultImage from "../../assets/images/roz.webp";
import roadsImage from "../../assets/images/x1.webp";
import runwaysImage from "../../assets/images/x4.webp";
import portsImage from "../../assets/images/x2.webp";
import quaysImage from "../../assets/images/x3.webp";
import parkingdecksImage from "../../assets/images/x4.webp";
import PageContext from '../../context/PageContext';

export default function PS1() {


// CAROUSEL IMAGE
  const [currentSlide, setCurrentSlide] = useState(0);
  const {page, setPage} = useContext(PageContext);

  const images = [
    require("../../assets/images/x3.webp"),
    require("../../assets/images/x4.webp"),
    require("../../assets/images/x5.webp"),
  ];
 

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };
  useEffect(() => {
    setPage(() => "");
  }, [setPage]);



// TABLE LINK | CHANGE IMAGE
  const [backgroundImage, setBackgroundImage] = useState(defaultImage);
  const [animationClass, setAnimationClass] = useState("");

  const handleImageChange = (linkText) => {
    let newImage = defaultImage; // Default image
    if (linkText === "Roads") {
      newImage = roadsImage;
    } else if (linkText === "Runways") {
      newImage = runwaysImage;
    } else if (linkText === "Ports") {
      newImage = portsImage;
    } else if (linkText === "Quays") {
      newImage = quaysImage;
    } else if (linkText === "Parking Decks") {
      newImage = parkingdecksImage;
    }
    // Add conditions for other link texts if needed

    setAnimationClass("pixel-fade-out"); // Trigger the fade-out animation
    setTimeout(() => {
      setBackgroundImage(newImage); // Change the image after the animation
      setAnimationClass(""); // Remove the animation class
    }, 500); // Duration of the animation
  };





  return (
    <div className="product-bg">
      <Navbar />

      {/* Section 1 */}
      <div className={`section-1 ${animationClass}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="text-table">
          <table className="rajdhani-regular">
            <tbody>
              <tr>
                <td className="featured-text">Featured Use Cases</td>
              </tr>
              <tr>
                <td><span className="featured-link" onClick={() => handleImageChange("Roads")}>Roads</span></td>
              </tr>
              <tr>
                <td><span className="featured-link" onClick={() => handleImageChange("Bridges")}>Bridges</span></td>
              </tr>
              <tr>
                <td><span className="featured-link" onClick={() => handleImageChange("Runways")}>Runways</span></td>
              </tr>
              <tr>
                <td><span className="featured-link" onClick={() => handleImageChange("Ports")}>Ports</span></td>
              </tr>
              <tr>
                <td><span className="featured-link" onClick={() => handleImageChange("Quays")}>Quays</span></td>
              </tr>
              <tr>
                <td><span className="featured-link" onClick={() => handleImageChange("Parking Decks")}>Parking Decks</span></td>
              </tr>
              <tr>
                <td><span className="featured-link" onClick={() => handleImageChange("Dams")}>Dams</span></td>
              </tr>
              <tr>
                <td><span className="featured-link" onClick={() => handleImageChange("Pillars")}>Pillars</span></td>
              </tr>
              <tr>
                <td><span className="featured-link" onClick={() => handleImageChange("Tunnels")}>Tunnels</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="sub-heading orbitron">CONCRETE REMOVAL</h3>
        <h1 className="main-heading rajdhani-medium">HYDRO DEMOLITION</h1>
      </div>

      <div className="divider"></div>
      <Static />
      <div className="divider"></div>
      

{/* OTHER SECTIONS | PAGE CONTENTS */}
      <div className="product-content">
      <div className="section section-bg">
        <div className="column image-column">
        <p className='barcode left-spacing nlb-spacing'>NLB 225 SERIES WATER JETTING PUMP</p>
          <img src={require("../../assets/images/x1.webp")} alt="Placeholder" className='p-image1 p-image1-spacing'/>
        </div>
        <div className="column text-column rajdhani-semibold">
          <p  className='list-paragraph-1 left-spacing-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit diam quam nisi ut pellentesque nec cursus habitant nec lobortis ac placerat non, urna tempus luctus lobortis sed dui nisl.</p>
          <ul>
            <li className='bullet-list left-spacing-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className='bullet-list left-spacing-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className='bullet-list left-spacing-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className='bullet-list left-spacing-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
      </div>


      <div className="divider"></div>
      <div className="section section-bg">
      <div className="column text-column rajdhani-semibold">
          <p  className='list-paragraph-2 left-spacing-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit diam quam nisi ut pellentesque nec cursus habitant nec lobortis ac placerat non, urna tempus luctus lobortis sed dui nisl.</p>
          <ul>
            <li className='bullet-list left-spacing-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className='bullet-list left-spacing-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className='bullet-list left-spacing-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className='bullet-list left-spacing-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
        <div className="column image-column spir-barcode">
            <p className='barcode'>SPIR STAR HIGH PRESSURE HOSE</p>
          <img src={require("../../assets/images/x2.webp")} alt="Placeholder" className='p-image2'/>
        </div>
      </div>

      
      <div className="divider"></div>





<div className="App">
      <div className="section section-bg">
        <div className="column slider-column">


          <div className='slider-container'>
          <div className="slider">
          <p className='barcode conjet-spacing'>CONJET ROBOT 557</p>
            {images.map((image, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="slider-dots">
            {images.map((_, index) => (
              <React.Fragment key={index}>
                <span
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                ></span>
                {index < images.length - 1 && <div className="line"></div>}
              </React.Fragment>
            ))}
          </div>
          </div>
        </div>
        <div className="column text-column rajdhani-semibold">
          <p  className='list-paragraph-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit diam quam nisi ut <br />pellentesque nec cursus habitant nec lobortis ac placerat non, urna <br />tempus luctus lobortis sed dui nisl.</p>
          <ul>
            <li className='bullet-list left-spacing-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className='bullet-list left-spacing-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className='bullet-list left-spacing-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className='bullet-list left-spacing-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
      </div>
    </div>
    </div>



      <Contact />
      <Footer />
    </div>
  );
}
