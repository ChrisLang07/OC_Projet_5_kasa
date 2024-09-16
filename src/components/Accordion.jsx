import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Arrow from '../assets/images/arrow.png';
import '../assets/styles/components/Accordion.scss';

const Accordion = ({ title, entities, description }) => {

    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
      
        <div className="accordion-item">
          <button className="accordion-button" onClick={toggleAccordion}>
            {title}
            <img className={`accordion-button-img ${isOpen ? 'open': ''}`}
              src={Arrow}
              alt="arrow"
            />
          </button>
          <div
            ref={contentRef}
            className={`accordion-content ${isOpen ? 'shown': 'hidden'}`}
            >
            
            <div className='accordion-text'>
              {entities &&
                entities.map((entity, key) => 
                  <p className='text' key={key}>{entity}</p>)}

              {description && <p className='text'>{description}</p>}
            </div>
          </div>
        </div>
    );
};

Accordion.propTypes = {
  title: PropTypes.string,
  entities: PropTypes.array,
  description: PropTypes.string
}

export default Accordion;
