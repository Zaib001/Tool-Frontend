import React from 'react';
import ai from '../../assets/.PNG/ai.png';
import './header.css';
import { FaYoutube, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Crypto from '../../pages/Crypto/Crypto';

const Header = () => (
  <>
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-image">
        <img src={ai} alt="AI" />
      </div>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Join Our Vibrant Community without <br/>the hassle of email sign-ups</h1>
        <p style={{color: 'white'}}>Connect instantly by following us on social media. Hit the ‘Subscribe’, ‘Follow’, or ‘Thumbs Up’ symbols below to stay updated with our latest content and join the conversation today.</p>
        <div className="social-icons">
          <a href='https://www.youtube.com/@Hubitai' target='_blank'><FaYoutube className="icon" /></a>
          <a href=' https://www.facebook.com/hubitai/'> <FaFacebook className="icon" /></a>
          <a href='#'> <FaLinkedin className="icon" /></a>
          <a href='#'><FaTwitter className="icon" /></a>
        </div>
      </div>
    </div>
    <div>
     <Crypto/>
    </div>
  </>
);

export default Header;
