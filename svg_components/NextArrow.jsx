import React from "react";

export const NextArrowSvg = ({ className, ...props }) => {
  return (
    <svg
      viewBox="0 0 30 18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={className}
    >
      <path
        d="M20 18C20 17.046 20.9162 15.6214 21.8438 14.4257C23.0362 12.8829 24.4612 11.5367 26.095 10.5094C27.32 9.73929 28.805 9 30 9M30 9C28.805 9 27.3187 8.26071 26.095 7.49057C24.4612 6.462 23.0362 5.11586 21.8438 3.57557C20.9162 2.37857 20 0.951429 20 0M30 9L0 9"
        stroke-width="2"
      />
    </svg>
  );
};
