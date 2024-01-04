import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Certificate.scss';

const Certificate = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [certificates, setCertificates] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "certificates"]';

    client.fetch(query).then((data) => {
      setCertificates(data);
    });

  }, []);

  return (
    <>
      {certificates.length && (
        <>
        <h2 className="head-text">My <span>certificates</span></h2>

        <div className="app__certificate app__flex">
        <img src={urlFor(certificates[currentIndex].imgUrl)} alt={certificates[currentIndex].name} />
  
        
        {certificates.map((certificates) => (
          
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={certificates._id}
          >
          </motion.div>
        ))}
        </div>

          <div className="app__certificate-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? certificates.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === certificates.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Certificate, 'app__certificate'),
  'certificates',
  'app__primarybg',
);
