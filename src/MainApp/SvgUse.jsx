import React from 'react';

const SvgUse = ({ xlinkHref, ...props }) => {
  return (
    <svg {...props}>
      <use xlinkHref={xlinkHref} />
    </svg>
  );
};

export default SvgUse;
