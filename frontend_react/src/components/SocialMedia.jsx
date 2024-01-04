import React from 'react';
import { FaTelegram, FaInstagram, FaLinkedin} from 'react-icons/fa'

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href='https://www.linkedin.com/in/bakhrom-rakhimov-180a91211/' className='linkedin_social'>
      <FaLinkedin />
      </a>
      
    </div>
    <div>
    <a href='https://t.me/XFREEX13' className='telegram_social'>< FaTelegram/></a>
      
    </div>
    <div>
    <a href='https://instagram.com/ogelsby_barner?igshid=MzNlNGNkZWQ4Mg==' className='instagram_social'><FaInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;
