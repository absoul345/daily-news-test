import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination flex justify-center mt-4">
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`mr-1 px-3 py-1 rounded-full ${
            pageNumber === currentPage
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200'
          }`}
          onClick={() => onPageChange(pageNumber)}
        >
          <span className="block text-center">{pageNumber}</span>
        </button>
      ))}
    </div>
  );
};

export default Pagination;
