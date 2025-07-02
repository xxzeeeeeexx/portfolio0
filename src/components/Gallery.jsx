import React from "react";
import "./Gallery.css";

export default function Gallery({ photos, className = "" }) {
    return (
        <div className={`gallery ${className}`}>
            {photos.map((photo, i) => (
                <div key={i} className="photo-wrapper">
                    <img src={photo.src} alt={photo.alt} />
                </div>
            ))}
        </div>
    );
}