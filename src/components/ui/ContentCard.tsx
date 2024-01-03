import * as React from 'react';

const ContentCard = ({ children, title, imagePath, imageAlt }) => {

  return (
    <div className="content-card">
      {imagePath &&
        <img src={imagePath} alt={imageAlt} className="project-thumbnail" />
      }
      <div>
        <h3 className="project-title">{title}</h3>
        <p className="project-description-short">{children}</p>
      </div>
    </div>
  );
}

export default ContentCard;