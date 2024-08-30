import React, { useState, useRef } from 'react';
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
            <img className='accordion-button-img'
              style={{ transform: isOpen ? "rotate(0deg)" : null }}
              src={Arrow}
              alt="arrow"
            />
          </button>
          <div
            ref={contentRef}
            className="accordion-content"
            style={{
              maxHeight: isOpen? `${contentRef.current.scrollHeight}px`: "0px",}} >
            
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

export default Accordion;
