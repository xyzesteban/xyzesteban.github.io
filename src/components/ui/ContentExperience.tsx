import * as React from 'react';

const ContentExperience = ({ children, imagePath, imageAlt, title = "", date = "", headline = "" }) => {

    return (
        <div className="content-experience">
            <div className="experience-container">
                {imagePath &&
                    <div className="experience-image">
                        <img src={imagePath} alt={imageAlt} style={{ width: '100px', height: '100px', fill: 'cover', borderRadius: '10px' }} />
                    </div>
                }
                <div className="experience-text">
                    <h3>{title}</h3>
                    <p>{date}</p>
                    <p><h5>{headline}</h5></p>
                </div>
            </div>
            {children}
        </div>
    );
}

export default ContentExperience;