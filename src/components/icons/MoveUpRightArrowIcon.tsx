import { SVGProps } from 'react';

const MoveUpRightArrowIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6 18.42L18 6.42004M18 6.42004H9M18 6.42004V15.42"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MoveUpRightArrowIcon;
