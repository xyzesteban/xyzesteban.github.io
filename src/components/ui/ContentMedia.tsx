import * as React from 'react';

const ContentMedia = ({ children, imagePath, imageAlt, title = "", mediaText }) => {

    // TODO: Make it so that it formats the fields properly and displays an image:
    return (
        <div className="content-media">
            <div className="text-container media-text"><h2 className="media-title content-text">{title}</h2></div>
            {imagePath &&
                <img src={imagePath} alt={imageAlt} className="media-thumbnail" />
            }
            <div className="media-container">
                <p className="media-text">{mediaText}</p>
                {children}
            </div>
        </div>
    );
}

export default ContentMedia;