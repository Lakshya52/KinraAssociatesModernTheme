import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

const Breadcrumb = ({ items }) => (
  <nav className="text-sm my-2 font-dm-serif" aria-label="Breadcrumb">
    <ol className="list-reset flex text-gray-600">
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <li className="flex items-center">
            {item.to ? (
              <Link onClick={handleScrollTop} to={item.to} className="hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold">{item.label}</span>
            )}
          </li>
          {idx < items.length - 1 && <span className="mx-2">/</span>}
        </React.Fragment>
      ))}
    </ol>
  </nav>
);

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string,
    })
  ).isRequired,
};

export default Breadcrumb;
