import React from 'react';
import GalleryModalCSS from '../style/GalleryModal.css';

const GalleryModal = ({name, location, updateGalleryDisplay}) => (
  <>
    <div className={GalleryModalCSS.modalBackground}>
      <div className={GalleryModalCSS.modalContent}>
        <div className={GalleryModalCSS.modalHeader}>
          Photos of
          {' '}
          {name}
          {' '}
          from
          {' '}
          {location}
          <button
            type="button"
            className={GalleryModalCSS.exit}
            onClick={updateGalleryDisplay}
          >
            X
          </button>
        </div>
        <div className={GalleryModalCSS.modalGallery} />
      </div>
    </div>
  </>
);

export default GalleryModal;
