import * as React from 'react';

const ContentCard = ({ title, subtitle, imagePath, imageAlt, onClick }) => {

  return (
    <div className="content-card" onClick={onClick}>
      {imagePath &&
        <img src={imagePath} alt={imageAlt} className="project-thumbnail" />
      }
      <div>
        <h3 className="project-title">{title}</h3>
        <p className="project-description-short">{subtitle}</p>
      </div>
    </div>
  );
}

export default ContentCard;