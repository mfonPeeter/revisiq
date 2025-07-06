import { SVGProps } from 'react';

const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      {...props}
    >
      <path
        d="M6 18.4199L18 6.41992M18 6.41992H9M18 6.41992V15.4199"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRightIcon;
