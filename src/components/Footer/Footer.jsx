import React, { useState } from "react";
import logo from '../../assets/.PNG/logo.png';
import "./Footer.css";
import { Link, NavLink } from "react-router-dom";

const TermsConditionsPopup = ({ onClose }) => (
  <div className="popup">
    <div className="popup-content">
      <h2>Terms & Conditions</h2>

      <p>
        <strong>Acceptance of Terms</strong>
      </p>
      <p>
        By accessing and using this website, you accept and agree to be bound by
        the terms and provision of this agreement. Additionally, when using this
        website's particular services, you shall be subject to any posted
        guidelines or rules applicable to such services.
      </p>

      <p>
        <strong>Service Description</strong>
      </p>
      <p>
        This website provides information about various AI software and tools.
        It serves as a library database for educational and informational
        purposes only. We do not own any of the software described and do not
        provide direct access to any of the tools.
      </p>

      <p>
        <strong>User Obligations</strong>
      </p>
      <p>
        You agree to use this website only for lawful purposes and in a way that
        does not infringe the rights of, restrict, or inhibit anyone else's use
        and enjoyment of the website.
      </p>

      <p>
        <strong>Intellectual Property</strong>
      </p>
      <p>
        All content included on the website, such as text, graphics, logos,
        images, as well as the compilation thereof, and any software used on the
        website, is the property of the website or its suppliers and protected
        by copyright and intellectual property laws.
      </p>

      <p>
        <strong>Disclaimer of Warranties</strong>
      </p>
      <p>
        The information provided on this website is on an "as is" and "as
        available" basis without any warranties of any kind, including the
        implied warranties of merchantability, fitness for a particular purpose,
        or non-infringement of intellectual property.
      </p>

      <p>
        <strong>Limitation of Liability</strong>
      </p>
      <p>
        The website shall not be liable for any damages whatsoever arising out
        of the use of, or inability to use, the website or any content provided
        therein.
      </p>

      <p>
        <strong>External Links</strong>
      </p>
      <p>
        Links on this website may lead to services or external websites not
        operated by us. No judgment or warranty is made with respect to such
        other services or sites, and we take no responsibility for such other
        sites or services.
      </p>

      <p>
        <strong>Amendments to Terms</strong>
      </p>
      <p>
        We reserve the right to amend these terms and conditions at any time.
        All amendments to these terms will be posted online. Continued use of
        the site will be deemed to constitute acceptance of the new terms and
        conditions.
      </p>

      <p>
        <strong>Governing Law</strong>
      </p>
      <p>
        These terms and conditions shall be governed by and construed in
        accordance with the laws of the jurisdiction in which the website
        operates.
      </p>

      <p>
        <strong>Contact Information</strong>
      </p>
      <p>
        If you have any questions or comments about these Terms & Conditions,
        please contact us at <a href="mailto:info@hubit.ai">info@hubit.ai</a>.
      </p>

      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

const Footer = () => {
  const [isTermsPopupVisible, setTermsPopupVisibility] = useState(false);

  const openTermsPopup = () => {
    setTermsPopupVisibility(true);
  };

  const closeTermsPopup = () => {
    setTermsPopupVisibility(false);
  };

  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Ready to leap into the AI future ahead of the crowd?
        </h1>
      </div>

      <div className="gpt3__footer-links">
        {" "}
        <div className="gpt3__footer-links_logo">
          <h1 style={{fontWeight: 'bolder'}}>Hubit AI</h1>
        </div>
        <div className="gpt3__footer-links_div">
          <Link to="https://www.youtube.com/@Hubitai">
            <p>Youtube</p>
          </Link>
          <Link to="https://www.tiktok.com/@hubit.ai">
            {" "}
            <p>TikTok</p>
          </Link>
          <Link to=" https://www.facebook.com/hubitai/, ">
            <p>FaceBook</p>
          </Link>
          <Link>
            <p>Contact</p>
          </Link>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Hubit.ai</h4>
          <p onClick={openTermsPopup}>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>info@hubit.ai</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>@2023 AI. All rights reserved.</p>
      </div>
      {isTermsPopupVisible && (
        <TermsConditionsPopup onClose={closeTermsPopup} />
      )}
    </div>
  );
};

export default Footer;
