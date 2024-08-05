import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import ColorContext from '../context/ColorContext';

import EmailIcon from '../assets/images/EmailIcon';
import LinkedInIcon from '../assets/images/LinkedinIcon';
import InstagramIcon from '../assets/images/InstagramIcon';

export default function SVGIcons() {
  const { color } = useContext(ColorContext);

  return (
    <div className="icons-container">
      <Link to="https://mail.google.com/">
        <EmailIcon color={color.color} />
      </Link>
      <Link to="https://www.linkedin.com/">
        <LinkedInIcon color={color.color} />
      </Link>
      <Link to="https://www.instagram.com/?hl=en">
        <InstagramIcon color={color.color} />
      </Link>
    </div>
  );
}
