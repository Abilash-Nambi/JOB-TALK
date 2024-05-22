import React from "react";

const ResumeModal = ({ isOpen, onClose, imageUrl }) => {
  console.log("🚀 + ResumeModal + children:", imageUrl);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-2 text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
        <div className="p-4">
          <img src={imageUrl} alt="Resume" className="w-[27rem]" />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
