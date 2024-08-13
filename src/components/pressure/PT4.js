import React, { useState, useEffect, useContext } from 'react';
import "../../styles/prst4.css";
import ColorContext from '../../context/ColorContext';
import gridLinesImage from "../../assets/images/univ/grid_lines.svg";
import Navbar from "../hero/components/Navbar";
import UCMenu from "../UCMenu";
import StaticNSC from "../slider/StaticNSC";
import PageContext from '../../context/PageContext';
import Footer from "../footer/Footer";
import Contact from "../contact/Contact";

const PT4 = () => {
  const { color } = useContext(ColorContext); // Get color from ColorContext
  const [glitch, setGlitch] = useState(false);
  const [imageSet, setImageSet] = useState('pop4'); // 'g' for g1-g4 and 's' for s1-s4
  const [clickedLink, setClickedLink] = useState(null); // Track clicked link index
  const [nextLinkIndex, setNextLinkIndex] = useState(null); // Track next link index for automatic change
  const [timeoutId, setTimeoutId] = useState(null); // Track timeout ID for clearing
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const linkTexts = [
    { text: 'OFFSHORE PLANTS', set: 'pop4' },
  ];

  const handleGlitchChange = (newSet, index) => {
    setImageSet(newSet);
    setGlitch(true);
    setClickedLink(index);
    clearTimeout(timeoutId); // Clear any existing timeout
    setTimeout(() => setGlitch(false), 500); // Duration of the glitch animation

    const timeout = setTimeout(() => {
      const nextIndex = (index + 1) % linkTexts.length;
      setNextLinkIndex(nextIndex);
    }, 4000);

    setTimeoutId(timeout);
  };

  useEffect(() => {
    if (nextLinkIndex !== null) {
      const timeout = setTimeout(() => {
        if (!isHovered) {
          const nextLink = linkTexts[nextLinkIndex];
          handleGlitchChange(nextLink.set, nextLinkIndex);
        }
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [nextLinkIndex, isHovered]);

  const handleHover = (hovered) => {
    setIsHovered(hovered);
  };

  
    // Scroll to top on component mount
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  // Automatically click the first featured link on page load
  useEffect(() => {
    if (linkTexts.length > 0) {
      handleGlitchChange(linkTexts[0].set, 0);
    }
  }, []);

  return (
    <div className="text-table-wglitch-wj6 pressure-bg">
      <UCMenu />
      <div className="center-container">
        <div>
          <table className="rajdhani-regular">
            <div
              className="grid-lines-overlay"
              style={{ zIndex: -2, backgroundImage: `url(${gridLinesImage})`, backgroundSize: '100%', opacity: 0.5 }}
            />
            <tbody>
              <tr>
                <td className="featured-text" style={{ color: color.color }}>Featured Use Cases</td>
              </tr>
              {linkTexts.map((link, index) => (
                <tr key={index}>
                  <td>
                    <span
                      onClick={() => handleGlitchChange(link.set, index)}
                      onMouseEnter={() => handleHover(true)}
                      onMouseLeave={() => handleHover(false)}
                      className={`featured-link ${clickedLink === index ? 'loading-underline' : ''}`}
                      style={{
                        '--loading-line-color': color.color, // Set loading line color from context
                        '--hover-color': color.color // Set the hover color from context
                      }}
                    >
                      {link.text}
                    </span>
                    {clickedLink === index && <div className="loading-line" style={{ backgroundColor: color.color }}></div>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={`glitch ${glitch ? `glitch-active-${imageSet}` : `glitch-static-${imageSet}`}`}></div>
          <h3 className="sub-heading orbitron" style={{ color: color.color }}>SPECIALIZED PRESSURE HANDLING</h3>
          <h1 className="main-heading rajdhani-medium">OIL RIG PRESSURE VALVES</h1>
        </div>

        <div className="divider"></div>
        <StaticNSC />
        <div className="divider"></div>

        <div className="product-content">
      <div className="section section-bg-prst1">
        <div className="column image-column">
        <p className='barcode left-spacing nlb-spacing'>HY-LOK DOUBLE VALVE</p>
          <img src={require("../../assets/images/pressure/prst4/HLDV.png")} alt="Placeholder" className='p-image1 p-image1-spacing'/>
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
      <div className="section section-bg-prst21">
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
            <p className='barcode'>HY-LOK BLEED VALVE</p>
          <img src={require("../../assets/images/pressure/prst4/HLBV.png")} alt="Placeholder" className='p-image2'/>
        </div>
      </div>

      
      <div className="divider"></div>

      <div className="product-content">
      <div className="section section-bg-prst3">
        <div className="column image-column">
        <p className='barcode left-spacing nlb-spacing'>HY-LOK BALL VALVE</p>
          <img src={require("../../assets/images/pressure/prst4/HLBL.png")} alt="Placeholder" className='p-image-sl p-image-sl-spacing'/>
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
    </div>
      
      </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default PT4;
