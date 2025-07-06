import { SVGProps } from 'react';

const TickIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      {...props}
    >
      <rect y="0.419922" width="16" height="16" rx="8" fill="#FFF9F9" />
      <path
        d="M4.66675 9.01992L6.76202 11.4199L12.0001 5.41992"
        stroke="#FF2323"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TickIcon;
