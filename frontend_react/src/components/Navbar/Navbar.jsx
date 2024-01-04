import React, { useState } from 'react'
import { HiMenuAlt4,HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { FaTelegram, FaInstagram, FaLinkedin} from 'react-icons/fa'
import './Navbar.scss'


const Button1 = () => (
  <>
      <a href='https://www.linkedin.com/in/bakhrom-rakhimov-180a91211/' className='linkedin_social '>
      <FaLinkedin />
      </a>

      <a href='https://t.me/XFREEX13' className='telegram_social'>< FaTelegram/></a>

      <a href='https://instagram.com/ogelsby_barner?igshid=MzNlNGNkZWQ4Mg==' className='instagram_social'><FaInstagram /></a>
  </>
)


const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='app_navbar'>
      <div className='app__navbar-logo'>
        <img src= {images.logo} alt='logo'/>
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'contact', 'certificates'].map((item)=>(
          
          <li className='app_flex p-text' key={`link-${item}`}>

            <a href={`#${item}`}>{item}</a>
          </li>
          
        ))}
      </ul>
      <div className='app__navbar-menu'>
            
            <HiMenuAlt4 onClick={()=>setToggle(true)}/>

            {toggle && (
              <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}>
                
                <HiX onClick={()=>setToggle()} />
                <ul>
                
                {['home', 'about', 'work', 'skills', 'contact', 'certificates', <Button1 />].map((item)=>(
                
                <li key ={item}>
                <a href = {`#${item}`} onclick={() =>setToggle(false)}>{item}</a>
                </li>
                
                ))}
                
                </ul>

              </motion.div>
            )}
      </div>
    </nav>
    
  )
}

export default Navbar