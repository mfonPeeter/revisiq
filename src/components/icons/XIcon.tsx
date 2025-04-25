import { SVGProps } from 'react';

const XIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      {...props}
    >
      <path
        d="M22.6749 3.13916H26.745L17.8532 13.3019L28.3137 27.1311H20.1232L13.7081 18.7437L6.36784 27.1311H2.29537L11.806 16.2609L1.77124 3.13916H10.1696L15.9683 10.8055L22.6749 3.13916ZM21.2465 24.695H23.5017L8.9442 5.4473H6.5241L21.2465 24.695Z"
        fill="white"
      />
    </svg>
  );
};

export default XIcon;
