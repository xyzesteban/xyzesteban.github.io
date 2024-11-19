import * as React from 'react';

const ContentContact = ({ title, link, icon }) => {

  return (
    <a href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{textDecoration: 'none'}}
    >
        <div className="content-contact content-contact-button">
            <img style={{maxWidth: '90px', maxHeight: '65px', padding: '20px', paddingBottom: '10px'}} alt="" src={icon} />
            <div className="content-contact-title">{title}</div>
        </div>
    </a>
  );
}

export default ContentContact;