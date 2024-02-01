import React, { FC } from 'react';
import { FaTimes } from 'react-icons/fa';

interface ImagePopupProps {
  imageUrl: string;
  onClose: () => void;
}

const ImagePopup: FC<ImagePopupProps> = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none">
          <FaTimes size={20} />
        </button>
        <img src={imageUrl} alt="Popup Image" className="w-full h-auto rounded" />
       
      </div>
    </div>
  );
};

export default ImagePopup;
