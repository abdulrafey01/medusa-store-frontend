import React from "react";

type Props = {
  className: string;
};

const AccountSvg = ({ className }: Props) => {
  return (
    <svg
      version="1.1"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 120 120"
      enable-background="new 0 0 120 120"
      xmlSpace="preserve"
    >
      <path d="M84.6,62c-14.1,12.3-35.1,12.3-49.2,0C16.1,71.4,3.8,91,3.8,112.5c0,2.1,1.7,3.8,3.8,3.8h105c2.1,0,3.8-1.7,3.8-3.8 C116.2,91,103.9,71.4,84.6,62z"></path>
      <circle cx="60" cy="33.8" r="30"></circle>
    </svg>
  );
};

export default AccountSvg;