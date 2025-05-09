import React, { useState } from 'react';
import './Pagination.scss';

interface IProps {
  totalPages: number;
  initialPage?: number;
}

export const Pagination = ({ totalPages, initialPage = 1 }: IProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const getPages = () => {
    const pages: (number | string)[] = [];
    const leftEllipsis = '...';
    const rightEllipsis = '...';

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage <= 3) {
        for (let i = 2; i <= Math.min(4, totalPages); i++) {
          pages.push(i);
        }
      } else {
        pages.push(leftEllipsis);

        for (let i = Math.max(2, currentPage - 1); i <= Math.min(currentPage + 1, totalPages - 1); i++) {
          pages.push(i);
        }
      }

      if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 2; i <= totalPages; i++) {
          if (!pages.includes(i)) {
            pages.push(i);
          }
        }
      } else {
        pages.push(rightEllipsis);
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pages = getPages();

  return (
    <div className="pagination">
      <button
        className="pagination__arrow pagination__prev"
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.2901 12.0002L14.8301 8.46019C15.0163 8.27283 15.1209 8.01938 15.1209 7.75519C15.1209 7.49101 15.0163 7.23756 14.8301 7.05019C14.7371 6.95646 14.6265 6.88207 14.5046 6.8313C14.3828 6.78053 14.2521 6.75439 14.1201 6.75439C13.9881 6.75439 13.8573 6.78053 13.7355 6.8313C13.6136 6.88207 13.503 6.95646 13.4101 7.05019L9.17007 11.2902C9.07634 11.3832 9.00194 11.4938 8.95117 11.6156C8.90041 11.7375 8.87427 11.8682 8.87427 12.0002C8.87427 12.1322 8.90041 12.2629 8.95117 12.3848C9.00194 12.5066 9.07634 12.6172 9.17007 12.7102L13.4101 17.0002C13.5035 17.0929 13.6143 17.1662 13.7362 17.216C13.858 17.2657 13.9885 17.291 14.1201 17.2902C14.2517 17.291 14.3821 17.2657 14.504 17.216C14.6258 17.1662 14.7366 17.0929 14.8301 17.0002C15.0163 16.8128 15.1209 16.5594 15.1209 16.2952C15.1209 16.031 15.0163 15.7776 14.8301 15.5902L11.2901 12.0002Z" fill="#4299FF"/>
        </svg>
      </button>

      {pages.map((page, index) => (
        <button
          key={index}
          className={`pagination__item ${currentPage === page ? 'pagination__active' : ''}`}
          onClick={() => typeof page === 'number' && handlePageClick(page)}
          disabled={page === '...'}
        >
          {page}
        </button>
      ))}

      <button
        className="pagination__arrow pagination__next"
        onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.7099 11.9998L9.16993 15.5398C8.98368 15.7272 8.87914 15.9806 8.87914 16.2448C8.87914 16.509 8.98368 16.7624 9.16993 16.9498C9.2629 17.0435 9.3735 17.1179 9.49536 17.1687C9.61722 17.2195 9.74792 17.2456 9.87993 17.2456C10.0119 17.2456 10.1427 17.2195 10.2645 17.1687C10.3864 17.1179 10.497 17.0435 10.5899 16.9498L14.8299 12.7098C14.9237 12.6168 14.9981 12.5062 15.0488 12.3844C15.0996 12.2625 15.1257 12.1318 15.1257 11.9998C15.1257 11.8678 15.0996 11.7371 15.0488 11.6152C14.9981 11.4934 14.9237 11.3828 14.8299 11.2898L10.5899 6.99981C10.4965 6.90713 10.3857 6.8338 10.2638 6.78404C10.142 6.73427 10.0115 6.70904 9.87994 6.70981C9.74833 6.70904 9.61787 6.73427 9.49603 6.78404C9.37419 6.8338 9.26338 6.90713 9.16994 6.99981C8.98368 7.18717 8.87914 7.44062 8.87914 7.70481C8.87914 7.96899 8.98368 8.22244 9.16994 8.40981L12.7099 11.9998Z" fill="#4299FF"/>
        </svg>
      </button>
    </div>
  );
};