import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-center my-8">
      <button
        className={`mx-1 px-3 py-2 rounded-md text-sm font-medium ${
          currentPage === 1
            ? "text-gray-500 cursor-not-allowed"
            : "text-gray-700 bg-white hover:bg-gray-100"
        }`}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`mx-1 px-3 py-2 rounded-md text-sm font-medium ${
            pageNumber === currentPage
              ? "bg-blue-500 text-white"
              : "text-gray-700 bg-white hover:bg-gray-100"
          }`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className={`mx-1 px-3 py-2 rounded-md text-sm font-medium ${
          currentPage === totalPages
            ? "text-gray-500 cursor-not-allowed"
            : "text-gray-700 bg-white hover:bg-gray-100"
        }`}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
